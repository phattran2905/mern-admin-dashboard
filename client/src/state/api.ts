import { ProductResponse } from "@/types/Product";
import { TransactionsResponse } from "@/types/Transaction";
import { UserResponse } from "@/types/User";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BASE_URL }),
	reducerPath: "adminApi",
	tagTypes: ["User", "Products", "Customers", "Transactions", "Geography"],
	endpoints: (build) => ({
		getUser: build.query<UserResponse, string>({
			query: (id: string) => `general/user/${id}`,
			providesTags: ["User"],
		}),
		getProducts: build.query<ProductResponse[], void>({
			query: () => `client/products`,
			providesTags: ["Products"],
		}),
		getCustomers: build.query<UserResponse[], void>({
			query: () => `client/customers`,
			providesTags: ["Customers"],
		}),
		getTransactions: build.query<
			TransactionsResponse,
			{
				page: number;
				pageSize: number;
				sort: string;
				search: string;
			}
		>({
			query: ({ page, pageSize, sort, search }) => ({
				url: `client/transactions?`,
				method: "GET",
				params: { page, pageSize, sort, search },
			}),
			providesTags: ["Transactions"],
		}),
		getGeography: build.query({
			query: () => `client/geography`,
			providesTags: ["Geography"],
		}),
	}),
});

export const {
	useGetUserQuery,
	useGetProductsQuery,
	useGetCustomersQuery,
	useGetTransactionsQuery,
	useGetGeographyQuery,
} = api;
