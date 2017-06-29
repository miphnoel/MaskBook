import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import NavBar from './nav_bar';
import FriendRequests from './friend_requests';

const mapStateToProps = ({ session, modal }) => ({
  currentUser: session.currentUser,
  friendRequestsVisible: modal.friendRequests,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
