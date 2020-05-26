
type State = {
    count: number,
};

const state: State = {
    count: 0,
};

export default {
    state,
    reducers: {
        inc(state: State, payload: number) {
            state.count += payload;
            return state;
        }
    },
    effects: {
        async incAsync(payload: number, rootState) {
            await new Promise(resolve => setTimeout(resolve, 500));
            this.inc(payload);
        },
    },
};

