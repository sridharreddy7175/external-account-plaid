import { ReducersMapObject } from 'redux';
import { State } from './store/index';
import { accessToken as data } from './modules/accessToken/reducers';
import { linkToken } from './modules/link/reducers'
import { env } from './modules/envData/reducers';
import { externalAccount } from './modules/externalAccount/reducers';
import { userLogin } from './modules/login/reducers';



export default { data,env,linkToken,externalAccount,userLogin} as ReducersMapObject<State>;
