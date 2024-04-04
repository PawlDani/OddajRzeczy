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
      // Assuming successful signup if reaching here
      const userEmail = userCredential.user.email;
      actions.setUser({ email: userEmail ? userEmail : "" });
      actions.setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error signing up:", error);
      // Set appropriate error based on the error thrown
      if ((error as any).code === "auth/email-already-in-use") {
        actions.setError("Email is already in use.");
      } else {
        actions.setError("Failed to sign up.");
      }
      // Re-throw the error for the caller to handle
      throw error;
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
      actions.setUser({
        email: userCredential.user.email ? userCredential.user.email : "",
      });
      actions.setError(null); // Clear any existing errors upon successful sign-in
    } catch (error) {
      console.error("Error signing in:", error);
      // Set an appropriate error message based on the error type
      actions.setError("Authentication failed. Please check your credentials.");
      throw new Error("Authentication failed."); // Important: Re-throw the error
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
