import { AnyAction } from "redux";
import { authTypes } from "../actions/auth";

interface IAuthState {
  accessToken?: string;
  expiresAt?: number;
  idToken?: string;
}
const initializeState = (): IAuthState => ({
  accessToken: undefined,
  expiresAt: undefined,
  idToken: undefined
});

export const auth = (
  state: IAuthState = initializeState(),
  action: AnyAction = { type: "no-op" }
): IAuthState => {
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
