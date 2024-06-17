import { ReactNode } from 'react';
import '@/app/styles/index.scss';
import { render } from '@testing-library/react'
import { TanStackQueryProvider } from '@/app/providers/TanStackQueryProvider'


interface TestProviderProps {
	children: ReactNode;
}

export function TestProvider(props: TestProviderProps) {
	const {children} = props

	return (
		<TanStackQueryProvider>
			<div className='app'>{children}</div>
		</TanStackQueryProvider>
	);
}

export function componentRender(
    component: ReactNode,
) {
    return render(<TestProvider >{component}</TestProvider>);
}