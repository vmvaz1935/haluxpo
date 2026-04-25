import { theme } from '../theme';
import { timeline } from '../data/content';
import { BarChart2, Clock } from './Icons';

export default function TimelineView() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div
        className="p-4 sm:p-6"
        style={{
          backgroundColor: theme.white,
          border: `1px solid ${theme.stroke}`,
          borderRadius: theme.radiusLg,
          boxShadow: theme.shadowSm,
        }}
      >
        <h2
          className="font-bold mb-1.5 flex items-center"
          style={{ color: theme.primaryDark, fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.05rem, 3vw, 1.3rem)' }}
        >
          <BarChart2 className="mr-2 shrink-0" style={{ color: theme.primary }} /> Marcos da Recuperação
        </h2>
        <p className="mb-4" style={{ color: theme.textMuted, lineHeight: '1.6', fontSize: '0.82rem' }}>
          Estimativa de quando você poderá retomar atividades.
        </p>

        <div
          className="mb-5 overflow-hidden"
          style={{
            background: theme.surfaceSoft,
            border: `1px solid ${theme.stroke}`,
            borderRadius: theme.radiusSm,
          }}
        >
          <img
            src="/assets/cartilha/14-hv-recovery-timeline.png"
            alt="Linha do tempo vertical com marcos da recuperação pós-operatória"
            loading="lazy"
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </div>

        <div className="relative pl-5 space-y-6" style={{ borderLeft: `2px solid ${theme.primaryLight}` }}>
          {timeline.map((item, idx) => (
            <div key={idx} className="relative">
              <div
                className="absolute"
                style={{
                  left: '-25px',
                  top: '2px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})`,
                  border: `2px solid ${theme.white}`,
                  boxShadow: '0 2px 6px rgba(183, 139, 76, 0.3)',
                }}
              />
              <div>
                <span
                  className="font-bold block mb-1.5"
                  style={{ color: theme.primaryDark, fontFamily: "'Poppins', sans-serif", fontSize: '0.88rem' }}
                >
                  {item.time}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.items.map((activity, i) => (
                    <span
                      key={i}
                      className="font-medium inline-block"
                      style={{
                        color: theme.textSecondary,
                        backgroundColor: theme.primaryLight,
                        borderRadius: '999px',
                        border: `1px solid ${theme.stroke}`,
                        fontSize: '0.78rem',
                        padding: '4px 10px',
                        lineHeight: '1.4',
                      }}
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs mt-5 italic" style={{ color: theme.textMuted, fontSize: '0.72rem' }}>
          *Consulte seu cirurgião para prazos específicos.
        </p>
      </div>

      <div
        className="overflow-hidden"
        style={{
          background: theme.white,
          border: `1px solid ${theme.stroke}`,
          borderRadius: theme.radiusLg,
          boxShadow: theme.shadowSm,
        }}
      >
        <img
          src="/assets/cartilha/26-hv-patient-journey.png"
          alt="Jornada da paciente: avaliação, planejamento, preparo, hospital e reabilitação"
          loading="lazy"
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
        <div className="px-4 sm:px-6 py-4">
          <p
            className="font-bold mb-1"
            style={{ color: theme.primaryDark, fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem' }}
          >
            Jornada da paciente
          </p>
          <p style={{ color: theme.textMuted, fontSize: '0.78rem', lineHeight: '1.55' }}>
            Avaliação inicial, planejamento individualizado, preparo, cuidado hospitalar e reabilitação com fisioterapia.
          </p>
        </div>
      </div>

      <div
        className="p-4 sm:p-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #c9a66b 0%, #b78b4c 40%, #9a7239 100%)',
          borderRadius: theme.radiusLg,
          boxShadow: theme.shadowLg,
        }}
      >
        <div className="relative z-10">
          <h3
            className="font-bold mb-4 flex items-center text-white"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(0.95rem, 3vw, 1.15rem)' }}
          >
            <Clock className="mr-2 shrink-0" style={{ color: 'rgba(255,255,255,0.8)' }} /> Tempo Médio de Recuperação
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { val: '2 meses', label: 'Atividade física de baixo impacto' },
              { val: '3 meses', label: 'Liberação de calçados e atividade de maior impacto' },
              { val: '6 meses', label: 'Alta médica' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-3.5 backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: theme.radiusMd,
                }}
              >
                <p className="font-bold text-xl mb-0.5 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.val}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.78rem', lineHeight: '1.4' }}>{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 italic" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.72rem' }}>
            *A liberação progressiva de calçados e atividades depende da consolidação óssea. Controle radiográfico no retorno.
          </p>
        </div>
      </div>

      <div
        className="overflow-hidden"
        style={{
          background: theme.white,
          border: `1px solid ${theme.stroke}`,
          borderRadius: theme.radiusLg,
          boxShadow: theme.shadowSm,
        }}
      >
        <img
          src="/assets/cartilha/16-hv-realistic-expectations.png"
          alt="Expectativa realista: equilíbrio entre função do pé e calçado confortável"
          loading="lazy"
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
        <div className="px-4 sm:px-6 py-4">
          <p
            className="font-bold mb-1"
            style={{ color: theme.primaryDark, fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem' }}
          >
            Expectativas realistas
          </p>
          <p style={{ color: theme.textMuted, fontSize: '0.78rem', lineHeight: '1.55' }}>
            O foco do tratamento é função, conforto ao caminhar e adequação ao calçado — a evolução é individual e
            depende da consolidação óssea e do programa de reabilitação.
          </p>
        </div>
      </div>
    </div>
  );
}
