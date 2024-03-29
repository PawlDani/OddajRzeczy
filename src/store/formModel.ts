import { action, Action, Thunk, thunk } from "easy-peasy";
import { submitFormData } from "../services/mockServices";

export interface FormData {
  selectedItem: string;
  numberOfBags: string;
  location: string;
  helpGroups: string[];
  specificLocation: string;
  street: string;
  city: string;
  postCode: string;
  phone: string;
  date: string;
  time: string;
  note: string;
}

export interface FormModel {
  formData: FormData;
  setSelectedItem: Action<FormModel, string>;
  setNumberOfBags: Action<FormModel, string>;
  setLocation: Action<FormModel, string>;
  setHelpGroups: Action<FormModel, string[]>;
  setSpecificLocation: Action<FormModel, string>;
  // New actions for step four
  setStreet: Action<FormModel, string>;
  setCity: Action<FormModel, string>;
  setPostCode: Action<FormModel, string>;
  setPhone: Action<FormModel, string>;
  setDate: Action<FormModel, string>;
  setTime: Action<FormModel, string>;
  setNote: Action<FormModel, string>;
  submitForm: Thunk<FormModel>;
  resetForm: Action<FormModel>;
}

const formModel: FormModel = {
  formData: {
    selectedItem: "",
    numberOfBags: "",
    location: "",
    helpGroups: [],
    specificLocation: "",
    // Initialize new fields as empty
    street: "",
    city: "",
    postCode: "",
    phone: "",
    date: "",
    time: "",
    note: "",
  },
  setSelectedItem: action((state, selectedItem) => {
    state.formData.selectedItem = selectedItem;
  }),
  setNumberOfBags: action((state, numberOfBags) => {
    state.formData.numberOfBags = numberOfBags;
  }),
  setLocation: action((state, location) => {
    state.formData.location = location;
  }),
  setHelpGroups: action((state, helpGroups) => {
    state.formData.helpGroups = helpGroups;
  }),
  setSpecificLocation: action((state, specificLocation) => {
    state.formData.specificLocation = specificLocation;
  }),
  // Implement new actions
  setStreet: action((state, street) => {
    state.formData.street = street;
  }),
  setCity: action((state, city) => {
    state.formData.city = city;
  }),
  setPostCode: action((state, postCode) => {
    state.formData.postCode = postCode;
  }),
  setPhone: action((state, phone) => {
    state.formData.phone = phone;
  }),
  setDate: action((state, date) => {
    state.formData.date = date;
  }),
  setTime: action((state, time) => {
    state.formData.time = time;
  }),
  setNote: action((state, note) => {
    state.formData.note = note;
  }),
  submitForm: thunk(async (actions, payload, { getState }) => {
    const { formData } = getState();
    await submitFormData(formData);
    console.log("Form data after submission:", formData);
    actions.resetForm();
  }),
  resetForm: action((state) => {
    // Reset all fields to their initial state
    const formData: any = state.formData;
    Object.keys(formData).forEach((key) => {
      formData[key] = "";
    });
    state.formData.helpGroups = []; // Ensure helpGroups is reset to an empty array
  }),
};
// Temporary mock implementation to simulate form data submission
export const submitFormData = async (formData: FormData) => {
  console.log("Mock submitting form data:", formData);
  // Simulate a network request delay
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Form Data Submitted:", formData);
      resolve(formData);
    }, 1000)
  );
};

export default formModel;
