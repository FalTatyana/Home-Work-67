import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: "",
};

const Password = "1111";

const keybordSlice = createSlice({
  name: "keyboard",
  initialState,
  reducers: {
    addNum: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },

    deleteNum: (state) => {
      state.value = state.value.slice(0, -1);
    },
    enterPassword: (state) => {
      if (state.value.length < 4 || state.value.length > 4) {
        toast.error("Enter 4 symbols");
      } else if (Password === state.value) {
        console.log("password true");
      } else if (Password !== state.value) {
        console.log("password false");
      }
    },
  },
});

export const counterReducer = keybordSlice.reducer;
export const { addNum, deleteNum, enterPassword } = keybordSlice.actions;
