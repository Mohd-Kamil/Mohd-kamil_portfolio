import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, Download, ExternalLink, ChevronDown, Code, Database, Globe, Smartphone, Terminal, Layers, Server, Wrench, Figma, Sun, Coffee, Lightbulb, Palette, Moon, Headphones, Bot, Calendar, PlayCircle, CloudSun, CheckSquare, ShoppingBag, MessageCircle } from 'lucide-react';
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
import playLogo from '@/assets/javascript.svg'; // Use as a play/streaming icon
import cloudLogo from '@/assets/python.svg'; // Use as a weather/cloud icon
import checkLogo from '@/assets/mysql.svg'; // Use as a todo/check icon
import shoeLogo from '@/assets/figma.svg'; // Use as a sneaker/shoe icon
import messageLogo from '@/assets/replit.svg'; // Use as a chat/message icon
import globeLogo from '@/assets/html.svg'; // Use as a globe/language icon
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

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
  logo?: string; // Add logo property
}

const projects: Project[] = [
  {
    id: 1,
    title: "Multi Mode AI Chatbot",
    description: "Advanced AI chatbot with multiple specialized modes including Chat, Auto, Cinephile, Game, and Research modes.",
    techStack: ["React", "Cursor AI", "Replit", "Tailwind CSS", "RAWG API", "TMDB API", "GEMINI API", "SERPER API"],
    githubUrl: "https://github.com/Mohd-Kamil/Chat-box",
    liveUrl: "https://chat-box-3hk3.onrender.com/chat",
    category: "AI & Machine Learning",
    logo: "bot"
  },
  {
    id: 2,
    title: "Pokedex",
    description: "Pokedex web app to search any pokemon with 1000+ pokemons with images and every detail about them, it has retro style and with original pokedex style. it uses PokeAPI for fetching pokemon data and uses HTML, Tailwind, Next.js, and typescript",
    techStack: ["HTML", "Tailwind CSS", "Next.js", "TypeScript", "PokeAPI"],
    githubUrl: "https://github.com/Mohd-Kamil/Pokedex",
    liveUrl: "https://pokedex-five-nu-13.vercel.app/",
    category: "Frontend",
    logo: "bot"
  },
  {
    id: 3,
    title: "College Event Management System",
    description: "Comprehensive system for managing college events with user registration, event scheduling, and admin controls.",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Mohd-Kamil/College-event-management-system",
    liveUrl: "",
    category: "Full Stack Web",
    logo: "calendar"
  },
  {
    id: 4,
    title: "Streaming Service Landing Page",
    description: "Modern, responsive landing page for a streaming service with interactive UI elements and smooth animations.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    githubUrl: "https://github.com/Mohd-Kamil/Streaming_service_Landing_page",
    liveUrl: "https://streaming-app-landing-page.netlify.app/",
    category: "Frontend",
    logo: "play"
  },
  {
    id: 5,
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts and interactive weather maps.",
    techStack: ["JavaScript", "Weather API", "HTML", "CSS", "React"],
    githubUrl: "https://github.com/Mohd-Kamil/Weather-forcast-web-app",
    liveUrl: "https://weather-forecast-web-app0.netlify.app/",
    category: "Frontend",
    logo: "cloud"
  },
  {
    id: 6,
    title: "To-Do Web App",
    description: "Feature-rich task management application with drag-and-drop functionality and local storage.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    githubUrl: "https://github.com/Mohd-Kamil/To-Do-app",
    liveUrl: "https://to-do-web-app88.netlify.app/",
    category: "Frontend",
    logo: "check"
  },
  {
    id: 7,
    title: "Sneaker Website Landing Page",
    description: "Dynamic e-commerce landing page for sneakers with product showcase and interactive design.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    githubUrl: "https://github.com/Mohd-Kamil/Sneaker_website_landing_page",
    liveUrl: "https://sneaker-website-landing-page.netlify.app/",
    category: "Frontend",
    logo: "shoe"
  },
  {
    id: 8,
    title: "Chat Bot Landing Page",
    description: "Professional landing page for AI chatbot services with modern design and interactive elements.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    githubUrl: "https://github.com/Mohd-Kamil/Simple-chat-box",
    liveUrl: "https://simple-chat-box.netlify.app/",
    category: "Frontend",
    logo: "message"
  },
  {
    id: 9,
    title: "Spanish Learning App",
    description: "Interactive language learning application with progress tracking and gamified learning experience.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    githubUrl: "https://github.com/Mohd-Kamil/Spanish-learning-web-app",
    liveUrl: "https://spanish-learning-web-app.netlify.app/",
    category: "Frontend",
    logo: "globe"
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-[#181c24] via-[#23283a] to-[#181c24] text-foreground w-full">
      {/* Hero Section - Minimal Square Checkered Pattern, Dark, Aesthetic */}
      <section id="home" className="relative min-h-screen flex items-center justify-center w-full bg-background">
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
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between h-auto px-0 sm:px-8 py-4 bg-background/95 border-b border-gray-700/30 shadow-lg backdrop-blur-md overflow-visible">
          <div className="text-white text-2xl font-extrabold flex items-center gap-2 select-none tracking-tight drop-shadow-lg">
            <span className="text-gray-400">&lt;/&gt;</span> Mohd Kamil
          </div>
          {/* Hamburger menu for mobile */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none ml-0 mr-2 bg-transparent"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
          {/* Nav links */}
          <ul
            className={`${mobileMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row gap-4 sm:gap-6 text-white font-semibold text-base sm:text-lg items-start absolute sm:static top-full left-0 w-full sm:w-auto bg-background/95 sm:bg-transparent border-t border-gray-700/30 sm:border-none shadow-lg sm:shadow-none px-4 sm:px-0 py-4 sm:py-0 z-40`}
            style={{ display: mobileMenuOpen ? 'flex' : 'none', flexDirection: 'column', position: 'absolute', top: '100%', left: 0, width: '100%', background: 'rgba(24,28,36,0.97)', zIndex: 40 }}
          >
            {['home','about','skills','projects','contact'].map((id) => (
              <li key={id} className="w-full sm:w-auto">
                <button
                  onClick={() => { scrollToSection(id); setMobileMenuOpen(false); }}
                  className={`w-full text-left px-2 py-2 sm:px-3 rounded-lg transition-all border-2 focus:outline-none ${navActive===id ? 'text-gray-300 border-gray-400 bg-gray-700/20 font-bold shadow-md' : 'border-transparent hover:text-gray-300 hover:border-gray-400 hover:bg-gray-700/10'}`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-full flex flex-col lg:flex-row items-start justify-start z-10 min-h-[50vh] pt-24 sm:pt-28 gap-12">
          {/* Left: Intro, Stats, Day/Night */}
          <div className="flex-1 flex flex-col items-start justify-start w-full mb-8 lg:mb-0 text-left">
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
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8 w-full items-center justify-center px-0 mx-0">
              <div className="flex flex-row w-full justify-between gap-2">
                <div className="flex-1 flex flex-col items-center">
                  <span className="text-2xl sm:text-4xl font-bold text-gray-100 font-[Inter,sans-serif]">{<CountUp end={5} duration={2} />}+</span>
                  <span className="text-gray-200 text-xs sm:text-lg font-semibold mt-1 font-[Inter,sans-serif] text-center">Designs Delivered</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <span className="text-2xl sm:text-4xl font-bold text-gray-100 font-[Inter,sans-serif]">{<CountUp end={9} duration={2} />}+</span>
                  <span className="text-gray-200 text-xs sm:text-lg font-semibold mt-1 font-[Inter,sans-serif] text-center">Projects</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <span className="text-2xl sm:text-4xl font-bold text-gray-100 font-[Inter,sans-serif]">{<CountUp end={6} duration={2} />}+</span>
                  <span className="text-gray-200 text-xs sm:text-lg font-semibold mt-1 font-[Inter,sans-serif] text-center">APIs Integrated</span>
                </div>
              </div>
            </div>
            {/* Day in the Life Timeline */}
            <div className="w-full flex flex-col items-center mb-6">
              {/* --- Day/Night Cycle Timeline with Overlaid Icons --- */}
              <div className="w-full flex flex-col items-center relative" style={{height: '220px', maxWidth: '100%'}}>
                <svg viewBox="0 0 800 200" width="100%" height="200" className="mb-2" style={{ position: 'relative', zIndex: 1, maxWidth: '100%' }}>
                  <line x1="60" y1="80" x2="740" y2="80" stroke="#bbb" strokeWidth="4" />
                  {/* Circles */}
                  <circle cx="60" cy="80" r="48" fill="#23272f" stroke="#fff" strokeWidth="2.5" />
                  <circle cx="260" cy="80" r="48" fill="#23272f" stroke="#fff" strokeWidth="2.5" />
                  <circle cx="500" cy="80" r="48" fill="#23272f" stroke="#fff" strokeWidth="2.5" />
                  <circle cx="740" cy="80" r="48" fill="#23272f" stroke="#fff" strokeWidth="2.5" />
                  {/* Inline SVG icons for perfect centering */}
                  {/* Sun */}
                  <g transform="translate(36,56)">
                    <circle cx="24" cy="24" r="10" stroke="#fff" strokeWidth="2" fill="none"/>
                    <g stroke="#fff" strokeWidth="2" strokeLinecap="round">
                      <line x1="24" y1="4" x2="24" y2="8"/>
                      <line x1="24" y1="40" x2="24" y2="44"/>
                      <line x1="44" y1="24" x2="40" y2="24"/>
                      <line x1="8" y1="24" x2="4" y2="24"/>
                      <line x1="37.8" y1="10.2" x2="35.6" y2="12.4"/>
                      <line x1="12.4" y1="35.6" x2="10.2" y2="37.8"/>
                      <line x1="37.8" y1="37.8" x2="35.6" y2="35.6"/>
                      <line x1="12.4" y1="12.4" x2="10.2" y2="10.2"/>
                    </g>
                  </g>
                  {/* Lightbulb */}
                  <g transform="translate(236,56)">
                    <path d="M24 2a14 14 0 0 1 14 14c0 5.25-3.25 9.75-8 13v3a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-3c-4.75-3.25-8-7.75-8-13A14 14 0 0 1 24 2z" stroke="#fff" strokeWidth="2" fill="none"/>
                    <line x1="20" y1="44" x2="28" y2="44" stroke="#fff" strokeWidth="2"/>
                    <line x1="22" y1="40" x2="26" y2="40" stroke="#fff" strokeWidth="2"/>
                  </g>
                  {/* Palette */}
                  <g transform="translate(476,56)">
                    <path d="M24 4a20 20 0 1 0 0 40c2.21 0 4-1.79 4-4s-1.79-4-4-4h-4a4 4 0 0 1 0-8h4a4 4 0 0 0 0-8h-4a4 4 0 0 1 0-8h4c2.21 0 4-1.79 4-4s-1.79-4-4-4z" stroke="#fff" strokeWidth="2" fill="none"/>
                    <circle cx="16" cy="16" r="2" fill="#fff"/>
                    <circle cx="32" cy="16" r="2" fill="#fff"/>
                    <circle cx="16" cy="32" r="2" fill="#fff"/>
                    <circle cx="32" cy="32" r="2" fill="#fff"/>
                  </g>
                  {/* Moon */}
                  <g transform="translate(716,56)">
                    <path d="M32 24c0 8.837-7.163 16-16 16a16 16 0 1 1 16-16z" stroke="#fff" strokeWidth="2" fill="none"/>
                  </g>
                  {/* Labels */}
                  <text x="60" y="155" fill="#fff" fontSize="22" fontWeight="bold" textAnchor="middle" style={{fontFamily:'Inter,sans-serif'}}>Morning</text>
                  <text x="60" y="180" fill="#e0e0e0" fontSize="18" fontWeight="500" textAnchor="middle" style={{fontFamily:'Inter,sans-serif'}}>Code Review</text>
                  <text x="260" y="155" fill="#fff" fontSize="22" fontWeight="bold" textAnchor="middle" style={{fontFamily:'Inter,sans-serif'}}>Midday</text>
                  <text x="260" y="180" fill="#e0e0e0" fontSize="18" fontWeight="500" textAnchor="middle" style={{fontFamily:'Inter,sans-serif'}}>Brainstorming</text>
                  <text x="500" y="155" fill="#fff" fontSize="22" fontWeight="bold" textAnchor="middle" style={{fontFamily:'Inter,sans-serif'}}>Evening</text>
                  <text x="500" y="180" fill="#e0e0e0" fontSize="18" fontWeight="500" textAnchor="middle" style={{fontFamily:'Inter,sans-serif'}}>UI Design</text>
                  <text x="740" y="155" fill="#fff" fontSize="22" fontWeight="bold" textAnchor="middle" style={{fontFamily:'Inter,sans-serif'}}>Night</text>
                  <text x="740" y="180" fill="#e0e0e0" fontSize="18" fontWeight="500" textAnchor="middle" style={{fontFamily:'Inter,sans-serif'}}>Vibe Coding</text>
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
          <div className="flex-1 flex flex-col items-start w-full text-left">
            {/* Code Box */}
            <div className="code-animation w-full mb-8">
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
                  <PolarAngleAxis dataKey="skill" tick={{ fill: '#fff', fontSize: 12, fontWeight: 600 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Skill" dataKey="value" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.5} dot={{ r: 3, fill: '#fff', stroke: '#38bdf8', strokeWidth: 1 }} style={{ filter: 'drop-shadow(0 4px 16px #38bdf8aa)' }} />
                </ReRadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Responsive, Screenshot Style */}
      <section id="about" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-0 sm:px-6 w-full">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Intro, Education, Resume */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8">About Me</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-xl">
                I'm a passionate Full Stack Web Developer with a Bachelor's degree in Computer Applications (BCA). I specialize in creating dynamic, responsive, and user-friendly web applications that deliver exceptional user experiences.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-xl">
                With expertise spanning from frontend technologies like React and JavaScript to backend development with PHP and MySQL, I bring ideas to life through clean, efficient code and modern solutions.
              </p>
              <div className="mb-6 w-full">
                <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">Education</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-2">
                  <strong>Bachelor of Computer Applications (BCA)</strong><br />
                  Graduate with comprehensive knowledge in software development, database management, and modern web technologies.
                </p>
              </div>
              <Button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume-mohd-kamil.pdf';
                  link.download = 'Mohd-Kamil-Resume.pdf';
                  link.click();
                }}
                className="btn-primary w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-semibold rounded-xl mt-2"
              >
                <Download className="mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                Download Resume
              </Button>
            </div>
            {/* Right: Cards Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 lg:mt-0 px-0 sm:px-0">
              <Card className="project-card flex flex-col items-center p-6 text-center shadow-lg border border-gray-700 rounded-2xl w-full">
                <CardHeader className="flex flex-col items-center justify-center p-0 mb-2">
                  <Code className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-lg font-bold mb-1">Frontend</CardTitle>
                  <CardDescription className="text-xs text-muted-foreground mb-2">React, JavaScript, HTML5, CSS3</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-sm text-gray-300 p-0">Building beautiful, interactive UIs and web apps.</CardContent>
              </Card>
              <Card className="project-card flex flex-col items-center p-6 text-center shadow-lg border border-gray-700 rounded-2xl w-full">
                <CardHeader className="flex flex-col items-center justify-center p-0 mb-2">
                  <Database className="h-10 w-10 text-accent mb-3" />
                  <CardTitle className="text-lg font-bold mb-1">Backend</CardTitle>
                  <CardDescription className="text-xs text-muted-foreground mb-2">PHP, MySQL, Node.js</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-sm text-gray-300 p-0">Robust server logic, APIs, and data management.</CardContent>
              </Card>
              <Card className="project-card flex flex-col items-center p-6 text-center shadow-lg border border-gray-700 rounded-2xl w-full">
                <CardHeader className="flex flex-col items-center justify-center p-0 mb-2">
                  <Globe className="h-10 w-10 text-muted-foreground mb-3" />
                  <CardTitle className="text-lg font-bold mb-1">Web Dev</CardTitle>
                  <CardDescription className="text-xs text-muted-foreground mb-2">Full Stack Development</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-sm text-gray-300 p-0">End-to-end web solutions and integrations.</CardContent>
              </Card>
              <Card className="project-card flex flex-col items-center p-6 text-center shadow-lg border border-gray-700 rounded-2xl w-full">
                <CardHeader className="flex flex-col items-center justify-center p-0 mb-2">
                  <Smartphone className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-lg font-bold mb-1">Design</CardTitle>
                  <CardDescription className="text-xs text-muted-foreground mb-2">Responsive, UI/UX</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-sm text-gray-300 p-0">Modern, mobile-friendly, and accessible design.</CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Skills Section - Mobile Optimized */}
      <section id="skills" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-0 sm:px-6 w-full">
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
        <div className="container mx-auto px-0 sm:px-6 w-full">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 scroll-reveal ${visibleElements.has('projects-title') ? 'revealed' : ''}`} id="projects-title">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          {/* Mobile: Vertical stack */}
          <div className="block sm:hidden w-full relative bg-background px-2">
            {projects.length === 0 && (
              <div className="text-center text-red-500 font-bold p-8">No projects found!</div>
            )}
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="project-card w-full mb-6 group cursor-pointer bg-[#181c24] border border-gray-800 rounded-2xl shadow-2xl flex flex-col min-h-[370px] p-4"
                id={`project-${project.id}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col flex-1">
                  <CardHeader className="p-4 pb-2">
                    {project.logo && (
                      <div className="mx-auto mb-2 w-12 h-12 flex items-center justify-center rounded-lg bg-[#23283a]">
                        {project.logo === "bot" && <Bot className="w-8 h-8 text-primary" />}
                        {project.logo === "calendar" && <Calendar className="w-8 h-8 text-accent" />}
                        {project.logo === "play" && <PlayCircle className="w-8 h-8 text-pink-400" />}
                        {project.logo === "cloud" && <CloudSun className="w-8 h-8 text-blue-400" />}
                        {project.logo === "check" && <CheckSquare className="w-8 h-8 text-green-400" />}
                        {project.logo === "shoe" && <ShoppingBag className="w-8 h-8 text-yellow-400" />}
                        {project.logo === "message" && <MessageCircle className="w-8 h-8 text-purple-400" />}
                        {project.logo === "globe" && <Globe className="w-8 h-8 text-cyan-400" />}
                      </div>
                    )}
                    <CardTitle className="text-xl font-bold text-white mb-2 text-center">{project.title}</CardTitle>
                    <CardDescription className="text-base text-gray-300 mb-4 text-center">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mt-2 mb-6 justify-center">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-700 border border-gray-600 rounded-full px-3 py-1 font-semibold text-sm text-gray-100 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <div className="flex-1" />
                  <CardContent className="p-4 pt-2 flex flex-col justify-end">
                    <div className="flex flex-row gap-3 w-full mt-2">
                      <Button variant="outline" size="sm" className="flex-1" onClick={() => window.open(project.githubUrl, '_blank')}>
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      {project.liveUrl && project.title !== "College Event Management System" && (
                        <Button size="sm" className="flex-1" onClick={() => window.open(project.liveUrl, '_blank')}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          {/* Desktop: Grid layout (unchanged) */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`project-card group cursor-pointer scroll-reveal ${visibleElements.has(`project-${project.id}`) ? 'revealed' : ''}`}
                id={`project-${project.id}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col flex-1">
                  <CardHeader className="p-4 sm:p-6">
                    {project.logo && (
                      <div className="mx-auto mb-2 w-12 h-12 flex items-center justify-center rounded-lg bg-[#23283a]">
                        {project.logo === "bot" && <Bot className="w-8 h-8 text-primary" />}
                        {project.logo === "calendar" && <Calendar className="w-8 h-8 text-accent" />}
                        {project.logo === "play" && <PlayCircle className="w-8 h-8 text-pink-400" />}
                        {project.logo === "cloud" && <CloudSun className="w-8 h-8 text-blue-400" />}
                        {project.logo === "check" && <CheckSquare className="w-8 h-8 text-green-400" />}
                        {project.logo === "shoe" && <ShoppingBag className="w-8 h-8 text-yellow-400" />}
                        {project.logo === "message" && <MessageCircle className="w-8 h-8 text-purple-400" />}
                        {project.logo === "globe" && <Globe className="w-8 h-8 text-cyan-400" />}
                      </div>
                    )}
                    <CardTitle className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base text-gray-300 mb-4">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-700 border border-gray-600 rounded-full px-3 py-1 font-semibold text-sm text-gray-100 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex flex-row gap-3 w-full">
                      <Button variant="outline" size="sm" className="flex-1" onClick={() => window.open(project.githubUrl, '_blank')}>
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      {project.liveUrl ? (
                        <Button size="sm" className="flex-1" onClick={() => window.open(project.liveUrl, '_blank')}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      ) : (
                        <Button size="sm" className="flex-1" disabled variant="outline">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Restore original single CTA style */}
      <section id="contact" className="py-16 sm:py-24 bg-background w-full">
        <div className="container mx-auto px-0 sm:px-6 w-full">
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

      {/* Footer */}
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
              href="https://www.linkedin.com/in/mohd-kamil-4b6241366/"
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
