export interface ISEO {
  title: string;
  description: string;
  type?: string;
  name?: string;
  canonical?: string;
  image?: string;
  schemaMarkup?: Record<string, unknown>;
}
