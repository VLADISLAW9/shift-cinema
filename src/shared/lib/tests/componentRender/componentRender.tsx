import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import '@/app/styles/index.scss';
import { TanStackQueryProvider } from '@/app/providers/TanStackQueryProvider'

export interface ComponentRenderOptions {
  route?: string;
}

interface TestProviderProps {
  children: ReactNode;
  options?: ComponentRenderOptions;
}

export const TestProvider = (props: TestProviderProps) => {
  const { children, options = {} } = props;
  const { route = '/' } = options;

  return (
    <MemoryRouter initialEntries={[route]}>
       <TanStackQueryProvider>
          <div className='app'>{children}</div>
       </TanStackQueryProvider>
    </MemoryRouter>
  );
};

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
  return render(<TestProvider options={options}>{component}</TestProvider>);
}
