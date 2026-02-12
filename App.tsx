
import React, { useState, useEffect } from 'react';
import { Category, Article } from './types.ts';
import { ARTICLES_DATA, EDITORIAL_TEAM, UI_STRINGS } from './constants.tsx';
import ArticleCard from './components/ArticleCard.tsx';
import ArticleView from './components/ArticleView.tsx';
import CookieBanner from './components/CookieBanner.tsx';

type Page = 'home' | 'about' | 'news';

const App: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [darkMode, setDarkMode] = useState(false);

  const t = UI_STRINGS[lang];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
  };

  const featured = ARTICLES_DATA.find(a => a.isFeatured) || ARTICLES_DATA[0];

  const renderHome = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 space-y-12">
        <div 
          className="group cursor-pointer border-b-4 border-slate-900 dark:border-slate-100 pb-12"
          onClick={() => handleArticleClick(featured)}
        >
          <div className="aspect-[21/9] overflow-hidden mb-6 rounded-sm">
            <img 
              src={featured.imageUrl} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
              alt={featured[lang].title}
            />
          </div>
          <div className="max-w-3xl">
            <span className="text-brand-accent text-xs font-black uppercase tracking-[0.3em] mb-4 block">Destaque</span>
            <h2 className="font-serif text-4xl md:text-6xl font-normal leading-tight dark:text-white mb-4 group-hover:underline underline-offset-8 decoration-1">
              {featured[lang].title}
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
              {featured[lang].subtitle}
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 border-b border-slate-100 dark:border-slate-900 pb-2">
            Últimas Histórias
          </h3>
          {ARTICLES_DATA.filter(a => !a.isFeatured).map(article => (
            <ArticleCard key={article.id} article={article} lang={lang} onClick={handleArticleClick} />
          ))}
        </div>
      </div>

      <div className="lg:col-span-4 space-y-16">
        <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-sm">
          <h4 className="font-serif text-2xl mb-4 dark:text-white">{t.subscribe}</h4>
          <p className="text-sm text-slate-500 mb-6">{t.footerText}</p>
          <div className="flex flex-col gap-3">
            <input type="email" placeholder="email@address.pt" className="bg-white dark:bg-black border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent" />
            <button className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-black text-xs uppercase tracking-widest py-3 hover:bg-brand-accent dark:hover:bg-brand-accent dark:hover:text-white transition-all">
              Join Now
            </button>
          </div>
        </div>

        <div className="border-t-2 border-brand-accent pt-8">
          <h4 className="font-serif text-2xl mb-4 dark:text-white italic">{t.citizenJournalism}</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            {t.citizenText}
          </p>
          <button className="text-xs font-black uppercase tracking-widest text-brand-accent border-b-2 border-brand-accent pb-1">
            {t.write} &rarr;
          </button>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">{t.trending}</h4>
          {ARTICLES_DATA.map((a, i) => (
            <div key={a.id} className="flex gap-4 group cursor-pointer" onClick={() => handleArticleClick(a)}>
              <span className="font-serif text-4xl text-slate-200 dark:text-slate-800 transition-colors group-hover:text-brand-accent">0{i+1}</span>
              <p className="text-sm font-bold leading-tight dark:text-white group-hover:text-brand-accent transition-colors">{a[lang].title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="max-w-5xl mx-auto py-12">
      <h2 className="font-serif text-6xl mb-12 text-center dark:text-white">{t.editorialTeam}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {EDITORIAL_TEAM.map(member => (
          <div key={member.name} className="text-center group">
            <div className="aspect-square rounded-full overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif text-2xl dark:text-white mb-1">{member.name}</h3>
            <p className="text-brand-accent text-xs font-bold uppercase mb-4">{member.role}</p>
            <p className="text-slate-500 text-sm leading-relaxed">{member.bio[lang]}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderNews = () => (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="font-serif text-6xl mb-12 dark:text-white">{t.latestNews}</h2>
      <div className="space-y-12">
        {[1, 2, 3].map(i => (
          <div key={i} className="border-l-2 border-slate-200 dark:border-slate-800 pl-8 pb-8">
            <span className="text-[10px] font-black text-brand-accent uppercase tracking-widest">Update #{i}</span>
            <h3 className="font-serif text-3xl dark:text-white my-3">
              {lang === 'pt' ? 'Resumo Diário: O pulso da nação' : 'Daily Digest: The nations pulse'}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {lang === 'pt' 
                ? 'Hoje focamos nos novos desenvolvimentos urbanos e nas vozes que emergem das universidades portuguesas.' 
                : 'Today we focus on new urban developments and the voices emerging from Portuguese universities.'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] transition-colors duration-500">
      <div className="border-b border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-black py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black uppercase tracking-tighter dark:text-slate-500">
              {new Date().toLocaleDateString(lang === 'pt' ? 'pt-PT' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
          <div className="flex items-center gap-4">
             <button onClick={() => setDarkMode(!darkMode)} className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-brand-accent transition-colors">
              {darkMode ? 'Light' : 'Dark'} Mode
            </button>
            <button onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')} className="text-[10px] font-black uppercase tracking-widest bg-slate-900 dark:bg-white text-white dark:text-black px-2 py-0.5 rounded">
              {lang.toUpperCase()}
            </button>
          </div>
        </div>
      </div>

      <header className="py-12 px-6 border-b border-slate-900 dark:border-slate-100 mx-6 mb-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h1 
            className="font-serif text-6xl md:text-9xl font-normal tracking-[-0.05em] cursor-pointer dark:text-white"
            onClick={() => {setSelectedArticle(null); setCurrentPage('home');}}
          >
            A LANTERNA
          </h1>
          <p className="font-serif italic text-lg text-slate-400 mt-2">O Futuro Revisitado • Digital Edition</p>
        </div>
      </header>

      <nav className="mb-12 px-6">
        <div className="max-w-7xl mx-auto border-b border-slate-100 dark:border-slate-900 pb-4">
          <ul className="flex justify-center gap-12">
            {[
              { id: 'home', label: t.home },
              { id: 'news', label: t.news },
              { id: 'about', label: t.about }
            ].map(link => (
              <li key={link.id}>
                <button 
                  onClick={() => {setSelectedArticle(null); setCurrentPage(link.id as Page);}}
                  className={`text-xs font-black uppercase tracking-[0.3em] transition-all pb-1 border-b-2 ${currentPage === link.id && !selectedArticle ? 'border-brand-accent text-brand-accent' : 'border-transparent dark:text-slate-400 hover:text-brand-accent hover:border-brand-accent'}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6">
        {selectedArticle ? (
          <ArticleView article={selectedArticle} lang={lang} onBack={() => setSelectedArticle(null)} />
        ) : (
          <>
            {currentPage === 'home' && renderHome()}
            {currentPage === 'about' && renderAbout()}
            {currentPage === 'news' && renderNews()}
          </>
        )}
      </main>

      <footer className="mt-32 py-20 px-6 border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h2 className="font-serif text-4xl mb-6 dark:text-white">A LANTERNA</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              {t.footerText} Independent journalism founded in 1888, reborn in 2024 for the new generation.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent mb-6">Explore</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500">
              <li className="hover:text-brand-accent cursor-pointer" onClick={() => setCurrentPage('home')}>{t.home}</li>
              <li className="hover:text-brand-accent cursor-pointer" onClick={() => setCurrentPage('news')}>{t.news}</li>
              <li className="hover:text-brand-accent cursor-pointer" onClick={() => setCurrentPage('about')}>{t.about}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent mb-6">Connect</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500">
              <li className="hover:text-brand-accent cursor-pointer">Instagram</li>
              <li className="hover:text-brand-accent cursor-pointer">Twitter / X</li>
              <li className="hover:text-brand-accent cursor-pointer" onClick={() => setDarkMode(!darkMode)}>Toggle Theme</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-slate-50 dark:border-slate-950 flex justify-between items-center text-[10px] text-slate-300 uppercase tracking-widest">
          <span>© 2024 A Lanterna Digital. Portugal.</span>
          <div className="flex gap-6">
            <span className="hover:text-slate-900 cursor-pointer">Privacy</span>
            <span className="hover:text-slate-900 cursor-pointer">Terms</span>
          </div>
        </div>
      </footer>

      <CookieBanner />
    </div>
  );
};

export default App;
