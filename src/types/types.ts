export interface INavItemList {
  label: string;
  href: string;
  children?: INavItemList[];
}

export interface IServieceListItem {
  number: string;
  title: string;
  description: string;
}

export interface IProjectListItem {
  img: string | null;
  title: string;
  loc: string;
}

export interface IFeatureListItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface IFAQItem {
  question: string;
  answer: string;
  open?: boolean;
}
