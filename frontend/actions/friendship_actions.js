import * as ApiUtil from '../util/friendship_api_util';

export const RECEIVE_FRIEND_REQUESTS = "RECEIVE_FRIEND_REQUESTS"
export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP"
export const RECEIVE_FRIENDSHIPS = "RECEIVE_FRIENDSHIPS"
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP"

export const receiveFriendRequests = (friendRequests) => ({
  type: RECEIVE_FRIEND_REQUESTS,
  friendRequests
});

export const receiveFriendship = (friendship) => ({
  type: RECEIVE_FRIENDSHIP,
  friendship
});

export const receiveFriendships = (friendships) => ({
  type: RECEIVE_FRIENDSHIPS,
  friendships
});

export const removeFriendship = (friendshipId) => ({
  type: REMOVE_FRIENDSHIP,
  friendshipId
});

export const fetchFriendRequests = () => (dispatch) => {
  return ApiUtil.fetchFriendRequests()
    .then(friendRequests => dispatch(receiveFriendRequests(friendRequests)));
}

export const fetchFriendship = (id) => (dispatch) => {
  return ApiUtil.fetchFriendship(id)
    .then(friendship => dispatch(receiveFriendship(friendship)));
}

export const fetchFriendships = (id) => (dispatch) => {
  return ApiUtil.fetchFriesndships(id)
    .then(friendships => dispatch(receiveFriendships(friendships)));
}

export const createFriendRequest = (receiverId) => (dispatch) => {
  return ApiUtil.createFriendRequest(receiverId)
  .then(friendship => dispatch(receiveFriendship(friendship)));
}

export const updateFriendRequest = (friendship) => (dispatch) => {
  return ApiUtil.updateFriendRequest(friendship)
  .then(friendship => dispatch(receiveFriendship(friendship)));
}

export const unfriend = (id) => (dispatch) => {
  return ApiUtil.deleteFriend(id)
    .then(id => dispatch(removeFriendship(id)));
}
