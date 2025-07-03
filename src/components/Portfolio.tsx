import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, Download, ExternalLink, ChevronDown, Code, Database, Globe, Smartphone, Terminal, Layers, Server, Wrench, Figma, Sun, Coffee, Lightbulb, Palette, Moon, Headphones } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';
import figmaLogo from '@/assets/figma.svg';
import replitLogo from '@/assets/replit.svg';
import vscodeLogo from '@/assets/vscode.svg';
import htmlLogo from '@/assets/html.svg';
import cssLogo from '@/assets/css.svg';
import jsLogo from '@/assets/javascript.svg';
import bootstrapLogo from '@/assets/bootstrap.svg';
import javaLogo from '@/assets/java.svg';
import pythonLogo from '@/assets/python.svg';
import cppLogo from '@/assets/cpp.svg';
import cLogo from '@/assets/c.svg';
import mysqlLogo from '@/assets/mysql.svg';
import mongodbLogo from '@/assets/mongodb.svg';
import cursorLogo from '@/assets/cursorai.svg';
import gradCap from '@/assets/gradcap.svg';
import Particles from 'react-tsparticles';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import CountUp from 'react-countup';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { Radar, RadarChart as ReRadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

// Professional Skills Data - Minimal Color Scheme
const skillsData = [
  {
    category: "Frontend Technologies",
    skills: [
      { name: "HTML", color: "#fff", image: htmlLogo },
      { name: "CSS", color: "#fff", image: cssLogo },
      { name: "JavaScript", color: "#fff", image: jsLogo },
      { name: "Bootstrap", color: "#fff", image: bootstrapLogo }
    ]
  },
  {
    category: "Programming Languages", 
    skills: [
      { name: "Java", color: "#fff", image: javaLogo },
      { name: "Python", color: "#fff", image: pythonLogo },
      { name: "C++", color: "#fff", image: cppLogo },
      { name: "C", color: "#fff", image: cLogo }
    ]
  },
  {
    category: "Databases & Backend",
    skills: [
      { name: "MySQL", color: "#fff", image: mysqlLogo },
      { name: "MongoDB", color: "#fff", image: mongodbLogo }
    ]
  },
  {
    category: "AI & Development Tools",
    skills: [
      { name: "Cursor AI", color: "#fff", image: cursorLogo },
      { name: "Figma", color: "#fff", image: figmaLogo },
      { name: "Replit", color: "#fff", image: replitLogo },
      { name: "VS Code", color: "#fff", image: vscodeLogo }
    ]
  }
];

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Multi Mode AI Chatbot",
    description: "Advanced AI chatbot with multiple specialized modes including Chat, Auto, Cinephile, Game, and Research modes.",
    techStack: ["React", "Cursor AI", "Replit", "Tailwind CSS", "RAWG API", "TMDB API", "GEMINI API", "SERPER API"],
    githubUrl: "https://github.com/Mohd-Kamil/Chat-box",
    liveUrl: "https://chat-box-3hk3.onrender.com/chat",
    category: "AI & Machine Learning"
  },
  {
    id: 2,
    title: "College Event Management System",
    description: "Comprehensive system for managing college events with user registration, event scheduling, and admin controls.",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Mohd-Kamil/College-event-management-system",
    liveUrl: "#",
    category: "Full Stack Web"
  },
  {
    id: 3,
    title: "Streaming Service Landing Page",
    description: "Modern, responsive landing page for a streaming service with interactive UI elements and smooth animations.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    githubUrl: "https://github.com/Mohd-Kamil/Streaming_service_Landing_page",
    liveUrl: "https://streaming-app-landing-page.netlify.app/",
    category: "Frontend"
  },
  {
    id: 4,
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts and interactive weather maps.",
    techStack: ["JavaScript", "Weather API", "HTML", "CSS", "React"],
    githubUrl: "https://github.com/Mohd-Kamil/Weather-forcast-web-app",
    liveUrl: "https://weather-forecast-web-app0.netlify.app/",
    category: "Frontend"
  },
  {
    id: 5,
    title: "To-Do Web App",
    description: "Feature-rich task management application with drag-and-drop functionality and local storage.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    githubUrl: "https://github.com/Mohd-Kamil/To-Do-app",
    liveUrl: "https://to-do-web-app88.netlify.app/",
    category: "Frontend"
  },
  {
    id: 6,
    title: "Sneaker Website Landing Page",
    description: "Dynamic e-commerce landing page for sneakers with product showcase and interactive design.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    githubUrl: "https://github.com/Mohd-Kamil/Sneaker_website_landing_page",
    liveUrl: "https://sneaker-website-landing-page.netlify.app/",
    category: "Frontend"
  },
  {
    id: 7,
    title: "Chat Bot Landing Page",
    description: "Professional landing page for AI chatbot services with modern design and interactive elements.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    githubUrl: "https://github.com/Mohd-Kamil/Simple-chat-box",
    liveUrl: "https://simple-chat-box.netlify.app/",
    category: "Frontend"
  },
  {
    id: 8,
    title: "Spanish Learning App",
    description: "Interactive language learning application with progress tracking and gamified learning experience.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    githubUrl: "https://github.com/Mohd-Kamil/Spanish-learning-web-app",
    liveUrl: "https://spanish-learning-web-app.netlify.app/",
    category: "Frontend"
  }
];

