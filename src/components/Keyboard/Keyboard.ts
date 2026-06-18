import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: ''
};

const counterSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    addNum: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
      console.log(state);
      
    },

    deleteNum: (state) => {
      state.value = state.value.slice(0, -1);
    },

    clear: (state) => {
      state.value = '';
    },

    enterPassword: (state) => {
      console.log("Entered:", state.value);
    }
  }
});

export const counterReducer = counterSlice.reducer;
export const {
  addNum,
  deleteNum,
  clear,
  enterPassword
} = counterSlice.actions;