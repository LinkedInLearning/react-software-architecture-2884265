import { useContext, useState } from 'react';
import { InitialDataContext } from './InitialDataContext';

export const useDataSSR = (resourceName, loadFunc) => {
	const context = useContext(InitialDataContext);
	const [data, setData] = useState(context._data[resourceName]);

	if (context._isServerSide) {
		context._requests.push(
			loadFunc().then(result => (context._data[resourceName] = result))
		);
	} else if (!data) {
		loadFunc().then(result => {
			setData(result);
			context._data[resourceName] = result;
		});
	}

	return data;
}