const strengths = [
  'Creative Thinker',
  'Problem Solver',
  'Team Player',
  'Lifelong Learner',
  'Web Enthusiast'
];

const radarSkills = [
  { skill: 'HTML', value: 95 },
  { skill: 'CSS', value: 90 },
  { skill: 'JavaScript', value: 92 },
  { skill: 'React', value: 90 },
  { skill: 'Node.js', value: 80 },
  { skill: 'Python', value: 75 },
  { skill: 'MySQL', value: 80 },
  { skill: 'MongoDB', value: 70 },
  { skill: 'Figma', value: 70 },
  { skill: 'Git', value: 85 },
  { skill: 'TypeScript', value: 70 },
];

const Portfolio: React.FC = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [navActive, setNavActive] = useState('home');
  const typewriterRef = useRef<HTMLDivElement>(null);

  // Typewriter effect for strengths
  useEffect(() => {
    const current = strengths[typewriterIndex % strengths.length];
    if (!isDeleting && typewriterText.length < current.length) {
      setTimeout(() => setTypewriterText(current.slice(0, typewriterText.length + 1)), 80);
    } else if (isDeleting && typewriterText.length > 0) {
      setTimeout(() => setTypewriterText(current.slice(0, typewriterText.length - 1)), 40);
    } else if (!isDeleting && typewriterText.length === current.length) {
      setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && typewriterText.length === 0) {
      setIsDeleting(false);
      setTypewriterIndex((prev) => prev + 1);
    }
  }, [typewriterText, isDeleting, typewriterIndex]);

  // Scroll observer for nav highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let found = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) found = id;
        }
      }
      setNavActive(found);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181c24] via-[#23283a] to-[#181c24] text-foreground">
      {/* Hero Section - Minimal Square Checkered Pattern, Dark, Aesthetic */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 bg-background">
        {/* Animated particle/starfield background */}
        <Particles
          id="tsparticles"
          options={{
            background: { color: 'transparent' },
            fpsLimit: 60,
            particles: {
              color: { value: '#3b82f6' },
              links: { enable: true, color: '#64748b', distance: 120, opacity: 0.2 },
              move: { enable: true, speed: 0.5 },
              number: { value: 40 },
              opacity: { value: 0.2 },
              shape: { type: 'circle' },
              size: { value: 2 },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0"
        />
        {/* Top Navbar Overlay */}
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-background/95 z-30 border-b border-gray-700/30 shadow-lg backdrop-blur-md">
          <div className="text-white text-2xl font-extrabold flex items-center gap-2 select-none tracking-tight drop-shadow-lg">
            <span className="text-gray-400">&lt;/&gt;</span> Mohd Kamil
          </div>
          <ul className="flex gap-2 sm:gap-6 text-white font-semibold text-base sm:text-lg">
            {['home','about','skills','projects','contact'].map((id) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`px-3 py-1 rounded-lg transition-all border-2 focus:outline-none ${navActive===id ? 'text-gray-300 border-gray-400 bg-gray-700/20 font-bold shadow-md' : 'border-transparent hover:text-gray-300 hover:border-gray-400 hover:bg-gray-700/10'}`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center z-10 min-h-[50vh] pt-16 gap-12">
          {/* Left: Intro, Stats, Day/Night */}
          <div className="flex-1 flex flex-col items-start justify-start max-w-xl w-full mb-12 lg:mb-0">
            {/* Intro at the top */}
            <div className="mb-10 w-full text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-xl tracking-tight font-[Inter,sans-serif] mb-2 text-left">
                Hi, I'm <span className="text-primary font-black">Mohd Kamil</span>
              </h1>
              <div ref={typewriterRef} className="text-xl sm:text-2xl font-semibold mb-4 text-gray-300 border-b-2 border-gray-500 inline-block px-2 min-h-[2.5rem] tracking-wide font-[Fira_Code,monospace] text-left">
                {typewriterText}
                <span className="blinking-cursor">|</span>
              </div>
              <p className="text-base sm:text-lg text-gray-200 font-medium max-w-2xl font-[Inter,sans-serif] mb-2 text-left">
                Passionate about creating beautiful, functional, and user-friendly web experiences.<br/>
                Specialized in modern web technologies and always eager to learn new skills.
              </p>
              <div className="h-2 w-16 bg-gradient-to-r from-primary to-accent rounded-full my-6 ml-0"></div>
            </div>
            {/* Stats */}
            <div className="flex gap-8 mb-8 w-full">
              <div className="flex flex-col items-start">
                <span className="text-4xl font-bold text-gray-100 font-[Inter,sans-serif]">{<CountUp end={5} duration={2} />}+</span>
                <span className="text-gray-200 text-lg font-semibold mt-1 font-[Inter,sans-serif]">Designs Delivered</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-4xl font-bold text-gray-100 font-[Inter,sans-serif]">{<CountUp end={6} duration={2} />}+</span>
                <span className="text-gray-200 text-lg font-semibold mt-1 font-[Inter,sans-serif]">Projects</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-4xl font-bold text-gray-100 font-[Inter,sans-serif]">{<CountUp end={6} duration={2} />}+</span>
                <span className="text-gray-200 text-lg font-semibold mt-1 font-[Inter,sans-serif]">APIs Integrated</span>
              </div>
            </div>
            {/* Day in the Life Timeline */}
            <div className="w-full flex flex-col items-center mb-6">
              <div className="w-full max-w-3xl flex flex-col items-center">
                {/* --- 1. Day/Night Cycle: Make SVG and icons larger on mobile --- */}
                {/* Replace the SVG in the timeline with responsive width/height and icon sizes */}
                <svg viewBox="0 0 800 160" width="100%" height="160" className="mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2"
                  style={{ height: '160px', maxWidth: '100%', width: '100%', minHeight: '120px' }}
                >
                  {/* Timeline line */}
                  <line x1="60" y1="60" x2="740" y2="60" stroke="#bbb" strokeWidth="4" />
                  {/* Steps - Responsive icon size */}
                  {/* Morning */}
                  <circle cx="60" cy="60" r="36" fill="#23272f" stroke="#fff" strokeWidth="2.5" className="sm:r-28" />
                  <g><foreignObject x="36" y="36" width="48" height="48"><Sun color="#fff" size={window.innerWidth < 640 ? 40 : 28} /></foreignObject></g>
                  <text x="60" y="115" fill="#fff" fontSize={window.innerWidth < 640 ? 26 : 22} fontWeight="bold" textAnchor="middle" style={{textShadow:'0 2px 8px #000, 0 0 2px #fff', fontFamily:'Inter,sans-serif'}}>Morning</text>
                  <text x="60" y="140" fill="#e0e0e0" fontSize={window.innerWidth < 640 ? 20 : 18} fontWeight="500" textAnchor="middle" style={{textShadow:'0 2px 8px #000', fontFamily:'Inter,sans-serif'}}>Code Review</text>
                  {/* Midday */}
                  <circle cx="260" cy="60" r="36" fill="#23272f" stroke="#fff" strokeWidth="2.5" className="sm:r-28" />
                  <g><foreignObject x="236" y="36" width="48" height="48"><Lightbulb color="#fff" size={window.innerWidth < 640 ? 40 : 28} /></foreignObject></g>
                  <text x="260" y="115" fill="#fff" fontSize={window.innerWidth < 640 ? 26 : 22} fontWeight="bold" textAnchor="middle" style={{textShadow:'0 2px 8px #000, 0 0 2px #fff', fontFamily:'Inter,sans-serif'}}>Midday</text>
                  <text x="260" y="140" fill="#e0e0e0" fontSize={window.innerWidth < 640 ? 20 : 18} fontWeight="500" textAnchor="middle" style={{textShadow:'0 2px 8px #000', fontFamily:'Inter,sans-serif'}}>Brainstorming</text>
                  {/* Evening */}
                  <circle cx="500" cy="60" r="36" fill="#23272f" stroke="#fff" strokeWidth="2.5" className="sm:r-28" />
                  <g><foreignObject x="476" y="36" width="48" height="48"><Palette color="#fff" size={window.innerWidth < 640 ? 40 : 28} /></foreignObject></g>
                  <text x="500" y="115" fill="#fff" fontSize={window.innerWidth < 640 ? 26 : 22} fontWeight="bold" textAnchor="middle" style={{textShadow:'0 2px 8px #000, 0 0 2px #fff', fontFamily:'Inter,sans-serif'}}>Evening</text>
                  <text x="500" y="140" fill="#e0e0e0" fontSize={window.innerWidth < 640 ? 20 : 18} fontWeight="500" textAnchor="middle" style={{textShadow:'0 2px 8px #000', fontFamily:'Inter,sans-serif'}}>UI Design</text>
                  {/* Night */}
                  <circle cx="740" cy="60" r="36" fill="#23272f" stroke="#fff" strokeWidth="2.5" className="sm:r-28" />
                  <g><foreignObject x="716" y="36" width="48" height="48"><Moon color="#fff" size={window.innerWidth < 640 ? 40 : 28} /></foreignObject></g>
                  <text x="740" y="115" fill="#fff" fontSize={window.innerWidth < 640 ? 26 : 22} fontWeight="bold" textAnchor="middle" style={{textShadow:'0 2px 8px #000, 0 0 2px #fff', fontFamily:'Inter,sans-serif'}}>Night</text>
                  <text x="740" y="140" fill="#e0e0e0" fontSize={window.innerWidth < 640 ? 20 : 18} fontWeight="500" textAnchor="middle" style={{textShadow:'0 2px 8px #000', fontFamily:'Inter,sans-serif'}}>Vibe Coding</text>
                </svg>
              </div>
              {/* Action Buttons and Social Links */}
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 w-full">
                <Button
                  onClick={() => scrollToSection('projects')}
                  className="btn-primary rounded-xl font-semibold px-6 py-3 text-base w-full sm:w-auto shadow-none"
                  style={{ boxShadow: 'none' }}
                >
                  View My Work
                </Button>
                <Button
                  onClick={() => scrollToSection('footer')}
                  className="btn-primary rounded-xl font-semibold px-6 py-3 text-base w-full sm:w-auto shadow-none flex items-center justify-center"
                  style={{ boxShadow: 'none' }}
                >
                  Get Connected
                </Button>
              </div>
            </div>
          </div>
          {/* Right: Code Box, Radar Chart */}
          <div className="flex-1 flex flex-col items-center w-full max-w-xl">
            {/* Code Box */}
            <div className="code-animation w-full max-w-xl mb-8">
              <pre className="whitespace-pre-wrap text-[0.95rem] leading-relaxed font-[Fira_Code,monospace] font-light m-0 p-0 bg-transparent border-0 shadow-none">
{`> const developer = {
  └─ name: "Mohd Kamil",
  └─ role: "Web Developer",
  └─ location: "India",
  └─ skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Python", "MySQL", "MongoDB", "Figma", "Git"],
  └─ passion: "Creating amazing websites"
> };`}
              </pre>
            </div>
            {/* Skills Radar Chart - Compact, Immersive */}
            <div className="w-full flex justify-center mb-8">
              <ResponsiveContainer width={260} height={220}>
                <ReRadarChart cx="50%" cy="50%" outerRadius={70} data={radarSkills} style={{fontFamily:'Fira Code,monospace'}}>
                  <PolarGrid stroke="#444" />
                  <PolarAngleAxis dataKey="skill" tick={{ fill: '#fff', fontSize: 12, fontWeight: 600, textShadow: '0 2px 8px #000' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Skill" dataKey="value" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.5} dot={{ r: 3, fill: '#fff', stroke: '#38bdf8', strokeWidth: 1 }} style={{ filter: 'drop-shadow(0 4px 16px #38bdf8aa)' }} />
                </ReRadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Mobile Optimized */}
      <section id="about" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 scroll-reveal ${visibleElements.has('about-title') ? 'revealed' : ''}`} id="about-title">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className={`space-y-6 scroll-reveal ${visibleElements.has('about-content') ? 'revealed' : ''}`} id="about-content">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate Full Stack Web Developer with a Bachelor's degree in Computer Applications (BCA). 
                  I specialize in creating dynamic, responsive, and user-friendly web applications that deliver 
                  exceptional user experiences.
                </p>
                
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  With expertise spanning from frontend technologies like React and JavaScript to backend 
                  development with PHP and MySQL, I bring ideas to life through clean, efficient code and 
                  modern solutions.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-primary">Education</h3>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    <strong>Bachelor of Computer Applications (BCA)</strong><br />
                    Graduate with comprehensive knowledge in software development, database management, 
                    and modern web technologies.
                  </p>
                </div>
                
                <Button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume-mohd-kamil.pdf';
                    link.download = 'Mohd-Kamil-Resume.pdf';
                    link.click();
                  }}
                  className="btn-primary w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-semibold rounded-xl mt-8"
                >
                  <Download className="mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                  Download Resume
                </Button>
              </div>
              
              <div className={`grid grid-cols-2 gap-4 sm:gap-6 scroll-reveal ${visibleElements.has('about-skills') ? 'revealed' : ''}`} id="about-skills">
                <Card className="project-card p-4 sm:p-6 text-center">
                  <Code className="h-8 w-8 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                  <h4 className="text-sm sm:text-lg font-semibold mb-2">Frontend</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">React, JavaScript, HTML5, CSS3</p>
                </Card>
                
                <Card className="project-card p-4 sm:p-6 text-center">
                  <Database className="h-8 w-8 sm:h-12 sm:w-12 text-accent mx-auto mb-3 sm:mb-4" />
                  <h4 className="text-sm sm:text-lg font-semibold mb-2">Backend</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">PHP, MySQL, Node.js</p>
                </Card>
                
                <Card className="project-card p-4 sm:p-6 text-center">
                  <Globe className="h-8 w-8 sm:h-12 sm:w-12 text-muted-foreground mx-auto mb-3 sm:mb-4" />
                  <h4 className="text-sm sm:text-lg font-semibold mb-2">Web Dev</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Full Stack Development</p>
                </Card>
                
                <Card className="project-card p-4 sm:p-6 text-center">
                  <Smartphone className="h-8 w-8 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                  <h4 className="text-sm sm:text-lg font-semibold mb-2">Design</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Responsive, UI/UX</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Skills Section - Mobile Optimized */}
      <section id="skills" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 scroll-reveal ${visibleElements.has('skills-title') ? 'revealed' : ''}`} id="skills-title">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            
            <div className="space-y-8 sm:space-y-12">
              {skillsData.map((skillCategory, categoryIndex) => (
                <div 
                  key={skillCategory.category} 
                  className={`scroll-reveal ${visibleElements.has(`skill-category-${categoryIndex}`) ? 'revealed' : ''}`}
                  id={`skill-category-${categoryIndex}`}
                >
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center mb-6 sm:mb-8 text-muted-foreground">
                    {skillCategory.category}
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
                    {skillCategory.skills.map((skill, skillIndex) => {
                      return (
                        <TooltipProvider key={skill.name}>
                        <Card 
                            className="skill-card p-4 sm:p-6 text-center group hover:scale-110 hover:shadow-xl hover:border-blue-400 transition-all duration-200 bg-[#181c24] border border-gray-700 rounded-xl relative overflow-hidden"
                          >
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#23283a] border border-gray-600 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 group-hover:shadow-lg">
                                    {skill.name === "HTML" && <i className="devicon-html5-plain text-[2.5rem] text-gray-100" />}
                                    {skill.name === "CSS" && <i className="devicon-css3-plain text-[2.5rem] text-gray-100" />}
                                    {skill.name === "JavaScript" && <i className="devicon-javascript-plain text-[2.5rem] text-gray-100" />}
                                    {skill.name === "Bootstrap" && <i className="devicon-bootstrap-plain text-[2.5rem] text-gray-100" />}
                                    {skill.name === "Java" && <i className="devicon-java-plain text-[2.5rem] text-gray-100" />}
                                    {skill.name === "Python" && <i className="devicon-python-plain text-[2.5rem] text-gray-100" />}
                                    {skill.name === "C++" && <i className="devicon-cplusplus-plain text-[2.5rem] text-gray-100" />}
                                    {skill.name === "C" && <i className="devicon-c-plain text-[2.5rem] text-gray-100" />}
                                    {skill.name === "MySQL" && <i className="devicon-mysql-plain text-[2.5rem] text-gray-100" />}
                                    {skill.name === "MongoDB" && <i className="devicon-mongodb-plain text-[2.5rem] text-gray-100" />}
                                    {skill.name === "Cursor AI" && <i className="devicon-markdown-plain text-[2.5rem] text-gray-100" />}
                                    {skill.name === "Figma" && <i className="devicon-figma-plain text-[2.5rem] text-gray-100" />}
                                    {skill.name === "Replit" && <i className="devicon-bash-plain text-[2.5rem] text-gray-100" />}
                                    {skill.name === "VS Code" && <i className="devicon-vscode-plain text-[2.5rem] text-gray-100" />}
                                  </div>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>{skill.name}</TooltipContent>
                            </Tooltip>
                            <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
                            {skill.name}
                          </h4>
                        </Card>
                        </TooltipProvider>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Mobile Optimized */}
      <section id="projects" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-2 sm:px-6">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 scroll-reveal ${visibleElements.has('projects-title') ? 'revealed' : ''}`} id="projects-title">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          {/* Mobile: Horizontal scroll carousel */}
          <div className="block sm:hidden overflow-x-auto no-scrollbar -mx-2 px-2">
            <div className="flex gap-4" style={{ minWidth: '100vw' }}>
              {projects.map((project, index) => (
                <Card
                  key={project.id}
                  className={`project-card min-w-[90vw] max-w-[95vw] mx-auto group cursor-pointer scroll-reveal ${visibleElements.has(`project-${project.id}`) ? 'revealed' : ''}`}
                  id={`project-${project.id}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-accent/8 text-accent px-2 py-1 rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Always visible action buttons on mobile */}
                    <div className="flex gap-2 mt-4 w-full">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary text-xs flex items-center justify-center rounded-xl px-2 py-2 font-semibold"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                      {project.title !== 'College Event Management System' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 btn-primary text-xs flex items-center justify-center rounded-xl px-2 py-2 font-semibold"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Desktop: Grid layout */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`project-card group cursor-pointer scroll-reveal ${visibleElements.has(`project-${project.id}`) ? 'revealed' : ''}`}
                id={`project-${project.id}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-2 sm:px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-accent/8 text-accent px-2 py-1 rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Fade-in action buttons on hover for desktop */}
                  <div className="flex gap-2 sm:gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-xs sm:text-sm flex items-center justify-center rounded-xl px-2 py-2 font-semibold"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                    {project.title !== 'College Event Management System' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary text-xs sm:text-sm flex items-center justify-center rounded-xl px-2 py-2 font-semibold"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Full width, separate from footer */}
      <section id="contact" className="py-16 sm:py-24 bg-background w-full">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Let's Work Together
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's create something amazing together. Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button 
                onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=mohkamil.info@gmail.com', '_blank')}
                className="btn-primary w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl"
              >
                <Mail className="mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Full width, includes contact section */}
      <footer id="footer" className="py-8 sm:py-12 bg-background border-t border-blue-900/40 mt-12 w-full flex flex-col items-center justify-center px-0">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 px-8 sm:px-16">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Mohd Kamil</h3>
            <p className="text-sm sm:text-base text-gray-400">Full Stack Web Developer</p>
          </div>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="https://github.com/Mohd-Kamil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors inline-flex items-center justify-center p-2 rounded-full"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohd-kamil-0b6b28245/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors inline-flex items-center justify-center p-2 rounded-full"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mohkamil.info@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors inline-flex items-center justify-center p-2 rounded-full"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;