import { makeObservable, observable, action } from 'mobx';

export class Counter {
	numberOfClicks = 0;

	constructor() {
		makeObservable(this, {
			numberOfClicks: observable,
			increment: action,
		});
	}

	increment = amount => {
		this.numberOfClicks += amount;
	}
}