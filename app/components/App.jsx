//app/components/App.jsx

import React from 'react';
import ReactDOM from 'react-dom';
//import {Table, Column, Cell} from 'fixed-data-table';
var FixedDataTable = require('fixed-data-table');
const {Table, Column, Cell} = FixedDataTable;

var urlRecent = "http://fcctop100.herokuapp.com/api/fccusers/top/recent";
var urlTotal = "http://fcctop100.herokuapp.com/api/fccusers/top/alltime";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {data:[], url: urlRecent};
	}

	loadLeaders() {
		$.ajax({
			url: this.state.url,
			datatype: 'json',
			success: (data) => {
				this.setState({data: data});
			},
			error: (xhr, status, err) => {
				console.error(this.props.url, status, err.toString());
			}
		})
	}

	componentDidMount() {
		this.loadLeaders();
//should this be polling?
	}

//TODO click handler update the ajax url based on which leaderboard type of selected; 
//use state to store current url

	handleClickMonthPoints(event) {
		event.preventDefault();
		console.log('recent points clicked');
		this.setState({url: urlRecent}, () => {
			console.log('url: ' + this.state.url);
			this.loadLeaders();
		});
	}

	handleClickTotalPoints(event) {
		event.preventDefault();
		console.log('total points clicked');
		this.setState({url: urlTotal}, () => {
			console.log('url: ' + this.state.url);
			this.loadLeaders();
		});
	}

	render() {

		return (
			<div className="container-fluid" >
				<div className="row">
					<nav className="navbar navbar-default">
						<div className="navbar-header">
							<a className="navbar-brand" href="#">
								<img src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg" alt="learn to code javascript at Free Code Camp logo" className="img-responsive nav-logo" />
							</a>
						</div>
					</nav>
				</div>

				<Table data={this.state.data}
					rowsCount={this.state.data.length}
					rowHeight={40}
					headerHeight={45}
					width={1000}
					height={4050}>
					<Column
						header={<Cell>#</Cell>}
						cell={props => (
							<Cell {...props}>
								{props.rowIndex + 1}
							</Cell>
						)}
						width={100}
					/>
					<Column
						header={<Cell>Camper Name</Cell>}
						cell={props => (
							<Cell {...props}>
								<img src={this.state.data[props.rowIndex].img} alt="camper avatar" className="avatar"/> {this.state.data[props.rowIndex].username}
							</Cell>
						)}
						width={300}
					/>
					<Column
						header={<Cell onClick={this.handleClickMonthPoints.bind(this)} >Points (Last 30 days)</Cell>}
						cell={props => (
							<Cell {...props}>
							  {this.state.data[props.rowIndex].recent}
							</Cell>
						)}
						width={300}
					/>
					<Column
						header={<Cell onClick={this.handleClickTotalPoints.bind(this)} >Points (Total)</Cell>}
						cell={props => (
							<Cell {...props}>
							  {this.state.data[props.rowIndex].alltime}
							</Cell>
						)}
						width={300}
					/>
				</Table>
			</div>
		);
	}
}

// App.propTypes = { initialContent: React.PropTypes.string };
// App.defaultProps = { initialContent: '', initialMd: ''};