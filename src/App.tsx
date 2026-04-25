import { useState, useRef, useEffect, useCallback } from 'react';
import { theme } from './theme';
import { phases } from './data/content';
import type { TabKey } from './types';
import IntroScreen from './components/IntroScreen';
import PhaseCard from './components/PhaseCard';
import TimelineView from './components/TimelineView';
import GuidelinesView from './components/GuidelinesView';
import ExercisesView from './components/ExercisesView';
import { Info, Layers, Calendar, Activity, Book } from './components/Icons';

const tabs: { key: TabKey; label: string; icon: typeof Layers }[] = [
  { key: 'phases', label: 'Fases', icon: Layers },
  { key: 'timeline', label: 'Previsão', icon: Calendar },
  { key: 'exercises', label: 'Exercícios', icon: Activity },
  { key: 'guidelines', label: 'Orientações', icon: Book },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('phases');
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);
  const [showIntro, setShowIntro] = useState(true);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleTabChange = useCallback((key: TabKey) => {
    setActiveTab(key);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', showIntro ? '#b78b4c' : '#f8f8f8');
  }, [showIntro]);

  if (showIntro) {
    return <IntroScreen onStart={() => setShowIntro(false)} />;
  }

  return (
    <div
      className="min-h-screen"
      style={{
        background: theme.background,
        color: theme.textSecondary,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        paddingBottom: 'calc(72px + var(--safe-bottom, 0px))',
      }}
    >
      <div className="max-w-3xl mx-auto" ref={mainRef}>
        {/* Header */}
        <header
          className="sticky top-0 z-30 flex justify-between items-center"
          style={{
            backdropFilter: 'blur(20px) saturate(1.5)',
            WebkitBackdropFilter: 'blur(20px) saturate(1.5)',
            background: 'rgba(248, 248, 248, 0.88)',
            borderBottom: `1px solid ${theme.stroke}`,
            padding: '0 1rem',
            minHeight: '56px',
          }}
        >
          <div className="flex items-center gap-2.5">
            <img
              src="/design-system/assets/logo-principal.png.webp"
              alt="Logo"
              style={{ height: '32px', width: 'auto' }}
            />
            <div>
              <h1
                className="font-bold leading-tight"
                style={{ color: theme.textPrimary, fontFamily: "'Poppins', sans-serif", fontSize: '0.85rem' }}
              >
                Guia de Recuperação
              </h1>
              <p
                className="uppercase"
                style={{ color: theme.textMuted, fontSize: '0.6rem', letterSpacing: '0.1em', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}
              >
                Hálux Valgo
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowIntro(true)}
            className="touch-active"
            style={{
              color: theme.textMuted,
              borderRadius: '10px',
              padding: '8px',
              transition: 'all 200ms ease',
              minWidth: '40px',
              minHeight: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.primaryGlow;
              e.currentTarget.style.color = theme.primaryDark;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = theme.textMuted;
            }}
            title="Sobre este guia"
          >
            <Info size={20} />
          </button>
        </header>

        {/* Content */}
        <main className="px-4 pt-4 pb-6">
          {activeTab === 'phases' ? (
            <div className="space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between mb-2 px-1">
                <p
                  className="uppercase font-bold"
                  style={{ color: theme.textMuted, fontFamily: "'Poppins', sans-serif", fontSize: '0.68rem', letterSpacing: '0.08em' }}
                >
                  Passo a Passo
                </p>
                <span
                  className="px-2 py-0.5 font-semibold"
                  style={{
                    color: theme.primaryDark,
                    backgroundColor: theme.primaryLight,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.62rem',
                    borderRadius: '999px',
                    border: `1px solid ${theme.strokeStrong}`,
                    letterSpacing: '0.04em',
                  }}
                >
                  Toque para expandir
                </span>
              </div>
              {phases.map((phase) => (
                <PhaseCard
                  key={phase.id}
                  phase={phase}
                  isActive={selectedPhase === phase.id}
                  onClick={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
                />
              ))}
            </div>
          ) : activeTab === 'timeline' ? (
            <TimelineView />
          ) : activeTab === 'exercises' ? (
            <ExercisesView />
          ) : (
            <GuidelinesView expandedSection={expandedSection} setExpandedSection={setExpandedSection} />
          )}
        </main>

        {/* Footer */}
        <footer className="text-center pb-6 px-4" style={{ borderTop: `1px solid ${theme.stroke}`, paddingTop: '1.5rem' }}>
          <div
            className="mx-auto mb-4 overflow-hidden"
            style={{
              maxWidth: '420px',
              borderRadius: theme.radiusMd,
              border: `1px solid ${theme.stroke}`,
              background: theme.surfaceSoft,
            }}
          >
            <img
              src="/assets/cartilha/29-hv-ethical-closing-footer.png"
              alt="Encerramento ético: cuidado, responsabilidade e educação"
              loading="lazy"
              style={{ display: 'block', width: '100%', height: 'auto' }}
            />
          </div>
          <div className="w-10 h-0.5 mx-auto mb-3" style={{ backgroundColor: theme.primaryLight, borderRadius: '2px' }} />
          <p className="font-bold" style={{ color: theme.primaryDark, fontFamily: "'Poppins', sans-serif", fontSize: '0.8rem' }}>
            Guia de Recuperação Pós-Operatória
          </p>
          <p className="mt-2 max-w-xs mx-auto leading-relaxed" style={{ color: theme.textMuted, fontSize: '0.75rem' }}>
            *Este guia é educativo e geral. Sempre consulte seu cirurgião para orientações específicas.
          </p>
        </footer>
      </div>

      {/* Bottom Navigation */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40"
        style={{
          backdropFilter: 'blur(20px) saturate(1.5)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.5)',
          background: 'rgba(255, 255, 255, 0.92)',
          borderTop: `1px solid ${theme.stroke}`,
          paddingBottom: 'var(--safe-bottom, 0px)',
        }}
      >
        <div className="max-w-3xl mx-auto flex">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className="flex-1 touch-active"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '2px',
                  padding: '8px 4px 10px',
                  minHeight: '56px',
                  transition: 'all 200ms ease',
                  position: 'relative',
                }}
              >
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '25%',
                      right: '25%',
                      height: '2.5px',
                      borderRadius: '0 0 4px 4px',
                      background: `linear-gradient(90deg, ${theme.primary}, ${theme.primaryDark})`,
                    }}
                  />
                )}
                <Icon
                  size={20}
                  style={{
                    color: isActive ? theme.primary : theme.textMuted,
                    transition: 'color 200ms ease',
                    opacity: isActive ? 1 : 0.55,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.62rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? theme.primaryDark : theme.textMuted,
                    letterSpacing: '0.02em',
                    transition: 'all 200ms ease',
                    opacity: isActive ? 1 : 0.7,
                  }}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
