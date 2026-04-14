'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Timer,
  GraduationCap,
  BookOpen,
  Bot,
  Headphones,
  Coffee,
  MessageCircle,
  Mail,
  Globe,
  ShieldCheck,
  AlertTriangle,
  Star,
  ChevronRight,
  Users,
  Zap,
  Instagram,
} from 'lucide-react';

/* ─── animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

function Section({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function FadeUp({
  children,
  className = '',
  i = 0,
}: {
  children: React.ReactNode;
  className?: string;
  i?: number;
}) {
  return (
    <motion.div variants={fadeUp} custom={i} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── shared CTA button ─── */
function CtaButton({
  text,
  className = '',
  onClick,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`animate-shimmer inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-bold text-[#010205] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,128,0.5)] md:px-8 md:py-5 md:text-lg ${className}`}
      style={{
        background: 'linear-gradient(135deg, #00FF80 0%, #00F0FF 100%)',
      }}
    >
      {text}
      <ChevronRight className="h-5 w-5" />
    </button>
  );
}

/* ─── gradient underline for section titles ─── */
function SectionTitle({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <h2
      className={`text-center text-3xl font-bold md:text-4xl lg:text-5xl ${className}`}
      style={{ fontFamily: 'var(--font-space-grotesk)', ...style }}
    >
      {children}
      <span
        className="mx-auto mt-3 block h-1 w-24 rounded-full md:h-1.5 md:w-32"
        style={{ background: 'linear-gradient(90deg, #00FF80, #00F0FF)' }}
      />
    </h2>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */
const WHATSAPP_NUMBER = '5591992754425';
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

function openWhatsApp(message: string) {
  const encoded = encodeURIComponent(message);
  window.open(`${WHATSAPP_BASE}?text=${encoded}`, '_blank');
}

export default function LandingPage() {
  const scrollToInvest = () => {
    document.getElementById('investimento')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{ background: '#010205' }}>
      {/* ─────────────── BANNER ─────────────── */}
      <div className="relative w-full" style={{ background: '#000' }}>
        <img
          src="/banner-curso.png"
          alt="Curso Agentes de IA na Saúde - Clinica.IA"
          className="mx-auto w-full max-w-6xl"
        />
      </div>

      {/* ─────────────── 1. HERO ─────────────── */}
      <Section className="relative overflow-hidden px-4 py-16 md:py-24 lg:py-32">
        {/* animated radial gradient orbs */}
        <div
          className="animate-pulse-glow pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(0,255,128,0.3), transparent 70%)' }}
        />
        <div
          className="animate-pulse-glow-reverse pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.25), transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(0,255,128,0.2), transparent 70%)' }}
        />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <FadeUp>
            <span
              className="animate-glow-box mb-6 inline-block rounded-full border px-4 py-2 text-xs font-semibold tracking-wider md:mb-8 md:px-6 md:py-2.5 md:text-sm"
              style={{ borderColor: '#00FF80', color: '#00FF80', background: 'rgba(0,255,128,0.05)' }}
            >
              CURSO PRÁTICO - USO DE AGENTES DE IA NA SAÚDE
            </span>
          </FadeUp>

          <FadeUp i={1}>
            <h1
              className="gradient-text mx-auto max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl md:leading-tight lg:text-6xl"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Recupere 8 a 12 Horas da Sua Semana com Agentes de IA
            </h1>
          </FadeUp>

          <FadeUp i={2}>
            <p
              className="mx-auto mt-6 max-w-2xl text-base md:mt-8 md:text-xl"
              style={{ color: '#00F0FF', fontFamily: 'var(--font-manrope)' }}
            >
              Sem teoria desnecessária. Sem conteúdo genérico. Só o que você pode aplicar já no dia seguinte.
            </p>
          </FadeUp>

          <FadeUp i={3}>
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-sm md:mt-10 md:gap-5 md:text-base" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" style={{ color: '#00FF80' }} /> 16 de Maio de 2025
              </span>
              <span className="hidden sm:inline" style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" style={{ color: '#00FF80' }} /> Das 08h00 às 14h00
              </span>
              <span className="hidden sm:inline" style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" style={{ color: '#00FF80' }} /> Tv. Barão do Triunfo, 3540 (Auditório Infinity Corporate) - Marco, Belém - PA
              </span>
              <span className="hidden sm:inline" style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
              <span className="flex items-center gap-1.5">
                <Timer className="h-4 w-4" style={{ color: '#00FF80' }} /> 6 Horas Intensivas
              </span>
            </div>
          </FadeUp>

          <FadeUp i={4}>
            <div className="mt-10 md:mt-14">
              <CtaButton
                text="Garantir Minha Vaga no 1o Lote - R$ 398,00"
                onClick={() => openWhatsApp('Olá! Gostaria de garantir minha vaga no 1º Lote do Curso Prático - Uso de Agentes de IA na Saúde (R$ 398,00).')}
                className="text-sm md:text-lg"
              />
            </div>
          </FadeUp>

          <FadeUp i={5}>
            <div
              className="animate-blink-badge mt-6 inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold md:mt-8 md:px-5 md:py-3 md:text-sm"
              style={{ background: 'rgba(239,68,68,0.15)', color: '#EF4444', border: '1px solid rgba(239,68,68,0.4)' }}
            >
              <AlertTriangle className="h-4 w-4" />
              ÚLTIMAS VAGAS DO 1o LOTE - Preço sobe para R$ 548,00 no 2o lote
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* ─────────────── 2. LEARNING PILLARS ─────────────── */}
      <Section className="px-4 py-16 md:py-24" style={{ background: '#111827' }}>
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <SectionTitle className="mb-3 text-white">O Que Você Vai Aprender</SectionTitle>
          </FadeUp>
          <FadeUp i={1}>
            <p className="mx-auto mt-4 mb-12 max-w-2xl text-center text-sm md:mb-16 md:text-base" style={{ color: 'rgba(255,255,255,0.75)' }}>
              6 pilares práticos para transformar sua rotina profissional com Inteligência Artificial
            </p>
          </FadeUp>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {[
              {
                num: '01',
                title: 'Reduzir o Tempo com Prontuários e Tarefas Repetitivas',
                desc: 'Aprenda a usar agentes de IA para reduzir até 70% do tempo em anotações, laudos e tarefas administrativas que consomem sua agenda.',
              },
              {
                num: '02',
                title: 'As 4 Áreas da Rotina Médica que Já Podem Ser Automatizadas',
                desc: 'Documentação clínica, comunicação com pacientes, atualização científica e gestão da clínica — descubra como cada área pode ser otimizada.',
              },
              {
                num: '03',
                title: 'Usar IA sem Ferir LGPD nem Normas do CFM',
                desc: 'Entenda a regulamentação vigente, incluindo a Resolução CFM no 2.454/2026, e aplique IA de forma segura e conforme.',
                highlight: 'Resolução CFM no 2.454/2026',
              },
              {
                num: '04',
                title: 'A Diferença entre IA Amadora e Método Validado',
                desc: 'Não basta usar qualquer IA. Conheça o Método IA Pro+, validado por profissionais de saúde, com resultados reais e mensuráveis.',
                highlight: 'Método IA Pro+',
              },
              {
                num: '05',
                title: 'Recuperar de 8 a 12 Horas por Semana',
                desc: 'Descubra como reduzir em até 40% o tempo da consulta e liberar espaço para fazer duas consultas a mais por dia, sem comprometer a qualidade.',
                highlight: 'reduzir em até 40% o tempo da consulta',
                highlight2: 'duas consultas a mais por dia',
              },
              {
                num: '06',
                title: 'O Que Fazer Já Amanha na Sua Prática',
                desc: 'Receba um plano de implementação imediata, aplicável a todos os profissionais da saúde — médicos, enfermeiros, fisioterapeutas e mais.',
              },
            ].map((card, idx) => (
              <FadeUp key={card.num} i={idx}>
                <motion.div
                  whileHover={{ y: -10, borderColor: '#00FF80' }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-full overflow-hidden rounded-xl border p-6 md:p-7"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.08)',
                  }}
                >
                  {/* gradient top border */}
                  <div
                    className="absolute left-0 top-0 h-1 w-full"
                    style={{ background: 'linear-gradient(90deg, #00FF80, #00F0FF)' }}
                  />
                  {/* number watermark */}
                  <span
                    className="pointer-events-none absolute right-3 top-3 text-5xl font-extrabold select-none md:text-6xl"
                    style={{ color: '#00FF80', opacity: 0.12, fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {card.num}
                  </span>
                  <h3
                    className="relative mb-3 text-lg font-bold text-white md:text-xl"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {card.title}
                  </h3>
                  <p className="relative text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    {card.desc}
                  </p>
                  {(card.highlight || card.highlight2) && (
                    <div className="relative mt-3 flex flex-col gap-1">
                      {card.highlight && (
                        <span
                          className="inline-block w-fit rounded-md px-2 py-0.5 text-xs font-semibold"
                          style={{ background: 'rgba(0,255,128,0.1)', color: '#00FF80' }}
                        >
                          {card.highlight}
                        </span>
                      )}
                      {card.highlight2 && (
                        <span
                          className="inline-block w-fit rounded-md px-2 py-0.5 text-xs font-semibold"
                          style={{ background: 'rgba(0,240,255,0.1)', color: '#00F0FF' }}
                        >
                          {card.highlight2}
                        </span>
                      )}
                    </div>
                  )}
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* ─────────────── 3. SCHEDULE ─────────────── */}
      <Section className="px-4 py-16 md:py-24" style={{ background: 'linear-gradient(180deg, #010205 0%, #0a0f1a 100%)' }}>
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <SectionTitle className="mb-3 text-white">Programação Completa</SectionTitle>
          </FadeUp>
          <FadeUp i={1}>
            <p className="mx-auto mt-4 mb-12 max-w-2xl text-center text-sm md:mb-16 md:text-base" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Das 08h00 às 14h00 - 6 horas de transformação prática
            </p>
          </FadeUp>

          <div className="relative">
            {/* vertical gradient line */}
            <div
              className="absolute bottom-0 left-5 top-0 w-0.5 md:left-7"
              style={{ background: 'linear-gradient(180deg, #00FF80 0%, #00F0FF 100%)' }}
            />

            {[
              { time: '08h00 - 08h45', title: 'Agentes que Investigam e Produzem Conteúdo', tools: 'Kimi K2.5, Claude, ChatGPT' },
              { time: '08h45 - 09h30', title: 'Manus AI, Kimi K2.5 e Claude para Produção de Alto Impacto', tools: '' },
              { coffee: true, time: '09h30 - 09h45', title: 'COFFEE BREAK' },
              { time: '09h45 - 10h45', title: 'Criação de Sites e Web Aplicações para a Prática da Saúde', tools: 'Lovable AI, v0, Bolt.new, Replit Agent' },
              { time: '10h45 - 11h30', title: 'Automação de Laudos e Documentos Clínicos', speaker: 'Dr. Jean Klay Machado' },
              { time: '11h30 - 12h15', title: 'Gestão da Clínica com Agentes', tools: '' },
              { time: '12h15 - 13h00', title: 'Comunicação Integrada para Médicos', speaker: 'André Laurent' },
              { time: '13h00 - 13h45', title: 'Demonstração do Agent Builder & Ética na Prática', tools: '' },
              { time: '13h45 - 14h00', title: 'Plano de Implementação Imediata', tools: '' },
            ].map((item, idx) => (
              <FadeUp key={idx} i={idx}>
                <div className="relative mb-8 flex items-start gap-4 md:mb-10 md:gap-6 last:mb-0">
                  {/* marker */}
                  <div
                    className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold md:h-14 md:w-14 md:text-sm"
                    style={{
                      background: item.coffee ? 'transparent' : 'linear-gradient(135deg, #00FF80, #00F0FF)',
                      color: '#010205',
                      border: item.coffee ? '2px dashed rgba(255,255,255,0.3)' : 'none',
                      boxShadow: item.coffee ? 'none' : '0 0 15px rgba(0,255,128,0.4)',
                    }}
                  >
                    {item.coffee ? '☕' : idx + 1}
                  </div>

                  {/* content card */}
                  {item.coffee ? (
                    <div
                      className="flex-1 rounded-lg border border-dashed px-5 py-4 text-center"
                      style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                    >
                      <span className="font-semibold" style={{ color: '#00F0FF' }}>
                        {item.title}
                      </span>
                      <span className="ml-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                        ({item.time})
                      </span>
                    </div>
                  ) : (
                    <div
                      className="flex-1 rounded-xl border p-5 transition-all duration-300 hover:border-[rgba(0,255,128,0.3)] md:p-6"
                      style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
                    >
                      <span
                        className="mb-1 block text-xs font-semibold md:text-sm"
                        style={{ color: '#00FF80' }}
                      >
                        {item.time}
                      </span>
                      <h3
                        className="text-base font-bold text-white md:text-lg"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {item.title}
                      </h3>
                      {item.tools && (
                        <p className="mt-1 text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                          Ferramentas: {item.tools}
                        </p>
                      )}
                      {item.speaker && (
                        <p className="mt-1 text-xs font-medium" style={{ color: '#00F0FF' }}>
                          👤 {item.speaker}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* ─────────────── 4. INSTRUCTORS ─────────────── */}
      <Section className="px-4 py-16 md:py-24" style={{ background: '#111827' }}>
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <SectionTitle className="mb-4 text-white">Corpo Docente</SectionTitle>
          </FadeUp>
          <FadeUp i={1}>
            <p className="mx-auto mb-14 max-w-2xl text-center text-sm md:mb-16 md:text-base" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Especialistas que unem saúde, tecnologia e inovação para transformar a prática profissional
            </p>
          </FadeUp>

          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-8">
            {/* Patrick Cruz - Featured */}
            <FadeUp i={0}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-sm overflow-hidden rounded-2xl border-2"
                style={{
                  borderColor: '#00FF80',
                  background: 'linear-gradient(145deg, rgba(0,255,128,0.06), rgba(0,240,255,0.03))',
                  boxShadow: '0 0 40px rgba(0,255,128,0.12), inset 0 1px 0 rgba(255,255,255,0.05)',
                }}
              >
                {/* top gradient bar */}
                <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #00FF80, #00F0FF)' }} />
                <div className="p-6 md:p-8">
                  <div className="absolute right-4 top-6 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider md:right-6 md:top-8" style={{ background: 'linear-gradient(135deg, #00FF80, #00F0FF)', color: '#010205' }}>
                    ⭐ Coordenador
                  </div>
                  <div className="flex flex-col items-center text-center">
                    {/* Photo */}
                    <div className="relative mb-5">
                      <div
                        className="h-28 w-28 overflow-hidden rounded-full md:h-32 md:w-32"
                        style={{ padding: '3px', background: 'linear-gradient(135deg, #00FF80, #00F0FF)' }}
                      >
                        <img
                          src="/patrick-cruz.jpg"
                          alt="Prof. Patrick Cruz"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <h3
                      className="text-xl font-bold text-white md:text-2xl"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      Prof. Patrick Cruz
                    </h3>
                    <p className="mt-1.5 text-sm font-semibold" style={{ color: '#00F0FF' }}>
                      Coordenador do Curso · Especialista em IA Aplicada à Saúde
                    </p>
                    <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      Docente na área de saúde, Especialista em Inteligência Artificial e Mestre em Ciências Farmacêuticas pela UFPA, com experiência em Avaliação de Tecnologias em Saúde, suporte à decisão clínica e inovação tecnológica. Mentor em IA aplicada à Saúde. Referência em implementação de IA para profissionais da saúde.
                    </p>
                    <span
                      className="mt-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold"
                      style={{ background: 'rgba(0,255,128,0.1)', color: '#00FF80', border: '1px solid rgba(0,255,128,0.3)' }}
                    >
                      Criador do Método IA Pro+
                    </span>
                    <motion.a
                      href="https://www.instagram.com/patrickluis/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="mt-4 flex items-center justify-center gap-2 rounded-full px-5 py-2 text-xs font-bold transition-all duration-300"
                      style={{ background: 'rgba(225,48,108,0.12)', color: '#E1306C', border: '1px solid rgba(225,48,108,0.3)' }}
                    >
                      <Instagram className="h-3.5 w-3.5" />
                      @patrickluis
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </FadeUp>

            {/* Dr. Jean Klay */}
            <FadeUp i={1}>
              <motion.div
                whileHover={{ y: -8, borderColor: 'rgba(0,255,128,0.4)' }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-sm overflow-hidden rounded-2xl border"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)' }}
              >
                {/* top gradient bar */}
                <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #00FF80, #00F0FF)' }} />
                <div className="p-6 md:p-7">
                  <div className="flex flex-col items-center text-center">
                    {/* Photo */}
                    <div className="relative mb-5">
                      <div
                        className="h-28 w-28 overflow-hidden rounded-full md:h-32 md:w-32"
                        style={{ padding: '3px', background: 'linear-gradient(135deg, #00FF80, #00F0FF)' }}
                      >
                        <img
                          src="/jean-klay.jpg"
                          alt="Dr. Jean Klay Machado"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <h3
                      className="text-xl font-bold text-white md:text-2xl"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      Dr. Jean Klay Machado
                    </h3>
                    <p className="mt-1.5 text-sm font-semibold" style={{ color: '#00F0FF' }}>
                      Médico Ortopedista · Referência Nacional
                    </p>
                    <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      Médico ortopedista com formação sólida e atuação em múltiplas subespecialidades, reconhecido pela versatilidade clínica e profundidade técnica. Referência nacional em ortopedia com experiência em automação de processos clínicos com inteligência artificial. Com produção científica relevante, incluindo mais de 50 capítulos de livros e participação em mais de 600 congressos nacionais e internacionais.
                    </p>
                    <motion.a
                      href="https://www.instagram.com/dr.jeanklay/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="mt-4 flex items-center justify-center gap-2 rounded-full px-5 py-2 text-xs font-bold transition-all duration-300"
                      style={{ background: 'rgba(225,48,108,0.12)', color: '#E1306C', border: '1px solid rgba(225,48,108,0.3)' }}
                    >
                      <Instagram className="h-3.5 w-3.5" />
                      @dr.jeanklay
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </FadeUp>

            {/* André Laurent */}
            <FadeUp i={2}>
              <motion.div
                whileHover={{ y: -8, borderColor: 'rgba(0,255,128,0.4)' }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-sm overflow-hidden rounded-2xl border"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)' }}
              >
                {/* top gradient bar */}
                <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #00FF80, #00F0FF)' }} />
                <div className="p-6 md:p-7">
                  <div className="flex flex-col items-center text-center">
                    {/* Photo */}
                    <div className="relative mb-5">
                      <div
                        className="h-28 w-28 overflow-hidden rounded-full md:h-32 md:w-32"
                        style={{ padding: '3px', background: 'linear-gradient(135deg, #00FF80, #00F0FF)' }}
                      >
                        <img
                          src="/andre-laurent.jpg"
                          alt="André Laurent"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <h3
                      className="text-xl font-bold text-white md:text-2xl"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      André Laurent
                    </h3>
                    <p className="mt-1.5 text-sm font-semibold" style={{ color: '#00F0FF' }}>
                      Jornalista · Professor de Comunicação
                    </p>
                    <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      Mais de 20 anos de experiência em comunicação. Pós-graduado em Comunicação Científica, MBA e Mestrado.
                    </p>
                    <motion.a
                      href="https://www.instagram.com/andrelaurentoficial/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="mt-4 flex items-center justify-center gap-2 rounded-full px-5 py-2 text-xs font-bold transition-all duration-300"
                      style={{ background: 'rgba(225,48,108,0.12)', color: '#E1306C', border: '1px solid rgba(225,48,108,0.3)' }}
                    >
                      <Instagram className="h-3.5 w-3.5" />
                      @andrelaurentoficial
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* ─────────────── 5. TARGET AUDIENCE ─────────────── */}
      <Section className="px-4 py-16 md:py-24" style={{ background: 'linear-gradient(180deg, #0a0f1a 0%, #010205 100%)' }}>
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <SectionTitle className="mb-12 text-white">Para Quem é Este Curso</SectionTitle>
          </FadeUp>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {[
              { icon: '🚀', text: 'Nunca usou agentes de IA' },
              { icon: '📈', text: 'Já usa IA, mas quer subir de nível' },
              { icon: '📚', text: 'Quer acelerar produção científica' },
              { icon: '⚡', text: 'Busca eficiência na prática clínica' },
              { icon: '🎓', text: 'Precisa otimizar ensino e pesquisa' },
              { icon: '💻', text: 'Deseja presença digital sem programar' },
              { icon: '📢', text: 'Quer aumentar receita com comunicação' },
              { icon: '🏆', text: 'Quer liderar inovação na saúde' },
            ].map((item, idx) => (
              <FadeUp key={idx} i={idx}>
                <motion.div
                  whileHover={{ y: -5, borderColor: '#00FF80' }}
                  className="flex items-center gap-3 rounded-xl border p-4 transition-all duration-300 md:p-5"
                  style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <span className="text-2xl md:text-3xl">{item.icon}</span>
                  <span className="text-sm font-medium leading-snug text-white md:text-base">{item.text}</span>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* ─────────────── 6. PRICING ─────────────── */}
      <Section id="investimento" className="px-4 py-16 md:py-24" style={{ background: '#111827' }}>
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <SectionTitle className="mb-12 text-white">Investimento</SectionTitle>
          </FadeUp>

          <div className="grid gap-6 md:grid-cols-3 md:gap-5">
            {[
              {
                lot: '1o Lote',
                price: 'R$ 398,00',
                parcelas: '3x de R$ 132,67',
                badge: 'POPULAR',
                badgeExtra: 'MAIOR ECONOMIA',
                featured: true,
                features: [
                  'Acesso ao curso completo (6h)',
                  'Certificado de conclusão',
                  'Material digital exclusivo',
                  'Banco de prompts médicos',
                  'Suporte no dia do evento',
                  'Coffee break incluso',
                ],
              },
              {
                lot: '2o Lote',
                price: 'R$ 548,00',
                parcelas: '3x de R$ 182,67',
                badge: '',
                featured: false,
                features: [
                  'Acesso ao curso completo (6h)',
                  'Certificado de conclusão',
                  'Material digital exclusivo',
                  'Banco de prompts médicos',
                  'Suporte no dia do evento',
                  'Coffee break incluso',
                ],
              },
              {
                lot: 'Último Lote',
                price: 'R$ 698,00',
                parcelas: '3x de R$ 232,67',
                badge: '',
                featured: false,
                features: [
                  'Acesso ao curso completo (6h)',
                  'Certificado de conclusão',
                  'Material digital exclusivo',
                  'Banco de prompts médicos',
                  'Suporte no dia do evento',
                  'Coffee break incluso',
                ],
              },
            ].map((plan, idx) => (
              <FadeUp key={idx} i={idx}>
                <motion.div
                  whileHover={{ y: -10, borderColor: '#00FF80' }}
                  className={`relative flex flex-col overflow-hidden rounded-2xl border p-6 md:p-8 ${
                    plan.featured ? 'md:-mt-4 md:mb-0' : ''
                  }`}
                  style={{
                    background: plan.featured ? 'rgba(0,255,128,0.05)' : 'rgba(255,255,255,0.03)',
                    borderColor: plan.featured ? '#00FF80' : 'rgba(255,255,255,0.08)',
                    boxShadow: plan.featured ? '0 0 30px rgba(0,255,128,0.15)' : 'none',
                  }}
                >
                  {plan.badge && (
                    <div className="absolute -right-6 top-6 rotate-45 px-8 py-1 text-xs font-bold" style={{ background: 'linear-gradient(135deg, #00FF80, #00F0FF)', color: '#010205' }}>
                      {plan.badge}
                    </div>
                  )}
                  {plan.badgeExtra && (
                    <div
                      className="absolute right-4 top-16 rounded-md px-2 py-0.5 text-[10px] font-bold"
                      style={{ background: 'rgba(0,255,128,0.15)', color: '#00FF80' }}
                    >
                      {plan.badgeExtra}
                    </div>
                  )}

                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider" style={{ color: '#00F0FF' }}>
                    {plan.lot}
                  </p>
                  <p
                    className="mb-1 text-4xl font-extrabold text-white md:text-5xl"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {plan.price}
                  </p>
                  <p className="mb-6 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    ou {plan.parcelas}
                  </p>

                  <ul className="mb-8 flex flex-1 flex-col gap-3">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        <span style={{ color: '#00FF80' }} className="mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <CtaButton
                    text={`Garantir Vaga - ${plan.price}`}
                    onClick={() => openWhatsApp(`Olá! Gostaria de garantir minha vaga no ${plan.lot} do Curso Prático - Uso de Agentes de IA na Saúde (${plan.price}).`)}
                    className="w-full text-sm"
                  />
                </motion.div>
              </FadeUp>
            ))}
          </div>

          <FadeUp i={3}>
            <p className="mt-8 text-center text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
              💳 Pagamento seguro via Pix, cartão de crédito ou boleto bancário
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* ─────────────── 7. WHAT'S INCLUDED ─────────────── */}
      <Section className="px-4 py-16 md:py-24" style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <SectionTitle className="mb-12 md:mb-16" style={{ color: '#111827' }}>O Que Está Incluso</SectionTitle>
          </FadeUp>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <GraduationCap className="h-7 w-7" />, title: 'Certificação', desc: 'Certificado de conclusão reconhecido' },
              { icon: <BookOpen className="h-7 w-7" />, title: 'Material Digital', desc: 'Conteúdo complementar em PDF' },
              { icon: <Bot className="h-7 w-7" />, title: 'Banco de Prompts', desc: 'Prompts prontos para uso na saúde' },
              { icon: <Headphones className="h-7 w-7" />, title: 'Suporte no Dia', desc: 'Auxílio presencial durante o curso' },
              { icon: <Coffee className="h-7 w-7" />, title: 'Coffee Break', desc: 'Pausas para networking e descanso' },
            ].map((item, idx) => (
              <FadeUp key={idx} i={idx}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-xl border p-6 transition-all duration-300"
                  style={{ background: '#f9fafb', borderColor: 'rgba(0,0,0,0.06)' }}
                >
                  <div className="mb-3 inline-flex rounded-lg p-2.5" style={{ background: 'rgba(4,120,87,0.1)', color: '#047857' }}>
                    {item.icon}
                  </div>
                  <h3 className="mb-1 text-base font-bold" style={{ color: '#111827', fontFamily: 'var(--font-space-grotesk)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: '#4B5563' }}>
                    {item.desc}
                  </p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* ─────────────── 8. ETHICS ─────────────── */}
      <Section className="px-4 py-16 md:py-24" style={{ background: 'linear-gradient(180deg, #0a0f1a 0%, #010205 100%)' }}>
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <SectionTitle className="mb-12 text-white">Compromisso Ético e Regulatório</SectionTitle>
          </FadeUp>

          <div className="grid gap-6 md:grid-cols-2">
            <FadeUp i={0}>
              <motion.div
                whileHover={{ y: -8, borderColor: '#00FF80' }}
                className="rounded-xl border p-6 md:p-8"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <div className="mb-4 inline-flex rounded-lg p-2.5" style={{ background: 'rgba(0,255,128,0.1)' }}>
                  <ShieldCheck className="h-6 w-6" style={{ color: '#00FF80' }} />
                </div>
                <h3
                  className="mb-3 text-lg font-bold text-white md:text-xl"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Conformidade CFM e LGPD
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Todo o conteúdo do curso está alinhado com a Resolução CFM no 2.454/2026 e a Lei Geral de Proteção de Dados (LGPD). Você aprenderá a usar IA de forma ética, segura e em conformidade com as normas vigentes.
                </p>
              </motion.div>
            </FadeUp>

            <FadeUp i={1}>
              <motion.div
                whileHover={{ y: -8, borderColor: '#00F0FF' }}
                className="rounded-xl border p-6 md:p-8"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <div className="mb-4 inline-flex rounded-lg p-2.5" style={{ background: 'rgba(0,240,255,0.1)' }}>
                  <AlertTriangle className="h-6 w-6" style={{ color: '#00F0FF' }} />
                </div>
                <h3
                  className="mb-3 text-lg font-bold text-white md:text-xl"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Classificação de Risco
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Entenda as categorias de risco da IA na saúde: <span className="font-semibold" style={{ color: '#00FF80' }}>Baixo risco</span> (automação de tarefas administrativas), <span className="font-semibold" style={{ color: '#F59E0B' }}>Médio risco</span> (suporte a decisão clínica) e <span className="font-semibold" style={{ color: '#EF4444' }}>Alto risco</span> (diagnóstico autônomo). Aprenda a se posicionar em cada cenário.
                </p>
              </motion.div>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* ─────────────── 9. CONTACT ─────────────── */}
      <Section className="px-4 py-16 md:py-24" style={{ background: '#111827' }}>
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <SectionTitle className="mb-12 text-white">Contato e Realização</SectionTitle>
          </FadeUp>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <FadeUp i={0}>
              <motion.a
                href="https://wa.me/5591992754425"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, borderColor: '#00FF80' }}
                className="flex items-center gap-3 rounded-xl border p-5 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: 'rgba(0,255,128,0.15)' }}>
                  <MessageCircle className="h-5 w-5" style={{ color: '#00FF80' }} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.65)' }}>WhatsApp</p>
                  <p className="text-sm font-semibold text-white">(91) 99275-4425</p>
                </div>
              </motion.a>
            </FadeUp>

            <FadeUp i={1}>
              <motion.a
                href="mailto:clinica.ia.mentoria@gmail.com"
                whileHover={{ y: -5, borderColor: '#00F0FF' }}
                className="flex items-center gap-3 rounded-xl border p-5 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: 'rgba(0,240,255,0.15)' }}>
                  <Mail className="h-5 w-5" style={{ color: '#00F0FF' }} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.65)' }}>Email</p>
                  <p className="text-sm font-semibold text-white">clinica.ia.mentoria@gmail.com</p>
                </div>
              </motion.a>
            </FadeUp>

            <FadeUp i={2}>
              <motion.a
                href="https://www.clinicaia.ia.br"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, borderColor: '#00FF80' }}
                className="flex items-center gap-3 rounded-xl border p-5 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: 'rgba(0,255,128,0.15)' }}>
                  <Globe className="h-5 w-5" style={{ color: '#00FF80' }} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.65)' }}>Website</p>
                  <p className="text-sm font-semibold text-white">www.clinicaia.ia.br</p>
                </div>
              </motion.a>
            </FadeUp>

            <FadeUp i={3}>
              <motion.a
                href="https://www.instagram.com/clinica_ia/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, borderColor: '#E1306C' }}
                className="flex items-center gap-3 rounded-xl border p-5 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: 'rgba(225,48,108,0.15)' }}>
                  <Instagram className="h-5 w-5" style={{ color: '#E1306C' }} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.65)' }}>Instagram</p>
                  <p className="text-sm font-semibold text-white">@clinica_ia</p>
                </div>
              </motion.a>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* ─────────────── 10. FOOTER CTA ─────────────── */}
      <Section className="relative overflow-hidden px-4 py-16 md:py-20" style={{ background: 'linear-gradient(135deg, #010205 0%, #0a0f1a 50%, #010205 100%)' }}>
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(0,255,128,0.3), transparent 70%)' }}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <FadeUp>
            <h2
              className="gradient-text mb-6 text-2xl font-extrabold md:mb-8 md:text-4xl lg:text-5xl"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Não Deixe a Revolução Passar Sem Você
            </h2>
          </FadeUp>
          <FadeUp i={1}>
            <p className="mx-auto mb-8 max-w-xl text-sm md:mb-10 md:text-base" style={{ color: 'rgba(255,255,255,0.8)' }}>
              A inteligência artificial já está transformando a saúde. Garanta sua vaga agora e faça parte dos profissionais que estão liderando essa mudança.
            </p>
          </FadeUp>
          <FadeUp i={2}>
            <CtaButton
              text="Garantir Minha Vaga Agora - R$ 398,00"
              onClick={() => openWhatsApp('Olá! Gostaria de garantir minha vaga no Curso Prático - Uso de Agentes de IA na Saúde (R$ 398,00).')}
              className="text-base md:text-xl"
            />
          </FadeUp>
          <FadeUp i={3}>
            <p className="mt-6 text-xs md:text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              ⚠️ Vagas limitadas. O preço do 1o lote é válido apenas enquanto houver disponibilidade. Após o esgotamento, o preço sobe automaticamente.
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* ─────────────── 11. FOOTER (sticky) ─────────────── */}
      <footer
        className="sticky bottom-0 z-50 border-t px-4 py-4 md:py-5"
        style={{
          background: '#010205',
          borderColor: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <h3
              className="text-xl font-extrabold"
              style={{ color: '#00FF80', fontFamily: 'var(--font-space-grotesk)' }}
            >
              clinica.IA
            </h3>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Educação e Inovação em Saúde
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/clinica_ia/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs transition-colors duration-300 hover:text-[#E1306C]"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              <Instagram className="h-3.5 w-3.5" />
              @clinica_ia
            </a>
            <a
              href="https://www.instagram.com/patrickluis/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs transition-colors duration-300 hover:text-[#E1306C]"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              <Instagram className="h-3.5 w-3.5" />
              @patrickluis
            </a>
            <a
              href="https://www.instagram.com/andrelaurentoficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs transition-colors duration-300 hover:text-[#E1306C]"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              <Instagram className="h-3.5 w-3.5" />
              @andrelaurentoficial
            </a>
            <a
              href="https://www.instagram.com/dr.jeanklay/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs transition-colors duration-300 hover:text-[#E1306C]"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              <Instagram className="h-3.5 w-3.5" />
              @dr.jeanklay
            </a>
          </div>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            &copy; 2025 Clinica.IA - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
