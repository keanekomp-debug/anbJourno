
import React from 'react';
import { Article } from '../types.ts';

interface ArticleCardProps {
  article: Article;
  lang: 'pt' | 'en';
  onClick: (article: Article) => void;
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, lang, onClick, className }) => {
  const content = article[lang];

  return (
    <div 
      className={`group cursor-pointer border-b border-slate-200 dark:border-slate-800 pb-8 last:border-0 ${className}`}
      onClick={() => onClick(article)}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 order-2 md:order-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent px-2 py-0.5 border border-brand-accent rounded">
              {article.category}
            </span>
            <span className="text-[10px] text-slate-400 font-semibold">{article.date}</span>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-normal leading-tight mb-3 group-hover:underline decoration-brand-accent decoration-2 underline-offset-4 dark:text-white">
            {content.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 font-sans mb-4">
            {content.subtitle}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
            <span className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-500">{article.author}</span>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm">
            <img 
              src={article.imageUrl} 
              alt={content.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
