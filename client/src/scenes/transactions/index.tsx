import DataGridToolbar from "@/components/DataGridToolbar";
import Header from "@/components/Header";
import { useGetTransactionsQuery } from "@/state/api";
import { Transaction } from "@/types/Transaction";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useState } from "react";

type Props = {};
function Transactions({}: Props) {
	const theme = useTheme();
	const [page, setPage] = useState(0);
	const [pageSize, setPageSize] = useState(20);
	const [sort, setSort] = useState({});
	const [searchInput, setSearchInput] = useState("");
	const [search, setSearch] = useState("");

	const { data, isLoading } = useGetTransactionsQuery({
		page,
		pageSize,
		sort: JSON.stringify(sort),
		search,
	});

	const columns: GridColDef[] = [
		{
			field: "_id",
			headerName: "ID",
			flex: 1,
		},
		{
			field: "userId",
			headerName: "User ID",
			flex: 1,
		},
		{
			field: "createdAt",
			headerName: "CreatedAt",
			flex: 1,
		},
		{
			field: "products",
			headerName: "# of Products",
			flex: 0.5,
			sortable: false,
			renderCell: (params: GridRenderCellParams<String>) => params.value.length,
		},
		{
			field: "cost",
			headerName: "Cost",
			flex: 1,
			renderCell: (params: GridRenderCellParams<String>) => `$${Number(params.value).toFixed(2)}`,
		},
	];

	return (
		<Box m="1.5rem 2.5rem">
			<Header
				title="TRANSACTIONS"
				subtitle="Entire list of transactions."
			/>
			<Box
				height={"80vh"}
				sx={{
					"& .MuiDataGrid-root": {
						border: "none",
					},
					"& .MuiDataGrid-cell": {
						borderBottom: "none",
					},
					"& .MuiDataGrid-columnHeaders": {
						backgroundColor: theme.palette.background.paper,
						color: theme.palette.secondary[100],
						borderBottom: "none",
					},
					"& .MuiDataGrid-virtualScroller": {
						backgroundColor: theme.palette.primary.light,
					},
					"& .MuiDataGrid-footerContainer": {
						backgroundColor: theme.palette.background.paper,
						color: theme.palette.secondary[100],
						borderTop: "none",
					},
					"& .MuiDataGrid-toolbarContainer .MuiButton-text": {
						color: `${theme.palette.secondary[200]} !important`,
					},
				}}
			>
				<DataGrid
					loading={isLoading || !data}
					rows={(data && data.transactions) || []}
					getRowId={(row: Transaction) => row._id}
					columns={columns}
					rowCount={(data && data.total) || 0}
					pageSizeOptions={[20, 50, 100]}
					paginationModel={{
						page,
						pageSize,
					}}
					onPaginationModelChange={(updatedModel) => {
						setPage(updatedModel.page);
						setPageSize(updatedModel.pageSize);
					}}
					onSortModelChange={(newSortModel) => setSort(newSortModel)}
					paginationMode="server"
					sortingMode="server"
					slots={{
						toolbar: DataGridToolbar,
					}}
					slotProps={{
						toolbar: { searchInput, setSearchInput, setSearch },
					}}
				/>
			</Box>
		</Box>
	);
}
export default Transactions;
