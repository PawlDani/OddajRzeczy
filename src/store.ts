// src/store.ts
import { createStore, action, Action } from "easy-peasy";

interface StoreModel {
  count: number;
  increment: Action<StoreModel>;
}

const model: StoreModel = {
  count: 0,
  increment: action((state) => {
    state.count += 1;
  }),
};

const store = createStore(model);

export default store;
