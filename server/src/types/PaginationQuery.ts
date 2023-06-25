export default interface PaginationQuery {
	page: number;
	pageSize: number;
	sort: null | {
		field: string;
		sort: "desc" | "asc";
	};
	search: string;
}
