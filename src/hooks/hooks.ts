import { createTypedHooks } from "easy-peasy";
import { StoreModel } from "../store/store";

const { useStoreActions, useStoreState } = createTypedHooks<StoreModel>();

export { useStoreActions, useStoreState };
