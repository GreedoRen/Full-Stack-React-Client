import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Scream from '../components/scream/Scream';
import Profile from '../components/profile/Profile';

import { connect } from 'react-redux';
import { getScream } from '../redux/actions/dataActions';

class Home extends Component {
	componentDidMount() {
		this.props.getScream();
	}
	render() {
		const { screams, loading } = this.props.data;
		let recentScreamsMarkup = !loading ? (
			screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
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

Home.propTypes = {
	getScream: PropTypes.func.isRequired,
	data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	data: state.data
});

export default connect(mapStateToProps, { getScream })(Home);
