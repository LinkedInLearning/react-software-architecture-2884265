import { RecoilRoot } from 'recoil';
import { CounterButton } from './CounterButton';
import { DisplayCount } from './DisplayCount';
import './App.css';

const App = () => {
	return (
		<RecoilRoot>
			<DisplayCount />
			<h1>State Management Example</h1>
			<CounterButton />
		</RecoilRoot>
	);
}

export default App;
