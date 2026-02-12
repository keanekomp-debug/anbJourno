
import { Category, Article, TeamMember } from './types';

export const ARTICLES_DATA: Article[] = [
  {
    id: '1',
    category: Category.ENVIRONMENT,
    author: 'Mateus Silva',
    date: '15 Março, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200',
    isFeatured: true,
    pt: {
      title: 'A Revolução Solar de Lisboa: Porto Salvo Lidera a Transição',
      subtitle: 'Uma iniciativa universitária está a transformar telhados residenciais numa rede elétrica descentralizada.',
      content: [
        'Nas colinas ensolaradas de Porto Salvo, está a decorrer uma revolução silenciosa. Enquanto os debates políticos nacionais continuam, um grupo de estudantes do Técnico já está a implementar o futuro.',
        'O projeto começou como uma tese de mestrado, mas evoluiu rapidamente para um movimento comunitário. Através da instalação de sensores IoT de baixo custo, os residentes podem acompanhar a produção de energia em tempo real.',
        'Dados sugerem que se 30% dos telhados de Lisboa fossem utilizados desta forma, a cidade poderia reduzir a sua dependência da rede nacional em quase 12% durante as horas de ponta.'
      ]
    },
    en: {
      title: 'Lisbon’s Solar Revolution: Porto Salvo Leading the Way',
      subtitle: 'A student-led initiative is turning residential rooftops into a decentralized power grid.',
      content: [
        'In the sunny hills of Porto Salvo, a silent revolution is taking place. While national policy debates continue, a group of university students is already implementing the future.',
        'The project began as a master\'s thesis but quickly evolved into a community movement. By installing low-cost IoT sensors, residents can track energy production in real-time.',
        'Data suggests that if 30% of Lisbon’s rooftops were utilized this way, the city could reduce its dependence on the national grid by nearly 12% during peak hours.'
      ]
    }
  },
  {
    id: '2',
    category: Category.CREATIVE,
    author: 'Beatriz Costa',
    date: '12 Março, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1518005020451-9ca9436531ee?auto=format&fit=crop&q=80&w=1200',
    pt: {
      title: 'O Renascimento Alentejano: Barro e IA Generativa',
      subtitle: 'Jovens artesãos de Redondo usam machine learning para desenhar padrões que homenageiam a cerâmica do século XVIII.',
      content: [
        'A olaria é o coração de Redondo há séculos. Tiago Mendes, um engenheiro de software de 24 anos, regressou à oficina do seu avô com uma visão diferente.',
        'Tiago desenvolveu uma rede neuronal treinada em milhares de designs históricos de azulejos portugueses. A IA sugere geometrias que mantêm a alma estética da região.',
        'Esta fusão de herança e tecnologia oferece um modelo para a revitalização rural. Prova que o "Novo" não tem de substituir o "Velho".'
      ]
    },
    en: {
      title: 'The Alentejo Renaissance: Pottery Meets Generative AI',
      subtitle: 'Young artisans in Redondo are using machine learning to design patterns honoring 18th-century ceramics.',
      content: [
        'Pottery has been the heart of Redondo for centuries. Tiago Mendes, a 24-year-old software engineer, returned to his grandfather’s workshop with a different vision.',
        'Tiago developed a neural network trained on thousands of historical Portuguese tile designs. The AI suggests geometries that maintain the aesthetic soul of the region.',
        'This fusion of heritage and technology offers a blueprint for rural revitalization. It proves that the "New" doesn’t have to replace the "Old".'
      ]
    }
  },
  {
    id: '3',
    category: Category.TECH,
    author: 'João Pereira',
    date: '10 Março, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
    pt: {
      title: 'Surto de Código em Coimbra: O Próximo Unicórnio',
      subtitle: 'O mundo competitivo mas colaborativo das incubadoras lideradas por estudantes.',
      content: [
        'Coimbra é famosa pelas capas e batinas, mas hoje em dia, muitos trocam o traje tradicional por hoodies e teclados ergonómicos.',
        'A cidade está a testemunhar um surto de startups de DeepTech focadas em tudo, desde criptografia quântica a logística sustentável.',
        'Com um custo de vida mais baixo e uma alta densidade de mentes brilhantes, a cidade está a tornar-se efetivamente o departamento de R&D de Portugal.'
      ]
    },
    en: {
      title: 'Coimbra’s Coding Surge: The Next Unicorn',
      subtitle: 'The competitive yet collaborative world of student-led incubators.',
      content: [
        'Coimbra is famous for its academic traditions, but these days, many are trading traditional robes for hoodies and ergonomic keyboards.',
        'The city is witnessing a surge in DeepTech startups focusing on everything from quantum encryption to sustainable logistics.',
        'With a lower cost of living and a high density of brilliant minds, the city is effectively becoming the R&D department of Portugal.'
      ]
    }
  }
];

export const EDITORIAL_TEAM: TeamMember[] = [
  {
    name: 'Leonor Martins',
    role: 'Editora-Chefe / Editor-in-Chief',
    image: 'https://i.pravatar.cc/150?u=leonor',
    bio: {
      pt: 'Jornalista focada em impacto social e o futuro da democracia em Portugal.',
      en: 'Journalist focused on social impact and the future of democracy in Portugal.'
    }
  },
  {
    name: 'Ricardo Santos',
    role: 'Futuros e Tech / Future & Tech',
    image: 'https://i.pravatar.cc/150?u=ricardo',
    bio: {
      pt: 'Entusiasta de tecnologia e sustentabilidade urbana.',
      en: 'Tech enthusiast and urban sustainability advocate.'
    }
  },
  {
    name: 'Inês Ferreira',
    role: 'Cultura e Artes / Culture & Arts',
    image: 'https://i.pravatar.cc/150?u=ines',
    bio: {
      pt: 'Explora a intersecção entre tradição e modernidade nas artes visuais.',
      en: 'Explores the intersection between tradition and modernity in visual arts.'
    }
  }
];

export const UI_STRINGS = {
  pt: {
    home: 'Início',
    about: 'Sobre',
    news: 'Notícias',
    write: 'Escreva Connosco',
    subscribe: 'Subscrever',
    trending: 'Em Destaque',
    footerText: 'Um jornal independente gerido pela juventude para o futuro de Portugal.',
    editorialTeam: 'Equipa Editorial',
    citizenJournalism: 'Jornalismo de Cidadão',
    citizenText: 'Tens uma história? Queres mudar o mundo com as tuas palavras? Junta-te à nossa redação aberta.',
    latestNews: 'Última Hora',
    back: 'Voltar',
    claps: 'Aplausos'
  },
  en: {
    home: 'Home',
    about: 'About',
    news: 'News',
    write: 'Write for Us',
    subscribe: 'Subscribe',
    trending: 'Trending',
    footerText: 'An independent newspaper run by youth for the future of Portugal.',
    editorialTeam: 'Editorial Team',
    citizenJournalism: 'Citizen Journalism',
    citizenText: 'Got a story? Want to change the world with your words? Join our open newsroom.',
    latestNews: 'Latest Takes',
    back: 'Back',
    claps: 'Claps'
  }
};
