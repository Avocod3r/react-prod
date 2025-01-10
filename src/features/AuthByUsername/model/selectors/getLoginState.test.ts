import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
  getLoginStateError, getLoginStateLoading, getLoginStatePassword, getLoginStateUsername,
} from './getLoginState';

const state: DeepPartial<StateSchema> = {
  login: {
    username: 'Avocado',
    password: '123456',
    error: 'ERROR',
    isLoading: true,
  },
};

const undefinedState: DeepPartial<StateSchema> = {
};

describe('getLoginState', () => {
  test('getLoginStateError should return an error', () => {
    expect(getLoginStateError(state as StateSchema)).toEqual('ERROR');
  });
  test('getLoginStateLoading should return an boolean', () => {
    expect(getLoginStateLoading(state as StateSchema)).toBeTruthy();
  });
  test('getLoginStateUsername should return a string', () => {
    expect(getLoginStateUsername(state as StateSchema)).toEqual('Avocado');
  });
  test('getLoginStatePassword should return a string', () => {
    expect(getLoginStatePassword(state as StateSchema)).toEqual('123456');
  });
  test('getLoginStateError should return an undefined', () => {
    expect(getLoginStateError(undefinedState as StateSchema)).toEqual(undefined);
  });
});
