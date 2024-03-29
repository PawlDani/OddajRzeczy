// store.ts
import { createStore } from "easy-peasy";
import authModel, { AuthModel } from "./authModel";
// store.ts - for default export
import formModel, { FormModel } from "./formModel";

export interface StoreModel {
  auth: AuthModel;
  form: FormModel;
}

const storeModel: StoreModel = {
  auth: authModel,
  form: formModel,
};

const store = createStore(storeModel);

export default store;
