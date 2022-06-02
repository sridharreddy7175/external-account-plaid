import OpinionatedRedux from 'opinionated-redux';
import defaultEpics from '../epics';
import defaultReducers from '../reducer';
import defaultInitialState, { State } from './initialState';

export function createStore(
  initialState = defaultInitialState,
  reducers: any = defaultReducers,
  epics: any = defaultEpics
) {
  if (!Object.keys(reducers).length) return undefined;
  return new OpinionatedRedux<State>(reducers, initialState, epics, {
    devTools: true,
    reduxObservable: {
      
    }
  }).store;
}

export * from './initialState';
