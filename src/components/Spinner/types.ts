export type ISpinnerColor =
  | 'primary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'light'
  | 'dark';

export interface ISpinner {
  color?: ISpinnerColor;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}
