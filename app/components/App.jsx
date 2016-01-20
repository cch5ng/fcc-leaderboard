//app/components/App.jsx

import React from 'react';
import ReactDOM from 'react-dom';
//import {Table, Column, Cell} from 'fixed-data-table';
var FixedDataTable = require('fixed-data-table');
const {Table, Column, Cell} = FixedDataTable;

 export default class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {content: props.initialContent, markdown: props.initialMd};
// 	}

// 	handleChange(event) {
// 		var md = marked(event.target.value);
// 		this.setState({content: event.target.value, markdown: md});
// 		$('#preview_iframe').contents().find('html').html(this.state.markdown);
// 	}

	render() {

		return (
			<div className="container-fluid">
				<div className="row">
					<nav className="navbar navbar-default">
						<div className="navbar-header">
							<a className="navbar-brand" href="#">
								<img src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg" alt="learn to code javascript at Free Code Camp logo" className="img-responsive nav-logo" />
							</a>
						</div>
					</nav>
				</div>

				<Table
					rowsCount={102}
					rowHeight={40}
					headerHeight={45}
					width={1000}
					height={3000}>
					<Column
						header={<Cell>#</Cell>}
						cell={<Cell>Count</Cell>}
						width={100}
					/>
					<Column
						header={<Cell>Camper Name</Cell>}
						cell={<Cell>Camper Name</Cell>}
						width={300}
					/>
					<Column
						header={<Cell>Points (Last 30 days)</Cell>}
						cell={<Cell>Points (Last 30 days)</Cell>}
						width={300}
					/>
					<Column
						header={<Cell>Points (Total)</Cell>}
						cell={<Cell>Points (Total)</Cell>}
						width={300}
					/>
				</Table>
			</div>
		);
	}
}

// App.propTypes = { initialContent: React.PropTypes.string };
// App.defaultProps = { initialContent: '', initialMd: ''};