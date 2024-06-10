import type { HTMLAttributes, ReactNode } from 'react';

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number;
  rows?: number;
  gap?: number;
  children?: ReactNode;
}

export const Grid = (props: GridProps) => {
  const { columns, rows, children, gap, ...otherProps } = props;

  const gridSetting = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gap: `${gap}px`
  };

  return (
    <div style={gridSetting} {...otherProps}>
      {children}
    </div>
  );
};
