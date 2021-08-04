import { useState } from 'react';
import { CounterContext } from './CounterContext';

export const CounterProvider = ({ children }) => {
	const [numberOfClicks, setNumberOfClicks] = useState(0);

	const increment = incrementBy => {
		setNumberOfClicks(numberOfClicks + incrementBy);
	}

	return (
		<CounterContext.Provider value={{ numberOfClicks, increment }}>
			{children}
		</CounterContext.Provider>
	)
}