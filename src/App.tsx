import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Languages
} from 'lucide-react';
import { translations } from './translations';

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

  return (
    <div className="min-h-screen bg-white selection:bg-brutal-yellow">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-4 border-black px-6 py-4 flex justify-between items-center">
        <div className="font-display font-black text-2xl tracking-tighter uppercase">
          Diego Bogotá
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-display font-bold uppercase text-sm">
          <a href="#expertise" className="hover:underline">{t.nav.expertise}</a>
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
              <h1 className="font-display font-black text-6xl md:text-9xl uppercase leading-[0.85] tracking-tighter mb-8">
                Diego <br /> Bogotá
              </h1>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="font-display font-bold text-2xl md:text-4xl uppercase leading-tight mb-6">
                  {t.hero.title}
                </p>
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="bg-black text-white py-4 border-b-4 border-black overflow-hidden whitespace-nowrap flex">
          <div className="animate-marquee flex gap-8 items-center">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="font-display font-black text-4xl uppercase flex items-center gap-8">
                {t.hero.title} <Zap className="text-brutal-yellow fill-brutal-yellow" />
              </span>
            ))}
          </div>
        </div>

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
                const Icons = [Palette, Layers, Wind, Cpu, Users, Globe];
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="brutal-card bg-white">
                <Figma size={48} className="mb-4" />
                <h4 className="font-display font-black text-xl uppercase">{t.tools.figma}</h4>
              </div>
              <div className="brutal-card bg-brutal-yellow">
                <Zap size={48} className="mb-4" />
                <h4 className="font-display font-black text-xl uppercase">{t.tools.ae}</h4>
              </div>
              <div className="brutal-card bg-white">
                <Palette size={48} className="mb-4" />
                <h4 className="font-display font-black text-xl uppercase">{t.tools.suite}</h4>
              </div>
              <div className="brutal-card bg-brutal-blue text-white">
                <Smartphone size={48} className="mb-4" />
                <h4 className="font-display font-black text-xl uppercase">{t.tools.motion}</h4>
              </div>
              <div className="brutal-card bg-white lg:col-span-2">
                <Code size={48} className="mb-4" />
                <h4 className="font-display font-black text-xl uppercase">{t.tools.dev}</h4>
              </div>
              <div className="brutal-card bg-brutal-pink lg:col-span-2">
                <Users size={48} className="mb-4" />
                <h4 className="font-display font-black text-xl uppercase">Scrum / Agile</h4>
              </div>
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
            <a 
              href="mailto:diegolnrs@gmail.com" 
              className="brutal-btn bg-brutal-yellow text-black text-2xl md:text-4xl py-6 px-12 inline-flex items-center gap-4"
            >
              {lang === 'en' ? 'SAY HELLO' : 'DI HOLA'}
              <ArrowRight size={32} />
            </a>
          </motion.div>
          
          <div className="mt-24 pt-12 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-sm opacity-50">
            <p>© 2026 DIEGO BOGOTÁ. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 uppercase">
              <a href="#" className="hover:text-brutal-yellow">LinkedIn</a>
              <a href="#" className="hover:text-brutal-yellow">Behance</a>
              <a href="#" className="hover:text-brutal-yellow">Dribbble</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
