import { createStore } from "easy-peasy";
import authModel, { AuthModel } from "./authModel";

export interface StoreModel {
  auth: AuthModel;
}

const storeModel: StoreModel = {
  auth: authModel,
};

const store = createStore(storeModel);

export default store;
