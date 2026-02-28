/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Cloud, 
  Terminal,
  Cpu,
  Globe,
  Calendar,
  MapPin,
  ChevronRight,
  Menu,
  X
} from "lucide-react";

const SKILLS = [
  { name: "NestJS", category: "Backend", icon: <Terminal className="w-4 h-4" /> },
  { name: "TypeScript", category: "Language", icon: <Code2 className="w-4 h-4" /> },
  { name: "MongoDB", category: "Database", icon: <Database className="w-4 h-4" /> },
  { name: "AWS Cloud", category: "Infrastructure", icon: <Cloud className="w-4 h-4" /> },
  { name: "Express.js", category: "Backend", icon: <Terminal className="w-4 h-4" /> },
  { name: "Laravel", category: "Full Stack", icon: <Globe className="w-4 h-4" /> },
  { name: "React", category: "Frontend", icon: <Cpu className="w-4 h-4" /> },
  { name: "Node.js", category: "Runtime", icon: <Terminal className="w-4 h-4" /> },
];

const EXPERIENCE = [
  {
    role: "Mid Backend Developer (Nest.js)",
    company: "Consultancy Outfit",
    period: "Oct 2022 - Present",
    location: "Rawalpindi, Pakistan",
    description: "Working on microservices using Nest.js. Implemented scalable architecture using RabbitMQ, AWS Cognito, S3, and MongoDB. Proficient in Swagger for API documentation.",
    tags: ["NestJS", "Microservices", "RabbitMQ", "AWS"]
  },
  {
    role: "Backend Developer (AWS Cloud)",
    company: "Freelance / Project Based",
    period: "Oct 2021 - Oct 2022",
    location: "Rawalpindi, Pakistan",
    description: "Built serverless web applications using Serverless Framework, AWS Lambda, API Gateway, Amplify, DynamoDB, and Cognito.",
    tags: ["AWS Lambda", "Serverless", "DynamoDB", "Cognito"]
  },
  {
    role: "Backend Developer (Express.js & Asp.net)",
    company: "Consultancy Outfit",
    period: "Nov 2020 - Oct 2021",
    location: "Rawalpindi, Pakistan",
    description: "Third-party API integration and developing UK Government department API endpoints using Node.js, Express, TypeScript, and MongoDB.",
    tags: ["Express.js", "TypeScript", "MongoDB", "API Integration"]
  },
  {
    role: "Full Stack Web Developer (Laravel)",
    company: "Virtual University of Pakistan",
    period: "Nov 2019 - Nov 2020",
    location: "Islamabad, Pakistan",
    description: "Developed full-stack web applications using the Laravel framework, focusing on scalable web solutions.",
    tags: ["Laravel", "PHP", "MySQL", "Full Stack"]
  }
];

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Technical Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Header / Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-xl border-b border-slate-200 py-3" : "bg-transparent py-6"
      }`}>
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="font-mono font-bold text-sm tracking-tighter text-slate-900">
            M.MUZAKKAR.AZAD <span className="text-emerald-600">//</span> SW_ENG
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-[11px] font-mono uppercase tracking-widest text-slate-500">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="hover:text-emerald-600 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 md:hidden shadow-xl"
            >
              <div className="flex flex-col gap-6 text-sm font-mono uppercase tracking-widest text-slate-600">
                {NAV_LINKS.map(link => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-emerald-600 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 relative">
        {/* Hero Section */}
        <section id="about" className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono uppercase tracking-widest mb-6 border border-emerald-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  Available for new projects
                </div>
                <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-8 text-slate-900">
                  MUHAMMAD<br />
                  <span className="text-emerald-600">MUZAKKAR</span><br />
                  AZAD
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                  I'm a passionate Full Stack Web Developer specializing in building scalable microservices and serverless architectures. 
                  My focus is on creating robust backend systems with NestJS and AWS Cloud.
                </p>
              </motion.div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="p-8 border border-slate-200 rounded-3xl bg-slate-50/50 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Cpu className="w-24 h-24" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-4">Current Role</div>
                <div className="font-bold text-xl text-slate-900 mb-1">Mid Backend Developer</div>
                <div className="text-slate-500 text-sm">Consultancy Outfit</div>
              </div>
              <div className="flex gap-3">
                <a href="mailto:muzakkir066@gmail.com" className="flex-1 p-5 bg-slate-900 text-white rounded-2xl flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-lg shadow-slate-200">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-semibold tracking-tight">Get in touch</span>
                </a>
                <a href="https://linkedin.com/in/m-muzakkar066" target="_blank" rel="noreferrer" className="p-5 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors">
                  <Linkedin className="w-5 h-5 text-slate-600" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="mb-32">
          <div className="flex items-baseline justify-between mb-12 border-b border-slate-100 pb-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Technical Stack</h2>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">01 // Expertise</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SKILLS.map((skill, i) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:bg-white transition-all group cursor-default shadow-sm hover:shadow-md"
              >
                <div className="mb-6 p-3 bg-white rounded-xl w-fit shadow-sm text-slate-400 group-hover:text-emerald-600 transition-colors">
                  {skill.icon}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">{skill.category}</div>
                <div className="text-lg font-bold tracking-tight text-slate-900">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <div className="flex items-baseline justify-between mb-12 border-b border-slate-100 pb-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Experience</h2>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">02 // Journey</span>
          </div>
          <div className="space-y-6">
            {EXPERIENCE.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 hover:border-emerald-100 transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 mb-4">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">{exp.role}</h3>
                    <div className="flex flex-col gap-1 text-sm font-medium text-slate-500">
                      <span className="text-slate-900">{exp.company}</span>
                      <span className="flex items-center gap-1 opacity-60">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-lg leading-relaxed text-slate-600 mb-8">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 bg-slate-50 text-slate-600 rounded-full text-[10px] font-mono uppercase tracking-wider border border-slate-100 group-hover:bg-emerald-50 group-hover:text-emerald-700 group-hover:border-emerald-100 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Certs */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Globe className="w-32 h-32" />
            </div>
            <div className="flex items-baseline justify-between mb-12 border-b border-white/10 pb-6">
              <h2 className="text-2xl font-bold tracking-tight">Education</h2>
              <span className="font-mono text-[10px] opacity-40 uppercase tracking-widest">03</span>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-mono text-emerald-400 mb-2">2016 - 2020</div>
              <h3 className="text-2xl font-bold tracking-tight">BS Computer Science</h3>
              <p className="text-slate-400 text-lg">Virtual University of Pakistan</p>
            </div>
          </div>
          <div className="bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-sm">
            <div className="flex items-baseline justify-between mb-12 border-b border-slate-100 pb-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Certifications</h2>
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">04</span>
            </div>
            <div className="space-y-4">
              {["Digital Literacy", "Freelancing"].map(cert => (
                <div key={cert} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-colors group">
                  <span className="font-bold text-slate-900 group-hover:text-emerald-900">{cert}</span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer / Contact */}
        <footer id="contact" className="pt-32 pb-12">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-10 leading-tight">
                  READY TO SCALE<br />
                  <span className="text-emerald-500 underline decoration-emerald-500/30 underline-offset-8">YOUR SYSTEMS?</span>
                </h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <a href="mailto:muzakkir066@gmail.com" className="group">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">Direct Email</div>
                    <div className="text-xl font-bold group-hover:text-emerald-400 transition-colors">muzakkir066@gmail.com</div>
                  </a>
                  <a href="https://muhammadmuzakkarazad.com" className="group">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">Personal Site</div>
                    <div className="text-xl font-bold group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                      Visit Website <ExternalLink className="w-4 h-4" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start lg:items-end gap-10">
                <div className="text-left lg:text-right">
                  <div className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.5em] mb-4">Location</div>
                  <div className="text-xl font-medium">Rawalpindi, Pakistan</div>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-emerald-600 transition-all border border-white/10">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com/in/m-muzakkar066" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-emerald-600 transition-all border border-white/10">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              <div>© 2024 MUHAMMAD MUZAKKAR AZAD</div>
              <div className="flex gap-8">
                <span>V.1.0.0</span>
                <span>BUILT WITH PRECISION</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
