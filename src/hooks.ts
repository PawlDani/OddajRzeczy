import { createTypedHooks } from "easy-peasy";
import { StoreModel } from "./store";

const { useStoreActions, useStoreState } = createTypedHooks<StoreModel>();

export { useStoreActions, useStoreState };
