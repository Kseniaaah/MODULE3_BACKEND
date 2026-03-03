import { request } from '../utils/requset';

export const removePostAsync = (id) => () => request(`/posts/${id}`, 'DELETE');
