import Header from "@/components/Header";
import { useAppSelector } from "@/hooks";
import { useGetUserPerformanceQuery } from "@/state/api";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import CustomColumnMenu from "@components/DataGridColumn";

type Props = {};
function Performance({}: Props) {
	const theme = useTheme();
	const userId = useAppSelector((state) => state.global.userId);
	const { data, isLoading } = useGetUserPerformanceQuery(userId);

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
			renderCell: (params: GridRenderCellParams) => params.value.length,
		},
		{
			field: "cost",
			headerName: "Cost",
			flex: 1,
			renderCell: (params: GridRenderCellParams) => `$${Number(params.value).toFixed(2)}`,
		},
	];

	return (
		<Box m="1.5rem 2.5rem">
			<Header
				title="PERFORMANCE"
				subtitle="Track your Affiliate Sales Performance Here"
			/>

			<Box
				mt="40px"
				height="75vh"
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
					getRowId={(row) => row._id}
					rows={(data && data.sales) || []}
					columns={columns}
					slots={{
						columnMenu: CustomColumnMenu,
					}}
				/>
			</Box>
		</Box>
	);
}
export default Performance;
