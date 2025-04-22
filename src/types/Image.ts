export interface IImage {
  id?: string;
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  file?: File;
  featured?: boolean;
}
