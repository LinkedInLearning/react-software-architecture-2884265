import React from 'react';

export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
		}
	}

	componentDidCatch(error, errorInfo) {
		console.log({ error, errorInfo });
	}

	static getDerivedStateFromError(error) {
		return { error };
	}

	render() {
		if (this.state.error) {
			return <p>Uh oh! Something went wrong</p>
		}

		return this.props.children;
	}
}