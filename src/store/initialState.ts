import { HashMap, AccountDetails } from '../types';

export interface State {
  linkToken: HashMap;
  data: AccountDetails;
  externalAccount: HashMap;
  env: HashMap;
  userLogin: HashMap;
  balInfo: HashMap;
}

const initialState: State = {
  linkToken: {},
  data: { accessToken: '', status: '' },
  externalAccount: {},
  env: {},
  userLogin: {},
  balInfo: {}
};

export default initialState;
