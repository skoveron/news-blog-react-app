export interface IArticle {
  source: {
    id: any;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
export interface ServerResponse<T> {
  articles: [T];
  status: string;
  totalResults: number;
}
