import { authTypes } from "../actions/auth";

const initializeState = () => ({
  accessToken: undefined,
  idToken: undefined,
  expiresAt: undefined,
});

export const auth = (state = initializeState(), action = {}) => {
  switch (action.type) {
    case authTypes.SET_SESSION:
      return action.payload;
    case authTypes.LOGOUT:
      return initializeState();
    default:
      return state;
  }
};

export default auth;
