import { createStore, action, Action } from "easy-peasy";
import { createTypedHooks } from "easy-peasy";

interface country {
  name: string;
  population: string | number;
  area: string | number;
  review: string;
  denesity: string | number;
  id: string | number;
}

interface AppStoreModel {
  countryList: country[];
  isEdit: boolean;
  updateCountry: country[];
  addNewCountry: Action<AppStoreModel, country>;
  removeCountry: Action<AppStoreModel, string>;
  editCountry: Action<AppStoreModel, country>;
}

const AppStore: AppStoreModel = {
  countryList: [
    {
      name: "india",
      population: "123456789",
      area: "4567898",
      review: "good",
      denesity: "34567890",
      id: "00187",
    },
    {
      name: "China",
      population: "123456789",
      area: "4567898",
      review: "good",
      denesity: "34567890",
      id: "01807",
    },
    {
      name: "india",
      population: "123456789",
      area: "4567898",
      review: "good",
      denesity: "34567890",
      id: "01879",
    },
  ],
  isEdit: false,
  updateCountry: [],

  addNewCountry: action((state, payload) => {
    state.countryList.push(payload);
  }),

  removeCountry: action((state, payload) => {
    state.countryList = state.countryList.filter(
      (val: any) => val.id !== payload
    );
  }),

  editCountry: action((state, payload) => {
      state.isEdit = true      
      // state.updateCountry.push(payload) 
  }),
};

const RootStore = {
  AppStore,
};

type TRootStore = typeof RootStore;

export default createStore(RootStore);

const typedHooks = createTypedHooks<TRootStore>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
