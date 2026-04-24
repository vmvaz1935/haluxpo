import { theme } from '../theme';
import type { Phase } from '../types';
import { CheckCircle, Activity, AlertCircle, ChevronDown, ChevronUp } from './Icons';

interface PhaseCardProps {
  phase: Phase;
  isActive: boolean;
  onClick: () => void;
}

export default function PhaseCard({ phase, isActive, onClick }: PhaseCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer relative overflow-hidden touch-active"
      style={{
        backgroundColor: theme.white,
        border: `1px solid ${isActive ? theme.strokeStrong : theme.stroke}`,
        borderRadius: theme.radiusMd,
        padding: '1rem 1rem 1rem 1.25rem',
        boxShadow: isActive ? theme.shadowMd : theme.shadowSm,
        transition: 'all 300ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <div
        className="absolute top-0 left-0 h-full"
        style={{
          width: isActive ? '4px' : '3px',
          backgroundColor: isActive ? theme.primary : theme.stroke,
          transition: 'all 300ms ease',
          borderRadius: '0 2px 2px 0',
        }}
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div
            className="shrink-0"
            style={{
              borderRadius: '12px',
              backgroundColor: isActive ? theme.primaryLight : theme.surfaceSoft,
              color: isActive ? theme.primary : theme.textMuted,
              transition: 'all 300ms ease',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {phase.icon}
          </div>
          <div className="min-w-0">
            <h3
              className="font-bold leading-snug"
              style={{
                color: isActive ? theme.primaryDark : theme.textSecondary,
                fontFamily: "'Poppins', sans-serif",
                transition: 'color 200ms ease',
                fontSize: 'clamp(0.85rem, 2.5vw, 1.05rem)',
              }}
            >
              {phase.title}
            </h3>
            <p
              className="font-semibold uppercase inline-block px-2 py-0.5 mt-1"
              style={{
                backgroundColor: theme.primaryLight,
                color: theme.primaryDark,
                fontFamily: "'Poppins', sans-serif",
                borderRadius: '999px',
                border: `1px solid ${theme.strokeStrong}`,
                letterSpacing: '0.08em',
                fontSize: '0.65rem',
              }}
            >
              {phase.duration}
            </p>
          </div>
        </div>
        <div className="shrink-0 ml-2" style={{ minWidth: '24px', minHeight: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {isActive ? (
            <ChevronUp size={20} style={{ color: theme.primary }} />
          ) : (
            <ChevronDown size={20} style={{ color: theme.textMuted, opacity: 0.4 }} />
          )}
        </div>
      </div>

      {isActive && (
        <div className="mt-5 animate-slideDown" onClick={(e) => e.stopPropagation()}>
          <p
            className="mb-5 text-sm p-3.5"
            style={{
              color: theme.textSecondary,
              background: `linear-gradient(135deg, ${theme.white}, ${theme.surfaceSoft})`,
              border: `1px solid ${theme.stroke}`,
              borderLeft: `4px solid ${theme.primary}`,
              borderRadius: theme.radiusSm,
              lineHeight: '1.6',
              fontSize: '0.82rem',
            }}
          >
            💡 <strong>Foco da fase:</strong> {phase.description}
          </p>

          <div className="space-y-5">
            <SectionBlock
              title="Suas Metas"
              icon={<CheckCircle className="w-4 h-4" style={{ color: theme.primary }} />}
              titleColor={theme.primaryDark}
              borderColor={theme.stroke}
            >
              <ul className="space-y-2">
                {phase.goals.map((goal, idx) => (
                  <li key={idx} className="flex flex-col p-2 rounded" style={{ backgroundColor: theme.surfaceSoft, fontSize: '0.82rem' }}>
                    <span className="font-semibold uppercase" style={{ color: theme.primaryDark, fontFamily: "'Poppins', sans-serif", fontSize: '0.68rem', letterSpacing: '0.04em' }}>
                      {goal.label}
                    </span>
                    <span style={{ color: theme.textSecondary, fontSize: '0.82rem' }}>{goal.value}</span>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock
              title="O que fazer"
              icon={<Activity className="w-4 h-4" style={{ color: theme.medicalSage }} />}
              titleColor={theme.medicalSage}
              borderColor={theme.medicalSageSoft}
            >
              <BulletList items={phase.toDos} dotColor={theme.medicalSage} bgColor={theme.medicalSageSoft} />
            </SectionBlock>

            <SectionBlock
              title="O que evitar"
              icon={<AlertCircle className="w-4 h-4" style={{ color: theme.error }} />}
              titleColor={theme.error}
              borderColor="rgba(239, 68, 68, 0.15)"
            >
              <BulletList items={phase.avoid} dotColor={theme.error} bgColor="#fef2f2" />
            </SectionBlock>

            <SectionBlock
              title="Exercícios"
              icon={<Activity className="w-4 h-4" style={{ color: theme.warning }} />}
              titleColor={theme.warning}
              borderColor="rgba(245, 158, 11, 0.15)"
            >
              <BulletList items={phase.exercises} dotColor={theme.warning} bgColor="#fffbeb" />
              <p className="text-xs mt-2 italic" style={{ color: theme.primaryDark, fontSize: '0.72rem' }}>
                *Exercícios específicos dependem da técnica cirúrgica. Siga orientações do seu fisioterapeuta ou cirurgião.
              </p>
            </SectionBlock>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionBlock({ title, icon, titleColor, borderColor, children }: {
  title: string;
  icon: React.ReactNode;
  titleColor: string;
  borderColor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4
        className="font-bold uppercase mb-2.5 flex items-center gap-1.5 pb-2"
        style={{
          color: titleColor,
          borderBottom: `1px solid ${borderColor}`,
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: '0.06em',
          fontSize: '0.72rem',
        }}
      >
        {icon} {title}
      </h4>
      {children}
    </div>
  );
}

function BulletList({ items, dotColor, bgColor }: { items: string[]; dotColor: string; bgColor: string }) {
  return (
    <ul className="space-y-1.5 p-3" style={{ backgroundColor: bgColor, borderRadius: theme.radiusSm }}>
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start" style={{ color: theme.textSecondary, lineHeight: '1.5', fontSize: '0.82rem' }}>
          <div className="w-1.5 h-1.5 rounded-full mt-1.5 mr-2 shrink-0" style={{ backgroundColor: dotColor }} />
          {item}
        </li>
      ))}
    </ul>
  );
}
