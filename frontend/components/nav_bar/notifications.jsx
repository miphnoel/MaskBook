import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: false, loading: true };

    this.openDropdown = this.openDropdown.bind(this);
  }

  openDropdown(e) {
    e.preventDefault();
    // this.props.fetchFriendRequests().then
    this.setState({ loading: false });
    this.setState({ show: true });
  }

  // handleResponse(sender_id, request_id, status) {
  //   return e => {
  //     this.props.updateFriendRequest({id: request_id, sender_id, status })
  //       .then(() => this.props.fetchFriendRequests())
  //   }
  // }

  render() {
    // let requests;
    // if (this.props.friendRequests.length < 1) {
    //   requests = <li className="no-requests">No pending requests</li>
    // } else {
    //   requests = this.props.friendRequests.map(request => (
    //     <li key={request.id}>
    //       <div>
    //         <img src={request.thumb} />
    //         <Link to={`api/users/${request.sender_id}`}>{request.sender_name}</Link>
    //       </div>
    //       <div>
    //         <button className="save-button" onClick={this.handleResponse(
    //             request.sender_id, request.id, "approved"
    //           )}>Confirm</button>
    //           <button className="delete-button" onClick={this.handleResponse(
    //             request.sender_id, request.id, "denied"
    //           )}>Delete Request</button>
    //       </div>
    //     </li>
    //   ));
    // }

    if (!this.state.show) {
      return (
        <i className="fa fa-globe fa-lg" aria-hidden="true"
          onClick={this.openDropdown}></i>
      );
    } else {
      return (
        <div >
          <i className="fa fa-globe fa-lg white" aria-hidden="true"
           onClick={() => this.setState({ show: false })}></i>
          <div className='drop-down'>
            <div className="drop-down-header">
              <span>Notifications</span>
            </div>
            <ul className="request-list">
              {this.state.loading
                ? <div className="loader"></div>
                : <li className="no-items">No notifications</li>
              }
            </ul>
          </div>
          <div className='dropdown-wrapper'
            onClick={() => this.setState({ show: false })}></div>
        </div>
      );
    }

  }
}

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);
