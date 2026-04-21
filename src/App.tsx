import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { 
  Globe, 
  Zap, 
  Layers, 
  Cpu, 
  Users, 
  Palette, 
  ArrowRight, 
  Figma, 
  Wind, 
  Code, 
  Smartphone,
  Menu,
  X,
  Languages,
  MessageCircle,
  Github,
  Award,
  BarChart3,
  CheckCircle2
} from 'lucide-react';
import { translations } from './translations';

function Counter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, { 
        duration: 2, 
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest))
      });
      return controls.stop;
    }
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{displayValue.toLocaleString()}{suffix}</span>;
}

export default function App() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[lang];

  const toggleLang = () => setLang(prev => prev === 'en' ? 'es' : 'en');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const services = [
    "AI DESIGN",
    "MOTION GRAPHICS",
    "BRAND IDENTITY",
    "UX RESEARCH",
    "PRODUCT DESIGN",
    "GENERATIVE AI",
    "WORDPRESS • DIVI",
    "DESIGN SYSTEMS",
    "DIGITAL TRANSFORMATION"
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brutal-yellow">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-4 border-black px-6 py-4 flex justify-between items-center">
        <div className="font-display font-black text-2xl tracking-tighter uppercase">
          Diego Bogotá
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-display font-bold uppercase text-sm">
          <a href="#expertise" className="hover:underline">{t.nav.expertise}</a>
          <a href="#process" className="hover:underline">{t.process.title}</a>
          <a href="#specialization" className="hover:underline">{t.nav.specialization}</a>
          <a href="#tools" className="hover:underline">{t.nav.tools}</a>
          <button 
            onClick={toggleLang}
            className="brutal-btn bg-brutal-yellow flex items-center gap-2 py-1 px-3 text-xs cursor-pointer"
          >
            <Languages size={14} />
            {lang === 'en' ? 'ESPAÑOL' : 'ENGLISH'}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleLang} className="p-2 border-2 border-black bg-brutal-yellow">
            <Languages size={20} />
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 border-2 border-black">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-8 font-display font-black text-4xl uppercase"
          >
            <a href="#expertise" onClick={() => setIsMenuOpen(false)}>{t.nav.expertise}</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)}>{t.process.title}</a>
            <a href="#specialization" onClick={() => setIsMenuOpen(false)}>{t.nav.specialization}</a>
            <a href="#tools" onClick={() => setIsMenuOpen(false)}>{t.nav.tools}</a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="px-6 py-12 md:py-24 border-b-4 border-black overflow-hidden bg-brutal-yellow">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="font-display font-black text-4xl md:text-7xl uppercase leading-[0.95] tracking-tighter mb-8 max-w-5xl">
                {t.hero.title}
              </h1>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-xl md:text-2xl font-medium max-w-xl">
                  {t.hero.subtitle}
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col gap-4 items-start md:items-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="brutal-card bg-white inline-block rotate-3">
                  <p className="font-mono font-bold uppercase">{t.hero.location}</p>
                </div>
                <div className="brutal-card bg-brutal-pink inline-block -rotate-2">
                  <p className="font-mono font-bold uppercase">11+ YEARS EXP</p>
                </div>
                <div className="brutal-card bg-brutal-green inline-block rotate-1">
                  <p className="font-mono font-bold uppercase">41+ PROJECTS COMPLETED</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="bg-black text-white py-4 border-b-4 border-black overflow-hidden whitespace-nowrap flex">
          <div className="animate-marquee flex gap-8 items-center">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="font-display font-black text-3xl md:text-4xl uppercase flex items-center gap-8">
                {services.map((service, si) => (
                  <span key={si} className="flex items-center gap-8">
                    {service} <Zap className="text-brutal-yellow fill-brutal-yellow" />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* Real-world Impact - Swipeable Cards */}
        <section id="impact" className="px-6 py-20 bg-brutal-blue border-b-4 border-black text-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="font-display font-black text-5xl md:text-8xl uppercase tracking-tighter leading-none mb-4 italic">
                {t.impact.title}
              </h2>
              <p className="font-display font-bold text-2xl md:text-3xl uppercase mb-4 text-brutal-yellow">
                {t.impact.subtitle}
              </p>
              <p className="max-w-2xl text-xl opacity-90">
                {t.impact.description}
              </p>
            </div>

            <motion.div 
              className="flex gap-8 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ right: 0, left: -1400 }}
              whileTap={{ cursor: "grabbing" }}
            >
              {t.impact.cards.map((card, idx) => {
                const colors = ['bg-white text-black', 'bg-brutal-yellow text-black', 'bg-brutal-pink text-black', 'bg-brutal-green text-black'];
                return (
                  <div 
                    key={idx}
                    className={`min-w-[320px] md:min-w-[450px] brutal-card ${colors[idx % colors.length]} flex flex-col justify-between h-[500px] select-none`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="font-mono text-xs border-2 border-current px-2 py-1 uppercase font-bold">
                          {card.tag}
                        </span>
                        <BarChart3 size={24} />
                      </div>
                      <h3 className="font-display font-black text-3xl uppercase mb-8 leading-tight">
                        {card.title}
                      </h3>
                      
                      <div className="space-y-6">
                        {card.metrics.map((m, mi) => (
                          <div key={mi}>
                            <div className="text-4xl md:text-5xl font-black font-display mb-1 highlight-text">
                              <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
                            </div>
                            <p className="font-mono text-sm uppercase font-bold opacity-70">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t-2 border-current mt-auto">
                      <p className="font-medium text-sm italic">{card.footer}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
            
            <div className="mt-12 flex items-center gap-4 text-brutal-yellow">
              <span className="font-mono text-sm uppercase font-bold">Swipe to explore impact</span>
              <div className="h-1 w-24 bg-white/20 relative">
                <motion.div 
                  className="absolute inset-0 bg-brutal-yellow"
                  animate={{ left: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: "20%" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Expertise */}
        <section id="expertise" className="px-6 py-20 bg-white border-b-4 border-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-16 tracking-tighter">
              {t.coreExpertise.title}
            </h2>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {t.coreExpertise.items.map((item, idx) => {
                const Icons = [Cpu, Palette, Layers, Wind, Users, Globe];
                const Icon = Icons[idx];
                const colors = ['bg-brutal-yellow', 'bg-brutal-pink', 'bg-brutal-green', 'bg-brutal-blue', 'bg-white', 'bg-brutal-yellow'];
                return (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className={`brutal-card ${colors[idx % colors.length]}`}
                  >
                    <div className="mb-4 p-3 border-4 border-black bg-white inline-block">
                      <Icon size={32} />
                    </div>
                    <h3 className="font-display font-black text-2xl uppercase mb-2">{item.title}</h3>
                    <p className="font-medium">{item.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* How I Work (Process) */}
        <section id="process" className="px-6 py-20 bg-black text-white border-b-4 border-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="font-mono text-sm uppercase tracking-widest text-brutal-yellow mb-4 block">{t.process.title}</span>
                <h2 className="font-display font-black text-5xl md:text-8xl uppercase mb-8 tracking-tighter leading-tight italic">
                  {t.process.headline}
                </h2>
                <div className="brutal-card bg-white text-black rotate-1">
                  <p className="text-xl leading-relaxed">
                    {t.process.subtext}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                {t.process.steps.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="brutal-card bg-white text-black group hover:bg-brutal-yellow transition-colors duration-300"
                  >
                    <div className="flex gap-6 items-start">
                      <span className="font-display font-black text-4xl text-brutal-pink group-hover:text-black transition-colors">{step.num}</span>
                      <div>
                        <h3 className="font-display font-black text-2xl uppercase mb-2">{step.title}</h3>
                        <p className="text-sm opacity-80 group-hover:opacity-100">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specialization */}
        <section id="specialization" className="px-6 py-20 bg-brutal-green border-b-4 border-black">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-8 tracking-tighter leading-none">
                {t.specialization.title}
              </h2>
              <div className="brutal-card bg-white rotate-1">
                <p className="font-mono text-sm leading-relaxed">
                  {lang === 'en' ? 'Focused on high-complexity projects for corporations and startups.' : 'Enfocado en proyectos de alta complejidad para corporaciones y startups.'}
                </p>
              </div>
            </div>
            
            <ul className="flex flex-col gap-4">
              {t.specialization.items.map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="brutal-card bg-white flex items-center gap-4 py-4"
                >
                  <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-mono font-bold">
                    {idx + 1}
                  </div>
                  <span className="font-display font-bold uppercase text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tools & Tech */}
        <section id="tools" className="px-6 py-20 bg-white border-b-4 border-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter leading-none">
                {t.tools.title}
              </h2>
              <div className="brutal-btn bg-brutal-pink">
                {lang === 'en' ? 'Expert Level' : 'Nivel Experto'}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {t.tools.items.map((item, idx) => {
                const getIcon = (name: string) => {
                  const lowerName = name.toLowerCase();
                  if (lowerName.includes('figma')) return <Figma size={48} className="mb-4" />;
                  if (lowerName.includes('ae') || lowerName.includes('after effects')) return <Zap size={48} className="mb-4" />;
                  if (lowerName.includes('github')) return <Github size={48} className="mb-4" />;
                  if (lowerName.includes('html') || lowerName.includes('code')) return <Code size={48} className="mb-4" />;
                  if (lowerName.includes('agile') || lowerName.includes('scrum')) return <Users size={48} className="mb-4" />;
                  if (lowerName.includes('vercel')) return <Wind size={48} className="mb-4" />;
                  if (lowerName.includes('google') || lowerName.includes('ai') || lowerName.includes('vertex') || lowerName.includes('gemini') || lowerName.includes('notebooklm')) return <Cpu size={48} className="mb-4" />;
                  return <Layers size={48} className="mb-4" />;
                };

                const getBgColor = (idx: number) => {
                  const colors = ['bg-white', 'bg-brutal-yellow', 'bg-brutal-pink', 'bg-brutal-green', 'bg-brutal-blue'];
                  return colors[idx % colors.length];
                };

                return (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`brutal-card ${getBgColor(idx)} ${idx >= t.tools.items.length - 2 && idx % 2 === 0 ? 'lg:col-span-2' : ''}`}
                  >
                    {getIcon(item)}
                    <h4 className="font-display font-black text-xl uppercase leading-tight">{item}</h4>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Background & Languages */}
        <section className="px-6 py-20 bg-brutal-pink border-b-4 border-black">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-8 tracking-tighter leading-none">
                {t.background.title}
              </h2>
              <div className="flex flex-col gap-6">
                <div className="brutal-card bg-white">
                  <div className="mb-4 p-2 border-4 border-black bg-brutal-yellow inline-block">
                    <Award size={32} />
                  </div>
                  <h4 className="font-display font-black text-xl uppercase mb-2">UFLO University</h4>
                  <p>{t.background.uflo}</p>
                </div>
                <div className="brutal-card bg-white">
                  <h4 className="font-display font-black text-xl uppercase mb-2">Fine Arts</h4>
                  <p>{t.background.fineArts}</p>
                </div>
                <div className="brutal-card bg-white">
                  <h4 className="font-display font-black text-xl uppercase mb-2">Motion & Sound</h4>
                  <p>{t.background.motionGraphics}</p>
                </div>
                <div className="brutal-card bg-white">
                  <h4 className="font-display font-black text-xl uppercase mb-2">Advertising</h4>
                  <p>{t.background.advertising}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-8 tracking-tighter leading-none">
                {t.languages.title}
              </h2>
              <div className="space-y-6">
                <div className="brutal-card bg-brutal-yellow flex justify-between items-center">
                  <span className="font-display font-black text-2xl uppercase">{t.languages.es}</span>
                  <div className="bg-black text-white px-3 py-1 font-mono text-xs">NATIVE</div>
                </div>
                <div className="brutal-card bg-white flex justify-between items-center">
                  <span className="font-display font-black text-2xl uppercase">{t.languages.en}</span>
                  <div className="bg-black text-white px-3 py-1 font-mono text-xs">PROFESSIONAL</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer / CTA */}
        <footer className="px-6 py-24 bg-black text-white text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display font-black text-6xl md:text-9xl uppercase mb-12 tracking-tighter leading-none">
              {t.footer.cta}
            </h2>
            <p className="font-mono text-xl mb-12 opacity-70">
              {t.footer.seniority}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:diegolnrs@gmail.com" 
                className="brutal-btn bg-brutal-yellow text-black text-2xl md:text-4xl py-6 px-12 inline-flex items-center gap-4 w-full md:w-auto justify-center"
              >
                {lang === 'en' ? 'SAY HELLO' : 'DI HOLA'}
                <ArrowRight size={32} />
              </a>
              <a 
                href="https://wa.me/5492236565296" 
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn bg-brutal-green text-black text-2xl md:text-4xl py-6 px-12 inline-flex items-center gap-4 w-full md:w-auto justify-center"
              >
                {t.footer.whatsapp}
                <MessageCircle size={32} />
              </a>
            </div>
            <div className="mt-8 flex justify-center">
              <a 
                href="https://diegobogota.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn bg-brutal-blue text-white text-2xl md:text-3xl py-4 px-10 inline-flex items-center gap-4 w-full md:w-auto justify-center"
              >
                {t.footer.portfolio}
                <Globe size={28} />
              </a>
            </div>
          </motion.div>
          
          <div className="mt-24 pt-12 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-sm opacity-50">
            <p>
              {t.footer.madeWith} ❤️🧠🙌 {t.footer.by} <a href="https://diegobogota.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-brutal-yellow transition-colors">Diego Bogotá</a> {t.footer.helpOf} <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-brutal-yellow transition-colors">Google AI Studio</a>
            </p>
            <div className="flex flex-wrap gap-8 uppercase justify-center md:justify-end">
              <a href="https://www.linkedin.com/in/diegobogota/" target="_blank" rel="noopener noreferrer" className="hover:text-brutal-yellow transition-colors">LinkedIn</a>
              <a href="https://www.behance.net/diegobogota" target="_blank" rel="noopener noreferrer" className="hover:text-brutal-yellow transition-colors">Behance</a>
              <a href="https://dribbble.com/diegobogota" target="_blank" rel="noopener noreferrer" className="hover:text-brutal-yellow transition-colors">Dribbble</a>
              <a href="https://vimeo.com/diegobogota" target="_blank" rel="noopener noreferrer" className="hover:text-brutal-yellow transition-colors">Vimeo</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
