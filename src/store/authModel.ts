import { action, Action, thunk, Thunk } from "easy-peasy";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase-config";

interface User {
  email: string;
}

export interface AuthModel {
  user: User | null; // Simplified user state
  loading: boolean; // Loading state for async operations
  error: string | null; // Error state for handling errors
  setUser: Action<AuthModel, User | null>;
  setLoading: Action<AuthModel, boolean>;
  setError: Action<AuthModel, string | null>;
  signUp: Thunk<AuthModel, { email: string; password: string }>;
  signIn: Thunk<AuthModel, { email: string; password: string }>;
  signOut: Thunk<AuthModel>;
}

const authModel: AuthModel = {
  user: null,
  loading: false,
  error: null,
  setUser: action((state, payload) => {
    state.user = payload;
  }),
  setLoading: action((state, loading) => {
    state.loading = loading;
  }),
  setError: action((state, error) => {
    state.error = error;
  }),
  signUp: thunk(async (actions, { email, password }) => {
    actions.setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Check for null email
      if (userCredential.user.email) {
        actions.setUser({ email: userCredential.user.email });
        actions.setError(null);
      } else {
        actions.setError("User email is null.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      actions.setError("Failed to sign up.");
    } finally {
      actions.setLoading(false);
    }
  }),
  signIn: thunk(async (actions, { email, password }) => {
    actions.setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user.email) {
        actions.setUser({ email: userCredential.user.email });
        actions.setError(null);
      } else {
        actions.setError("User email is null.");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      actions.setError("Failed to sign in.");
    } finally {
      actions.setLoading(false);
    }
  }),
  signOut: thunk(async (actions) => {
    actions.setLoading(true);
    try {
      await signOut(auth);
      actions.setUser(null);
      actions.setError(null);
    } catch (error) {
      console.error("Error signing out:", error);
      actions.setError("Failed to sign out.");
    } finally {
      actions.setLoading(false);
    }
  }),
};

export default authModel;
