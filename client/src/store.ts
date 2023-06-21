import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "@/state";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./state/api";

export const store = configureStore({
	reducer: {
		global: globalReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
