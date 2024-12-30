import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  currentUser: { name: string; email: string; isLogged: boolean };
}

const initialState: UserState = {
  currentUser: { name: "", email: "", isLogged: false },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state: any,
      action: PayloadAction<{ name: string; email: string; isLogged: boolean }>
    ) => {
      state.currentUser = action.payload;
    },
    logout: (state: any) => {
      state.currentUser = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
