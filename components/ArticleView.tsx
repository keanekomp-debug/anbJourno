
import React, { useState, useEffect } from 'react';
import { Article } from '../types.ts';
import { UI_STRINGS } from '../constants.tsx';

interface ArticleViewProps {
  article: Article;
  lang: 'pt' | 'en';
  onBack: () => void;
}

const ArticleView: React.FC<ArticleViewProps> = ({ article, lang, onBack }) => {
  const [claps, setClaps] = useState<number>(0);
  const content = article[lang];
  const t = UI_STRINGS[lang];

  useEffect(() => {
    const savedClaps = localStorage.getItem(`claps_${article.id}`);
    if (savedClaps) setClaps(parseInt(savedClaps));
    window.scrollTo(0, 0);
  }, [article.id]);

  const handleClap = () => {
    const newClaps = claps + 1;
    setClaps(newClaps);
    localStorage.setItem(`claps_${article.id}`, newClaps.toString());
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] animate-fade-in pb-20">
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <button 
          onClick={onBack}
          className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-brand-accent mb-12 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-2 group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
          {t.back}
        </button>

        <header className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">{article.category}</span>
            <span className="text-xs text-slate-400">{article.date}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-normal text-slate-900 dark:text-white mb-6 leading-[1.1]">
            {content.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-serif italic border-l-4 border-slate-100 dark:border-slate-800 pl-6 mb-12">
            {content.subtitle}
          </p>
          <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-900 pb-8">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-lg dark:text-white">
              {article.author[0]}
            </div>
            <div>
              <p className="text-sm font-bold dark:text-white">{article.author}</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">A Lanterna Staff Reporter</p>
            </div>
          </div>
        </header>

        <div className="mb-16">
          <img 
            src={article.imageUrl} 
            alt={content.title} 
            className="w-full h-[500px] object-cover rounded-sm grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
          />
        </div>

        <div className="font-sans text-lg text-slate-800 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto space-y-8">
          {content.content.map((p, i) => (
            <p key={i} className={i === 0 ? 'article-dropcap' : ''}>{p}</p>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-900 flex flex-col items-center">
          <button 
            onClick={handleClap}
            className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 px-6 py-3 rounded-full hover:bg-brand-accent hover:text-white transition-all group"
          >
            <span className="text-2xl group-hover:animate-bounce">👏</span>
            <span className="font-black text-xs uppercase tracking-widest">{claps} {t.claps}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
