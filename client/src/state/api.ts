import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BASE_URL }),
	reducerPath: "adminApi",
	tagTypes: ["User"],
	endpoints: (build) => ({
		getUser: build.query({
			query: (id) => ({
				url: `general/user/${id}`,
			}),
			providesTags: ["User"],
		}),
	}),
});

export const { useGetUserQuery } = api;
