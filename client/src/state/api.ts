import { ProductResponse } from "@/types/Product";
import { UserResponse } from "@/types/User";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BASE_URL }),
	reducerPath: "adminApi",
	tagTypes: ["User", "Products"],
	endpoints: (build) => ({
		getUser: build.query<UserResponse, string>({
			query: (id: string) => `general/user/${id}`,
			providesTags: ["User"],
		}),
		getProducts: build.query<ProductResponse[], void>({
			query: () => `client/products`,
			providesTags: ["Products"],
		}),
	}),
});

export const { useGetUserQuery, useGetProductsQuery } = api;
