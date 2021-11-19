import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { useLogger } from 'react-use';
import FallbackException from './FallbackException';

type Props = {
	children: React.ReactNode;
};

const ErrorBoundary: React.FC<Props> = ({ children }: Props) => {
	useLogger('[ErrorBoundary]');

	return (
		<ReactErrorBoundary FallbackComponent={FallbackException}>
			{children}
		</ReactErrorBoundary>
	);
};

export default ErrorBoundary;
