import { configureStore, createSlice } from "@reduxjs/toolkit";

// const initialCounterState = { counter: 0, showCounter: true };

// const CounterSlice = createSlice({
//   name: "Counter",
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },

//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },

//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

const initialAuthState = { isAuthenticated: false };

const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },

    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { auth: AuthSlice.reducer },
});
// counter: CounterSlice.reducer,
// export const counterActions = CounterSlice.actions;
export const authActions = AuthSlice.actions;

export default store;
