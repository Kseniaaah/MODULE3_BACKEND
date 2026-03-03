import { ACTION_TYPE } from "./action-type";
import { request } from "../utils/requset";

export const logout = () => {
	request('/logout', 'POST');

	return {
		type: ACTION_TYPE.LOGOUT,
	};
};
