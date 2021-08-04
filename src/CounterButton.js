import { useRecoilState } from 'recoil';
import { counterState } from './counterState';
import { incrementByState } from './incrementByState';

export const CounterButton = () => {
	const [clicksData, setClicksData] = useRecoilState(counterState);
	const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

	return (
		<>
		<p>You have clicked the button {clicksData.length} times.</p>
		<label>
			Increment By:
			<input
				value={incrementBy}
				onChange={e => setIncrementBy(Number(e.target.value))}
				type="number" />
		</label>
		<button
			onClick={() => setClicksData([...clicksData, { timestamp: Date.now(), amount: incrementBy }])}
		>Click</button>
		</>
	)
}