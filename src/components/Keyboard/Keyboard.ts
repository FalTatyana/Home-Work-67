import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface CounterState {
  value: string;
  status: boolean
}

const initialState: CounterState = {
  value: "",
  status: null as boolean | null
};

const Password = "1111";

const keybordSlice = createSlice({
  name: "keyboard",
  initialState,
  reducers: {
    addNum: (state, action: PayloadAction<string>) => {
      if (state.value.length >= 4) return;
      state.value += action.payload;
    },

    deleteNum: (state) => {
      state.value = state.value.slice(0, -1);
    },
    enterPassword: (state) => {
      if (state.value.length < 4) {
        toast.info("Enter 4 symbols");
        return;
      } else if (Password === state.value) {
        state.status = true;
        toast.success("Succsess Granted");
      } else {
        state.status = false;
        toast.error("Success Denied");
      }
      state.value = "";
    },
  },
});

export const counterReducer = keybordSlice.reducer;
export const { addNum, deleteNum, enterPassword } = keybordSlice.actions;
