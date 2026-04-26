import { useState } from 'react';
import { theme } from '../theme';
import { exerciseGroups } from '../data/exercises';
import type { ExerciseGroup, Exercise } from '../types';
import { Activity, AlertCircle, ChevronDown, ChevronUp, Info } from './Icons';

const phaseColors: Record<string, { bg: string; border: string; text: string }> = {
  'release-mobility': { bg: theme.medicalSageSoft, border: 'rgba(125,148,137,0.3)', text: theme.medicalSage },
  'stretching': { bg: '#eff6ff', border: 'rgba(74,124,138,0.3)', text: theme.accentBlue },
  'strengthening': { bg: theme.primaryLight, border: theme.strokeStrong, text: theme.primaryDark },
  'functional': { bg: '#fffbeb', border: 'rgba(245,158,11,0.3)', text: '#92400e' },
  'advanced': { bg: '#fef2f2', border: 'rgba(239,68,68,0.25)', text: '#991b1b' },
};

function ExerciseCard({ exercise, index }: { exercise: Exercise; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="cursor-pointer overflow-hidden touch-active"
      style={{
        border: `1px solid ${theme.stroke}`,
        borderRadius: theme.radiusSm,
        background: theme.white,
        transition: 'all 250ms ease',
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center p-3 gap-3">
        <div
          className="shrink-0 flex items-center justify-center font-bold"
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})`,
            color: '#fff',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.78rem',
          }}
        >
          {index + 1}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold" style={{ color: theme.textPrimary, fontFamily: "'Poppins', sans-serif", fontSize: '0.82rem', lineHeight: '1.3' }}>
            {exercise.title}
          </h4>
          <span style={{ color: theme.textMuted, fontSize: '0.7rem' }}>{exercise.dosage}</span>
        </div>
        <div className="shrink-0" style={{ minWidth: '20px' }}>
          {expanded ? (
            <ChevronUp size={18} style={{ color: theme.primary }} />
          ) : (
            <ChevronDown size={18} style={{ color: theme.textMuted, opacity: 0.4 }} />
          )}
        </div>
      </div>

      {expanded && (
        <div className="animate-slideDown" onClick={(e) => e.stopPropagation()}>
          <div
            style={{
              background: theme.surfaceSoft,
              padding: '0.75rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderTop: `1px solid ${theme.stroke}`,
              borderBottom: `1px solid ${theme.stroke}`,
            }}
          >
            <img
              src={exercise.image}
              alt={exercise.title}
              loading="lazy"
              style={{
                maxHeight: '220px',
                maxWidth: '100%',
                width: 'auto',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
          </div>
          <div className="p-3">
            <p style={{ color: theme.textSecondary, lineHeight: '1.55', fontSize: '0.82rem' }}>
              {exercise.description}
            </p>
            <div
              className="mt-2.5 flex items-center gap-2 px-3 py-2"
              style={{
                background: theme.primaryLight,
                borderRadius: '8px',
                border: `1px solid ${theme.stroke}`,
              }}
            >
              <Activity size={14} style={{ color: theme.primary, flexShrink: 0 }} />
              <span className="font-semibold" style={{ color: theme.primaryDark, fontSize: '0.75rem' }}>
                Dose: {exercise.dosage}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function GroupSection({ group }: { group: ExerciseGroup }) {
  const [open, setOpen] = useState(false);
  const colors = phaseColors[group.id] ?? phaseColors['strengthening'];

  return (
    <div
      style={{
        border: `1px solid ${colors.border}`,
        borderRadius: theme.radiusMd,
        overflow: 'hidden',
      }}
    >
      <div
        className="cursor-pointer p-4 flex items-center justify-between gap-3 touch-active"
        style={{ background: colors.bg }}
        onClick={() => setOpen(!open)}
      >
        <div className="min-w-0">
          <h3 className="font-bold" style={{ color: colors.text, fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(0.95rem, 3vw, 1.1rem)' }}>
            {group.title}
          </h3>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span
              className="font-semibold uppercase inline-block px-2 py-0.5"
              style={{
                color: colors.text,
                border: `1px solid ${colors.border}`,
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.6)',
                letterSpacing: '0.05em',
                fontSize: '0.62rem',
              }}
            >
              {group.phase}
            </span>
            <span style={{ color: theme.textMuted, fontSize: '0.7rem' }}>
              {group.exercises.length} exercício{group.exercises.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>
        <div className="shrink-0 flex items-center gap-1.5">
          <span
            className="font-bold flex items-center justify-center"
            style={{
              backgroundColor: colors.text,
              color: '#fff',
              borderRadius: '999px',
              fontSize: '0.65rem',
              width: '22px',
              height: '22px',
            }}
          >
            {group.exercises.length}
          </span>
          {open ? (
            <ChevronUp size={20} style={{ color: colors.text }} />
          ) : (
            <ChevronDown size={20} style={{ color: colors.text }} />
          )}
        </div>
      </div>

      {open && (
        <div className="p-3 space-y-2 animate-slideDown" style={{ background: theme.white }}>
          {group.exercises.map((ex, idx) => (
            <ExerciseCard key={ex.id} exercise={ex} index={idx} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ExercisesView() {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div
        className="overflow-hidden"
        style={{
          background: theme.white,
          border: `1px solid ${theme.stroke}`,
          borderLeft: `4px solid ${theme.primary}`,
          borderRadius: theme.radiusSm,
        }}
      >
        <div className="p-4">
          <h2
            className="font-bold flex items-center mb-1.5"
            style={{ color: theme.primaryDark, fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}
          >
            <Activity className="mr-2 shrink-0" style={{ color: theme.primary }} />
            Exercícios e Mobilizações
          </h2>
          <p style={{ color: theme.textSecondary, lineHeight: '1.6', fontSize: '0.82rem' }}>
            Toque em cada grupo para ver os exercícios com imagem e descrição.
          </p>
        </div>
        <div
          className="flex justify-center"
          style={{
            background: theme.surfaceSoft,
            borderTop: `1px solid ${theme.stroke}`,
            padding: '12px',
          }}
        >
          <img
            src="/assets/cartilha/12-hv-hallux-toe-mobilization.png"
            alt="Mobilização suave do hálux e dos demais dedos após liberação"
            loading="lazy"
            style={{ display: 'block', maxWidth: '100%', maxHeight: '200px', width: 'auto', height: 'auto' }}
          />
        </div>
      </div>

      <div
        className="flex items-start gap-2.5 p-3.5"
        style={{
          background: theme.primaryLight,
          border: `1px solid ${theme.strokeStrong}`,
          borderRadius: theme.radiusSm,
        }}
      >
        <AlertCircle size={18} className="shrink-0 mt-0.5" style={{ color: theme.warning }} />
        <p style={{ color: theme.textSecondary, lineHeight: '1.55', fontSize: '0.75rem' }}>
          <strong style={{ color: theme.primaryDark }}>Nota clínica:</strong> Ajuste dose e progressão conforme avaliação individual.
          Inicie apenas quando liberado pela equipe.
        </p>
      </div>

      {exerciseGroups.map((group) => (
        <GroupSection key={group.id} group={group} />
      ))}

      <div
        className="flex items-start gap-2.5 p-3.5"
        style={{
          border: `1px solid ${theme.stroke}`,
          borderLeft: `4px solid ${theme.primary}`,
          borderRadius: theme.radiusSm,
          background: `linear-gradient(135deg, ${theme.white}, ${theme.surfaceSoft})`,
        }}
      >
        <Info size={16} className="shrink-0 mt-0.5" style={{ color: theme.primary }} />
        <p style={{ color: theme.textMuted, lineHeight: '1.55', fontSize: '0.72rem' }}>
          A progressão deve ser orientada pelo seu cirurgião e fisioterapeuta.
          Se sentir dor aguda ou inchaço que persiste, suspenda e consulte a equipe.
        </p>
      </div>
    </div>
  );
}
