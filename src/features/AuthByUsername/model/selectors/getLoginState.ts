import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginState = (state: StateSchema) => state?.login;

export const getLoginStateUsername = (state: StateSchema) => state?.login?.username || '';
export const getLoginStatePassword = (state: StateSchema) => state?.login?.password || '';
export const getLoginStateLoading = (state: StateSchema) => state?.login?.isLoading || false;
export const getLoginStateError = (state: StateSchema) => state?.login?.error;
