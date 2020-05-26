import { init, RematchRootState, RematchDispatch } from '@rematch/core';
import index from './models/index';

const models = {
    index,
};

const store = init({
    models
});

export default store;

export type Model = typeof models;
export type Store = typeof store;
export type Dispatch = RematchDispatch<Model>;
export type RootState = RematchRootState<Model>;