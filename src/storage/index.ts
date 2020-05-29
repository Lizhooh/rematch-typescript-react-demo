
const local = window.localStorage;

export default {
    get(key) {
        return local.getItem(key);
    },
    set(key, val) {
        local.setItem(key, val);
    },
    remove(key) {
        local.removeItem(key);
    }
};