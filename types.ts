
export enum Category {
  ENVIRONMENT = 'Ambiente',
  CREATIVE = 'Cultura',
  STEM = 'Ciência',
  EDUCATION = 'Educação',
  TECH = 'Tecnologia',
  GLOBAL = 'Mundo'
}

export interface LocalizedContent {
  title: string;
  subtitle: string;
  content: string[];
}

export interface Article {
  id: string;
  category: Category;
  author: string;
  date: string;
  imageUrl: string;
  isFeatured?: boolean;
  pt: LocalizedContent;
  en: LocalizedContent;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: { pt: string; en: string };
  image: string;
}
