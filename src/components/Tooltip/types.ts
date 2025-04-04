export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  contentPosition?: 'top' | 'right' | 'left' | 'bottom';
  align?: 'center' | 'start' | 'end';
  className?: string;
}
