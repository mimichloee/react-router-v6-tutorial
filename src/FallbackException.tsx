import { FallbackProps } from 'react-error-boundary';

const FallbackException = ({ resetErrorBoundary }: FallbackProps) => {
	return (
		<div>
			<h1>돔황챠~~~~!</h1>
			<button onClick={resetErrorBoundary}>리튜라이</button>
		</div>
	);
};

export default FallbackException;