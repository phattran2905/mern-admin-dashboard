import { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

export interface GlobalState {
	mode: PaletteMode;
}

const initialState: GlobalState = {
	mode: "dark",
};

export const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setMode: (state) => {
			state.mode = state.mode === "light" ? "dark" : "light";
		},
	},
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
