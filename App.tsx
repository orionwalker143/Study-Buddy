
import React, { useState, useEffect } from 'react';
import { STUDY_TIPS, STUDY_WEBSITES, StudyTip, Website } from './constants';

type ViewState = 'home' | 'tips' | 'websites';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-[#9C70CE] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{ left: position.x, top: position.y, transform: `translate(-50%, -50%) scale(${isMouseDown ? 0.5 : 1})` }}
      />
      <div 
        className={`fixed top-0 left-0 rounded-full border-2 border-[#9C70CE] pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${isPointer ? 'w-12 h-12 bg-[#9C70CE]/20' : 'w-8 h-8 bg-transparent'}`}
        style={{ 
          left: position.x, 
          top: position.y, 
          transform: `translate(-50%, -50%) scale(${isMouseDown ? 0.8 : 1})`,
          opacity: isVisible ? 1 : 0
        }}
      />
    </>
  );
};

const AnimatedTitle: React.FC = () => {
  const text = "Study Buddy";
  return (
    <div className="flex flex-nowrap justify-center gap-x-1 sm:gap-x-2 md:gap-x-3 mb-16 cursor-default group whitespace-nowrap overflow-visible">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={`animate-letter text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-[#9C70CE] drop-shadow-xl select-none group-hover:text-[#7b58a3] transition-colors`}
          style={{ 
            animationDelay: `${i * 0.1}s`,
            animationDuration: '2.5s'
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedTipId, setSelectedTipId] = useState<string>(STUDY_TIPS[0].id);

  const selectedTip = STUDY_TIPS.find(tip => tip.id === selectedTipId) || STUDY_TIPS[0];

  const renderTextWithLinks = (text: string) => {
    const parts = [];
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <a 
          key={match.index} 
          href={match[2]} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#9C70CE] font-bold underline decoration-[#9C70CE] hover:text-[#7b58a3] transition-colors decoration-2 underline-offset-2"
        >
          {match[1]}
        </a>
      );
      lastIndex = linkRegex.lastIndex;
    }
    
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    
    return parts.length > 0 ? parts : text;
  };

  const renderLineContent = (content: string) => {
    const colonIndex = content.indexOf(':');
    if (colonIndex !== -1 && colonIndex < 30) {
      const label = content.substring(0, colonIndex);
      const rest = content.substring(colonIndex);
      return (
        <>
          <span className="font-bold text-[#9C70CE]">{label}</span>
          {renderTextWithLinks(rest)}
        </>
      );
    }
    return renderTextWithLinks(content);
  };

  const renderHome = () => (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 animate-fadeIn">
      <AnimatedTitle />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <button 
          onClick={() => setCurrentView('tips')}
          className="group flex flex-col items-center justify-center bg-white hover:bg-[#9C70CE] transition-all duration-300 p-12 rounded-[40px] shadow-2xl border-4 border-[#9C70CE]"
        >
          <span className="text-8xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">🌀</span>
          <span className="text-4xl font-bold text-[#9C70CE] group-hover:text-white transition-colors">Tips</span>
        </button>

        <button 
          onClick={() => setCurrentView('websites')}
          className="group flex flex-col items-center justify-center bg-white hover:bg-[#9C70CE] transition-all duration-300 p-12 rounded-[40px] shadow-2xl border-4 border-[#9C70CE]"
        >
          <span className="text-8xl mb-6 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500">🌐</span>
          <span className="text-4xl font-bold text-[#9C70CE] group-hover:text-white transition-colors">Websites</span>
        </button>
      </div>

      <footer className="mt-24 text-center">
        <p className="text-[#9C70CE] font-semibold bg-white/60 backdrop-blur-sm px-8 py-3 rounded-full border-2 border-[#9C70CE]/40 shadow-sm">
          email me any extra tips or websites you want <a href="mailto:orionwalker99@gmail.com" className="underline font-bold hover:text-[#7b58a3]">orionwalker99@gmail.com</a>
        </p>
      </footer>
    </div>
  );

  const renderTips = () => (
    <div className="flex flex-col min-h-screen animate-fadeIn">
      <div className="bg-[#9C70CE] p-6 flex items-center justify-between shadow-lg">
        <button 
          onClick={() => setCurrentView('home')}
          className="text-white flex items-center gap-2 hover:bg-white/20 px-6 py-2 rounded-2xl transition-all font-bold text-lg"
        >
          <span>←</span> Back Home
        </button>
        <h2 className="text-white text-3xl font-bold tracking-tight">Study Tips 🌀</h2>
        <div className="w-24"></div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-1/3 md:w-1/4 bg-white border-r-4 border-[#9C70CE] overflow-y-auto custom-scrollbar">
          <nav className="p-4 md:p-6">
            {STUDY_TIPS.map((tip) => (
              <button
                key={tip.id}
                onClick={() => setSelectedTipId(tip.id)}
                className={`w-full text-left p-5 mb-4 rounded-2xl font-bold text-lg transition-all duration-300 border-2 ${
                  selectedTipId === tip.id 
                    ? 'bg-[#9C70CE] text-white border-transparent scale-[1.05] shadow-xl' 
                    : 'bg-white text-[#9C70CE] border-[#9C70CE]/20 hover:border-[#9C70CE] hover:translate-x-1'
                }`}
              >
                {tip.title}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 bg-white p-8 md:p-16 overflow-y-auto custom-scrollbar">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-purple lg:prose-2xl max-w-none text-slate-800 leading-relaxed font-medium">
              {selectedTip.content.split('\n').map((line, i) => {
                const trimmedLine = line.trim();
                if (!trimmedLine) return <br key={i} />;

                if (trimmedLine.startsWith('##')) {
                  return <h1 key={i} className="text-5xl font-bold text-[#9C70CE] mb-10 border-b-4 border-[#EEAEFF] pb-4">{trimmedLine.replace('##', '').trim()}</h1>;
                }
                
                if (trimmedLine.startsWith('-')) {
                  const content = trimmedLine.replace('-', '').trim();
                  return (
                    <li key={i} className="ml-6 mb-4 list-none flex items-start">
                      <span className="text-[#9C70CE] mr-3 mt-1 text-2xl">•</span>
                      <span>{renderLineContent(content)}</span>
                    </li>
                  );
                }
                
                if (trimmedLine.match(/^\d\./)) {
                  const number = trimmedLine.split('.')[0];
                  const rest = trimmedLine.split('.').slice(1).join('.').trim();
                  return (
                    <div key={i} className="ml-6 mb-4 flex items-start">
                      <span className="text-[#9C70CE] font-bold mr-3 text-xl">{number}.</span> 
                      <span>{renderLineContent(rest)}</span>
                    </div>
                  );
                }

                return <p key={i} className="mb-6 text-xl">{renderLineContent(trimmedLine)}</p>;
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );

  const renderWebsites = () => (
    <div className="flex flex-col min-h-screen animate-fadeIn">
      <div className="bg-[#9C70CE] p-6 flex items-center justify-between shadow-lg sticky top-0 z-10">
        <button 
          onClick={() => setCurrentView('home')}
          className="text-white flex items-center gap-2 hover:bg-white/20 px-6 py-2 rounded-2xl transition-all font-bold text-lg"
        >
          <span>←</span> Back Home
        </button>
        <h2 className="text-white text-3xl font-bold tracking-tight">Helpful Websites 🌐</h2>
        <div className="w-24"></div>
      </div>

      <div className="p-8 md:p-16 flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {STUDY_WEBSITES.map((site) => (
              <a
                key={site.id}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-8 bg-white border-4 border-[#9C70CE] rounded-[32px] shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group"
              >
                <span className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-500 group-hover:rotate-6">{site.icon}</span>
                <span className="text-xl font-bold text-[#9C70CE] text-center group-hover:text-[#7b58a3] transition-colors">{site.title}</span>
                <div className="mt-4 px-4 py-1 rounded-full bg-[#EEAEFF]/30 text-xs font-bold text-[#9C70CE] opacity-0 group-hover:opacity-100 transition-opacity">GO TO SITE</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen selection:bg-[#EEAEFF] selection:text-[#9C70CE]">
      <CustomCursor />
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          * {
            cursor: none !important;
          }
        `}
      </style>
      {currentView === 'home' && renderHome()}
      {currentView === 'tips' && renderTips()}
      {currentView === 'websites' && renderWebsites()}
    </div>
  );
};

export default App;
