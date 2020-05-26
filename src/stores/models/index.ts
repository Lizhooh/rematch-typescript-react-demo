

export default {
    state: {
        count: 0,
    },
    reducers: {
        inc(state, payload) {
            state.count += payload;
            return state;
        }
    },
    effects: {
        async incAsync(payload, rootState) {
            await new Promise(resolve => setTimeout(resolve, 500));
            this.inc(payload);
        },
    },
};

