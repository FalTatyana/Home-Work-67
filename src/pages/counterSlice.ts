import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  loading: boolean;
}

const initialState: CounterState = {
  value: 0,
  loading: false
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByNum: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrementByNum: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    }
  }
});

export const counterReducer = counterSlice.reducer;
export const { increment, decrement, incrementByNum, decrementByNum } = counterSlice.actions;