import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';
import DashboardActions from './DashboardActions';

const Dashboard = ({
	getCurrentProfile,
	auth: { user },
	profile: { loading, profile }
}: any) => {
	useEffect(() => {
		getCurrentProfile();
	}, []);
	return loading && profile == null ? (
		<Spinner />
	) : (
		<Fragment>
			<h1 className='large text-primary'>Dashboard</h1>
			<p className='lead'>
				<i className='fas fa-user'>Welcome {user && user.name}</i>
			</p>
			{profile !== null ? (
				<Fragment>
					<DashboardActions />
				</Fragment>
			) : (
				<Fragment>
					<p>You are yet to create a profile, please create one</p>
					<Link to='/create-profile' className='btn tbn-primary my-1'>
						Create Profile
					</Link>
				</Fragment>
			)}
		</Fragment>
	);
};

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = (state: any) => ({
	profile: state.profile,
	auth: state.auth
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
