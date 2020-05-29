import { init, RematchRootState, RematchDispatch } from '@rematch/core';

import index from './models/index';
import menu from './models/menu';
import navigate from './models/navigate';

const models = {
    index,
    menu,
    navigate,
};

const store = init({
    models,
});

export default store;

export type Model = typeof models;
export type Store = typeof store;
export type Dispatch = RematchDispatch<Model>;
export type State = RematchRootState<Model>;

