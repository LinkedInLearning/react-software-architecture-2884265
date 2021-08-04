import { RecoilRoot } from 'recoil';
import { CounterButton } from './CounterButton';
import './App.css';

const App = () => {
	return (
		<RecoilRoot>
			<h1>State Management Example</h1>
			<CounterButton />
		</RecoilRoot>
	);
}

export default App;
