import { theme } from '../theme';
import { generalGuidelines, dailyActivities, faqs, warningSigns, milestones } from '../data/content';
import {
  Shield, Activity, Info, AlertCircle, Award, ChevronDown, ChevronUp,
  Hand, Phone, Users, UserCircle, Mail, MapPin, Globe,
} from './Icons';

interface GuidelinesViewProps {
  expandedSection: string | null;
  setExpandedSection: (section: string | null) => void;
}

export default function GuidelinesView({ expandedSection, setExpandedSection }: GuidelinesViewProps) {
  return (
    <div className="space-y-5 animate-fadeIn">
      {/* Orientações Gerais */}
      <Section
        title="Orientações Gerais"
        icon={<Shield className="mr-2 shrink-0" style={{ color: theme.primary }} />}
      >
        <div className="space-y-2.5">
          {generalGuidelines.map((g) => (
            <AccordionItem
              key={g.id}
              isOpen={expandedSection === g.id}
              onToggle={() => setExpandedSection(expandedSection === g.id ? null : g.id)}
              icon={g.icon}
              title={g.title}
              iconBg={theme.primary}
              titleColor={theme.primaryDark}
              chevronColor={theme.primary}
              bg={theme.primaryLight}
              borderColor={theme.stroke}
              image={g.image}
              imageAlt={g.imageAlt}
            >
              <ul className="mt-3 space-y-1.5 pl-2">
                {g.items.map((item, idx) => (
                  <li key={idx} className="flex items-start" style={{ color: theme.textSecondary, fontSize: '0.82rem', lineHeight: '1.5' }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 mr-2 shrink-0" style={{ backgroundColor: theme.primary }} />
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionItem>
          ))}
        </div>
      </Section>

      {/* Massagem da Cicatriz */}
      <div
        className="p-4 sm:p-6"
        style={{
          background: `linear-gradient(160deg, ${theme.white}, ${theme.surfaceSoft})`,
          border: `1px solid ${theme.stroke}`,
          borderRadius: theme.radiusLg,
          boxShadow: theme.shadowSm,
        }}
      >
        <div className="mb-4">
          <p
            className="uppercase font-bold mb-2"
            style={{
              color: theme.primaryDark,
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.08em',
              border: `1px solid ${theme.strokeStrong}`,
              borderRadius: '999px',
              display: 'inline-flex',
              padding: '0.25rem 0.75rem',
              background: theme.primaryLight,
            }}
          >
            Quando liberado pela equipe
          </p>
          <h2
            className="font-bold flex items-center"
            style={{ color: theme.textPrimary, fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}
          >
            <Hand className="mr-2 shrink-0" style={{ color: theme.primary }} /> Massagem da Cicatriz
          </h2>
          <p className="mt-1" style={{ color: theme.textMuted, fontSize: '0.85rem', lineHeight: '1.6' }}>
            Com dois dedos sobre a cicatriz, realize movimentos suaves e lentos em três direções. Pressão firme, mas sem dor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { src: '/assets/massagem-cicatriz/01_vertical.png', title: 'Vertical', desc: 'Deslize para cima e para baixo ao longo da cicatriz' },
            { src: '/assets/massagem-cicatriz/02_horizontal.png', title: 'Horizontal', desc: 'Deslize de um lado para o outro, cruzando a cicatriz' },
            { src: '/assets/massagem-cicatriz/03_circular.png', title: 'Circular', desc: 'Movimentos circulares sobre e ao redor da cicatriz' },
          ].map((tech, idx) => (
            <div
              key={idx}
              style={{
                border: `1px solid ${theme.stroke}`,
                borderRadius: theme.radiusSm,
                background: theme.white,
                overflow: 'hidden',
              }}
            >
              <div style={{ background: theme.surfaceSoft, padding: '0.75rem', display: 'flex', justifyContent: 'center' }}>
                <img src={tech.src} alt={tech.title} loading="lazy" style={{ maxHeight: '150px', width: 'auto', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '0.75rem' }}>
                <span className="font-bold" style={{ fontFamily: "'Poppins', sans-serif", color: theme.textPrimary, fontSize: '0.88rem' }}>
                  {idx + 1}. {tech.title}
                </span>
                <p style={{ color: theme.textMuted, fontSize: '0.78rem', lineHeight: '1.45', marginTop: '2px' }}>{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-3 flex items-start gap-2.5"
          style={{
            padding: '0.75rem 1rem',
            border: `1px solid ${theme.stroke}`,
            borderLeft: `4px solid ${theme.primary}`,
            borderRadius: theme.radiusSm,
            background: `linear-gradient(135deg, ${theme.white}, ${theme.surfaceSoft})`,
          }}
        >
          <Info size={16} className="shrink-0 mt-0.5" style={{ color: theme.primary }} />
          <p style={{ fontSize: '0.78rem', lineHeight: '1.55', color: theme.textMuted }}>
            Realize cada movimento por <strong style={{ color: theme.textSecondary }}>1-2 minutos</strong>, 1-2× ao dia. Se houver dor, suspenda e consulte a equipe.
          </p>
        </div>
      </div>

      {/* Atividades de Vida Diária */}
      <Section
        title="Atividades de Vida Diária"
        icon={<Activity className="mr-2 shrink-0" style={{ color: theme.primary }} />}
      >
        <div className="space-y-2.5">
          {dailyActivities.map((a) => (
            <AccordionItem
              key={a.id}
              isOpen={expandedSection === a.id}
              onToggle={() => setExpandedSection(expandedSection === a.id ? null : a.id)}
              icon={a.icon}
              title={a.title}
              iconBg={theme.medicalSage}
              titleColor={theme.medicalSage}
              chevronColor={theme.medicalSage}
              bg={theme.medicalSageSoft}
              borderColor="rgba(125, 148, 137, 0.2)"
              image={a.image}
              imageAlt={a.imageAlt}
            >
              <ul className="mt-3 space-y-1.5 pl-2">
                {a.items.map((item, idx) => (
                  <li key={idx} className="flex items-start" style={{ color: theme.textSecondary, fontSize: '0.82rem', lineHeight: '1.5' }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 mr-2 shrink-0" style={{ backgroundColor: theme.medicalSage }} />
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionItem>
          ))}
        </div>
      </Section>

      {/* Perguntas Frequentes */}
      <Section
        title="Perguntas Frequentes"
        icon={<Info className="mr-2 shrink-0" style={{ color: theme.primary }} />}
      >
        <div
          className="mb-4 overflow-hidden"
          style={{
            background: theme.surfaceSoft,
            border: `1px solid ${theme.stroke}`,
            borderRadius: theme.radiusSm,
          }}
        >
          <img
            src="/assets/cartilha/23-hv-myths-and-truths.png"
            alt="Mitos e verdades sobre hálux valgo e o pós-operatório"
            loading="lazy"
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </div>
        <div className="space-y-2.5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              onClick={() => setExpandedSection(expandedSection === `faq-${idx}` ? null : `faq-${idx}`)}
              className="cursor-pointer p-3.5 touch-active"
              style={{
                backgroundColor: theme.white,
                border: `1px solid ${theme.stroke}`,
                borderLeft: `3px solid ${theme.primary}`,
                borderRadius: theme.radiusSm,
                transition: 'all 200ms ease',
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold" style={{ color: theme.primaryDark, fontFamily: "'Poppins', sans-serif", fontSize: '0.88rem', lineHeight: '1.35' }}>
                  {faq.question}
                </h3>
                <div className="shrink-0 mt-0.5">
                  {expandedSection === `faq-${idx}` ? (
                    <ChevronUp size={18} style={{ color: theme.primary }} />
                  ) : (
                    <ChevronDown size={18} style={{ color: theme.primary }} />
                  )}
                </div>
              </div>
              {expandedSection === `faq-${idx}` && (
                <div className="mt-3 space-y-1.5 animate-slideDown">
                  <p style={{ color: theme.textSecondary, fontSize: '0.82rem', lineHeight: '1.55' }}>{faq.answer}</p>
                  {faq.note && <p className="italic" style={{ color: theme.textMuted, fontSize: '0.75rem' }}>{faq.note}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Sinais de Alerta */}
      <div
        className="p-4 sm:p-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #ef5350 0%, #EF4444 40%, #DC2626 100%)',
          borderRadius: theme.radiusLg,
          boxShadow: theme.shadowLg,
        }}
      >
        <h2
          className="font-bold mb-3 flex items-center text-white"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}
        >
          <AlertCircle className="mr-2 shrink-0" style={{ color: 'rgba(255,255,255,0.8)' }} /> 🚨 Sinais de Alerta
        </h2>
        <div
          className="mb-3 overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: theme.radiusSm,
          }}
        >
          <img
            src="/assets/cartilha/18-hv-warning-signs.png"
            alt="Quando procurar a equipe: sinal calmo de orientação"
            loading="lazy"
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </div>
        <p className="mb-3 font-semibold text-white" style={{ fontSize: '0.85rem' }}>Procure atendimento imediato se apresentar:</p>
        <div className="space-y-2">
          {warningSigns.map((sign, idx) => (
            <div
              key={idx}
              className="p-2.5 flex items-start gap-2.5"
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: theme.radiusSm,
              }}
            >
              <span className="shrink-0" style={{ fontSize: '0.85rem' }}>🔴</span>
              <span className="text-white" style={{ lineHeight: '1.45', fontSize: '0.82rem' }}>{sign}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Prevenção positiva */}
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
          src="/assets/cartilha/17-hv-risks-prevention.png"
          alt="Cuidados preventivos: higiene, fisioterapia, hidratação e acompanhamento"
          loading="lazy"
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
        <div className="px-4 sm:px-6 py-4">
          <p
            className="font-bold mb-1"
            style={{ color: theme.primaryDark, fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem' }}
          >
            Prevenção e cuidados que ajudam
          </p>
          <p style={{ color: theme.textMuted, fontSize: '0.78rem', lineHeight: '1.55' }}>
            Higiene, não fumar, controle da carga, fisioterapia, hidratação e acompanhamento médico contribuem para uma
            cicatrização e consolidação ósseas mais previsíveis.
          </p>
        </div>
      </div>

      {/* Quando ligar */}
      <div
        className="p-4"
        style={{
          backgroundColor: theme.primaryLight,
          border: `1px solid ${theme.strokeStrong}`,
          borderLeft: `4px solid ${theme.primary}`,
          borderRadius: theme.radiusSm,
        }}
      >
        <h3
          className="font-semibold mb-2.5 flex items-center"
          style={{ color: theme.primaryDark, fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem' }}
        >
          <Info className="mr-2 shrink-0" style={{ color: theme.primary }} /> Quando ligar para o consultório:
        </h3>
        <ul className="space-y-1.5" style={{ color: theme.textSecondary }}>
          {['Dúvidas sobre medicação', 'Preocupações sobre progresso da recuperação', 'Alterações que causem preocupação'].map((item, idx) => (
            <li key={idx} className="flex items-start" style={{ fontSize: '0.82rem' }}>
              <span className="w-1.5 h-1.5 rounded-full mt-1.5 mr-2 shrink-0" style={{ backgroundColor: theme.primary }} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Marcos */}
      <div
        className="p-4 sm:p-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #c9a66b 0%, #b78b4c 40%, #9a7239 100%)',
          borderRadius: theme.radiusLg,
          boxShadow: theme.shadowLg,
        }}
      >
        <h2
          className="font-bold mb-3 flex items-center text-white"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}
        >
          <Award className="mr-2 shrink-0" style={{ color: 'rgba(255,255,255,0.8)' }} /> Marcos da Recuperação
        </h2>
        <div
          className="mb-4 overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: theme.radiusSm,
          }}
        >
          <img
            src="/assets/cartilha/15-hv-recovery-milestones.png"
            alt="Marcos de recuperação: atividade de baixo impacto e controle clínico"
            loading="lazy"
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </div>
        <div className="space-y-2.5">
          {milestones.map((m) => (
            <div
              key={m.id}
              onClick={() => setExpandedSection(expandedSection === m.id ? null : m.id)}
              className="cursor-pointer p-3.5 touch-active"
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: theme.radiusSm,
                transition: 'all 200ms ease',
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '10px' }}>
                    {m.icon}
                  </div>
                  <h3 className="font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem' }}>{m.title}</h3>
                </div>
                <div className="shrink-0">
                  {expandedSection === m.id ? (
                    <ChevronUp size={18} style={{ color: 'rgba(255,255,255,0.8)' }} />
                  ) : (
                    <ChevronDown size={18} style={{ color: 'rgba(255,255,255,0.5)' }} />
                  )}
                </div>
              </div>
              {expandedSection === m.id && (
                <ul className="mt-3 pl-10 space-y-1.5 animate-slideDown">
                  {m.items.map((item, idx) => (
                    <li key={idx} className="flex items-start" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.82rem' }}>
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 mr-2 shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Profissional certo + agendamento */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            src="/assets/cartilha/25-hv-choose-right-professional.png"
            alt="Como escolher o profissional certo: especialista em pé e tornozelo"
            loading="lazy"
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
          <div className="px-4 py-3">
            <p
              className="font-bold mb-1"
              style={{ color: theme.primaryDark, fontFamily: "'Poppins', sans-serif", fontSize: '0.88rem' }}
            >
              Profissional certo
            </p>
            <p style={{ color: theme.textMuted, fontSize: '0.76rem', lineHeight: '1.55' }}>
              Especialista em pé e tornozelo, equipe multidisciplinar e avaliação individualizada.
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
            src="/assets/cartilha/27-hv-schedule-evaluation.png"
            alt="Agende sua avaliação: agenda e localização da clínica"
            loading="lazy"
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
          <div className="px-4 py-3">
            <p
              className="font-bold mb-1"
              style={{ color: theme.primaryDark, fontFamily: "'Poppins', sans-serif", fontSize: '0.88rem' }}
            >
              Agende sua avaliação
            </p>
            <p style={{ color: theme.textMuted, fontSize: '0.76rem', lineHeight: '1.55' }}>
              Agendamento individualizado para discutir o seu caso e traçar o plano mais adequado.
            </p>
          </div>
        </div>
      </div>

      {/* Contatos */}
      <div
        className="p-4 sm:p-6"
        style={{
          background: `linear-gradient(140deg, #fff, ${theme.surfaceSoft})`,
          border: `1px solid ${theme.strokeStrong}`,
          borderRadius: theme.radiusXl,
          boxShadow: theme.shadowMd,
        }}
      >
        <h2
          className="font-bold mb-4 flex items-center"
          style={{ color: theme.textPrimary, fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}
        >
          <Phone className="mr-2 shrink-0" style={{ color: theme.primary }} /> Contatos e Informações
        </h2>
        <div
          className="mb-4 overflow-hidden"
          style={{
            background: theme.surfaceSoft,
            border: `1px solid ${theme.stroke}`,
            borderRadius: theme.radiusSm,
          }}
        >
          <img
            src="/assets/cartilha/28-hv-contact-location.png"
            alt="Contatos e localização da clínica em São Paulo (Berrini/Brooklin)"
            loading="lazy"
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ContactItem icon={<Users size={18} />} title="Médica Responsável">
            <p className="font-semibold" style={{ color: theme.textSecondary, fontSize: '0.85rem' }}>Dra. Laice Cunha</p>
            <p style={{ color: theme.textMuted, fontSize: '0.72rem' }}>Cirurgiã de Pé e Tornozelo</p>
          </ContactItem>

          <ContactItem icon={<UserCircle size={18} />} title="Fisioterapeuta">
            <p className="font-semibold" style={{ color: theme.textSecondary, fontSize: '0.85rem' }}>Vitor Vaz</p>
            <p style={{ color: theme.textMuted, fontSize: '0.72rem' }}>CREFITO 3: 297100</p>
          </ContactItem>

          <ContactItem icon={<Phone size={18} />} title="Telefone / WhatsApp">
            <a href="tel:+5511916731338" className="font-semibold hover:underline" style={{ color: theme.textSecondary, fontSize: '0.85rem' }}>
              (11) 91673-1338
            </a>
          </ContactItem>

          <ContactItem icon={<Mail size={18} />} title="E-mail">
            <a href="mailto:dra.laicecunha@gmail.com" className="font-semibold hover:underline" style={{ color: theme.textSecondary, fontSize: '0.82rem' }}>
              dra.laicecunha@gmail.com
            </a>
          </ContactItem>

          <div className="sm:col-span-2">
            <ContactItem icon={<MapPin size={18} />} title="Endereço">
              <p style={{ color: theme.textSecondary, fontSize: '0.82rem', lineHeight: '1.5' }}>
                Av. Eng. Luís Carlos Berrini, 1748<br />
                5º Andar - Cj. 508 - Brooklin<br />
                São Paulo - SP, 04571-000
              </p>
            </ContactItem>
          </div>

          <div className="sm:col-span-2">
            <ContactItem icon={<Globe size={18} />} title="Site">
              <a
                href="https://www.dralaicecunha.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
                style={{ color: theme.textSecondary, fontSize: '0.85rem' }}
              >
                www.dralaicecunha.com.br
              </a>
            </ContactItem>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div
      className="p-4 sm:p-6"
      style={{ backgroundColor: theme.white, border: `1px solid ${theme.stroke}`, borderRadius: theme.radiusLg, boxShadow: theme.shadowSm }}
    >
      <h2
        className="font-bold mb-3 flex items-center"
        style={{ color: theme.primaryDark, fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}
      >
        {icon} {title}
      </h2>
      {children}
    </div>
  );
}

function AccordionItem({ isOpen, onToggle, icon, title, iconBg, titleColor, chevronColor, bg, borderColor, image, imageAlt, children }: {
  isOpen: boolean;
  onToggle: () => void;
  icon: React.ReactNode;
  title: string;
  iconBg: string;
  titleColor: string;
  chevronColor: string;
  bg: string;
  borderColor: string;
  image?: string;
  imageAlt?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      onClick={onToggle}
      className="cursor-pointer p-3.5 touch-active"
      style={{
        backgroundColor: bg,
        border: `1px solid ${borderColor}`,
        borderRadius: theme.radiusSm,
        transition: 'all 200ms ease',
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 shrink-0" style={{ backgroundColor: iconBg, color: 'white', borderRadius: '10px' }}>
            {icon}
          </div>
          <h3 className="font-bold" style={{ color: titleColor, fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem' }}>
            {title}
          </h3>
        </div>
        <div className="shrink-0">
          {isOpen ? <ChevronUp size={18} style={{ color: chevronColor }} /> : <ChevronDown size={18} style={{ color: chevronColor }} />}
        </div>
      </div>
      {isOpen && (
        <div className="animate-slideDown">
          {image && (
            <div
              className="mt-3 overflow-hidden"
              style={{
                background: theme.white,
                border: `1px solid ${borderColor}`,
                borderRadius: theme.radiusSm,
              }}
            >
              <img
                src={image}
                alt={imageAlt ?? title}
                loading="lazy"
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </div>
          )}
          {children}
        </div>
      )}
    </div>
  );
}

function ContactItem({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      <div className="p-1.5 shrink-0" style={{ backgroundColor: theme.primary, color: 'white', borderRadius: '10px' }}>
        {icon}
      </div>
      <div>
        <h3 className="font-bold mb-0.5" style={{ color: theme.textPrimary, fontFamily: "'Poppins', sans-serif", fontSize: '0.85rem' }}>{title}</h3>
        {children}
      </div>
    </div>
  );
}
