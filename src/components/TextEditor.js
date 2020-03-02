import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

export default class TextEditor extends Component {
	
	state = {
		value: ''
	};

	onChange = ({ Value }) => {
		this.setState({Value});
	};

	render() {
		return (
			<Editor value={this.state.value} onChange={this.onChange} />
		);
	};
};

