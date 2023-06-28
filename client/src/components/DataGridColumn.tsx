import {
	GridColumnMenuContainer,
	GridColumnMenuFilterItem,
	GridColumnMenuProps,
	GridColumnMenuHideItem,
} from "@mui/x-data-grid";

function DataGridColumn(props: GridColumnMenuProps) {
	const itemProps = {
		colDef: props.colDef,
		onClick: props.hideMenu,
		open: props.open,
	};

	return (
		<GridColumnMenuContainer
			open={props.open}
			hideMenu={props.hideMenu}
			colDef={props.colDef}
		>
			<GridColumnMenuFilterItem {...itemProps} />
			<GridColumnMenuHideItem {...itemProps} />
		</GridColumnMenuContainer>
	);
}
export default DataGridColumn;
