import { CounterButton } from './CounterButton';
import './App.css';
import { CounterProvider } from './CounterProvider';

const App = () => {
	return (
		<CounterProvider>
			<h1>State Management Example</h1>
			<CounterButton />
		</CounterProvider>
	);
}

export default App;
