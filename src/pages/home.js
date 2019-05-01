import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import PropTypes from 'prop-types';

import Scream from '../components/Scream';
import Profile from '../components/Profile';

import { connect } from 'react-redux';
import { getScream } from '../redux/actions/dataActions';

class Home extends Component {
	state = {
		screams: null
	};
	componentDidMount() {
		axios
			.get('/screams')
			.then((res) => {
				this.setState({
					screams: res.data
				});
			})
			.catch((err) => console.log(err));
	}
	render() {
		let recentScreamsMarkup = this.state.screams ? (
			this.state.screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
		) : (
			<p>Loading...</p>
		);
		return (
			<Grid container spacing={16}>
				<Grid item sm={8} xs={12}>
					{recentScreamsMarkup}
				</Grid>
				<Grid item sm={4} xs={12}>
					<Profile />
				</Grid>
			</Grid>
		);
	}
}

export default Home;
