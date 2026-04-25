import { theme } from '../theme';
import { AlertCircle, ChevronDown } from './Icons';

interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center animate-fadeIn min-h-screen"
      style={{
        background: 'linear-gradient(160deg, #c9a66b 0%, #b78b4c 40%, #9a7239 100%)',
        color: 'white',
        padding: 'calc(2rem + var(--safe-top, 0px)) 1.25rem calc(2rem + var(--safe-bottom, 0px))',
      }}
    >
      <img
        src="/design-system/assets/logo-branca.png.webp"
        alt="Logo"
        className="mb-5"
        style={{ maxHeight: '80px', maxWidth: '240px', height: 'auto', width: 'auto' }}
      />
      <div
        className="mb-6 overflow-hidden"
        style={{
          width: '100%',
          maxWidth: '320px',
          borderRadius: theme.radiusLg,
          border: '1px solid rgba(255,255,255,0.25)',
          boxShadow: '0 12px 36px rgba(0,0,0,0.18)',
        }}
      >
        <img
          src="/assets/cartilha/01-cover-hero-hallux-valgus.png"
          alt="Capa: pés cuidados em recuperação pós-operatória de hálux valgo"
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
      </div>
      <h1
        className="font-bold mb-3"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(1.5rem, 5vw, 3rem)',
          letterSpacing: '-0.025em',
          lineHeight: '1.15',
          color: '#fff',
          maxWidth: '500px',
        }}
      >
        Recuperação Após Cirurgia de Hálux Valgo
      </h1>
      <p className="mb-8 max-w-md" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)' }}>
        Orientações para uma recuperação segura e eficaz
      </p>

      <div
        className="w-full max-w-md p-5 mb-8 text-left"
        style={{
          backgroundColor: 'rgba(255,255,255,0.93)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: theme.radiusMd,
          borderLeft: `4px solid ${theme.warning}`,
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        }}
      >
        <h3
          className="font-bold mb-1.5 flex items-center"
          style={{ color: theme.primaryDark, fontFamily: "'Poppins', sans-serif", fontSize: '0.88rem' }}
        >
          <AlertCircle size={18} className="mr-2 shrink-0" style={{ color: theme.warning }} />
          IMPORTANTE
        </h3>
        <p style={{ color: theme.textSecondary, lineHeight: '1.6', fontSize: '0.82rem' }}>
          Este material é educativo e geral. Sempre siga as orientações específicas do seu cirurgião, pois o plano de
          recuperação varia conforme a técnica cirúrgica utilizada e suas condições individuais.
        </p>
        <div
          className="mt-3 overflow-hidden"
          style={{
            borderRadius: theme.radiusSm,
            border: `1px solid ${theme.stroke}`,
          }}
        >
          <img
            src="/assets/cartilha/02-important-notice-hallux-valgus.png"
            alt="Aviso educativo: prancheta com sandália cirúrgica representando orientação segura"
            loading="lazy"
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </div>
      </div>

      <button
        onClick={onStart}
        className="touch-active font-bold flex items-center text-white"
        style={{
          background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
          borderRadius: theme.radiusSm,
          border: '1px solid rgba(255,255,255,0.15)',
          fontFamily: "'Poppins', sans-serif",
          fontSize: '0.95rem',
          fontWeight: 600,
          letterSpacing: '0.01em',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          transition: 'all 280ms cubic-bezier(0.22, 1, 0.36, 1)',
          padding: '14px 32px',
          minHeight: '48px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)';
        }}
      >
        Começar <ChevronDown size={18} className="ml-2" />
      </button>
    </div>
  );
}
