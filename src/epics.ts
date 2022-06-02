import { fetchAccessTokenEpic } from './modules/accessToken/epics';
import { fetchLinkTokenEpic } from './modules/link/epics';

import { fetchExternalAccountEpic } from './modules/externalAccount/epics';
import { fetchEnvEpic } from './modules/envData/epics';
import { fetchLoginEpic } from './modules/login/epics';

export default [
  // fetchAccessTokenEpic,
  // fetchEnvEpic,
  fetchLinkTokenEpic,
  fetchExternalAccountEpic,
  fetchLoginEpic
];

