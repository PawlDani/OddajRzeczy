import { action, Action, Thunk, thunk } from "easy-peasy";
import { db } from "../config/firebase-config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth } from "../config/firebase-config";

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
  submitForm: thunk(async (actions, _, { getState }) => {
    const { formData } = getState();
    const user = auth.currentUser; // Get the currently logged-in user

    if (user) {
      try {
        await addDoc(collection(db, "submissions"), {
          ...formData,
          userId: user.uid, // Associate the form submission with the user's UID
          submittedAt: serverTimestamp(), // Use server timestamp for consistency
        });
        console.log("Form data submitted to Firestore");
        actions.resetForm(); // Reset the form on successful submission
      } catch (error) {
        console.error("Error submitting form data to Firestore:", error);
      }
    } else {
      console.error("No user logged in");
    }
  }),
  resetForm: action((state) => {
    (Object.keys(state.formData) as Array<keyof FormData>).forEach((key) => {
      if (Array.isArray(state.formData[key])) {
        (state.formData[key] as any) = [] as any;
      } else {
        (state.formData[key] as any) = "" as any;
      }
    });
  }),
};

export default formModel;
