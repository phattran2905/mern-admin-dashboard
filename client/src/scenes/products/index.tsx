import Header from "@/components/Header";
import { useGetProductsQuery } from "@/state/api";
import { ProductResponse } from "@/types/Product";
import Product from "@scenes/product";
import { useMediaQuery, Box } from "@mui/material";

type Props = {};
function Products({}: Props) {
	const { data, isLoading } = useGetProductsQuery();
	const isNonMobile = useMediaQuery("(min-width: 1000px)");

	return (
		<Box m="1.5rem 2.5rem">
			<Header
				title="PRODUCTS"
				subtitle="See your list of products."
			/>
			{data || !isLoading ? (
				<Box
					mt="20px"
					display="grid"
					gridTemplateColumns="repeat(4, minmax(0, 1fr))"
					justifyContent="space-between"
					rowGap="20px"
					columnGap="1.33%"
					sx={{
						"& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
					}}
				>
					{data?.map(
						({
							_id,
							name,
							description,
							price,
							rating,
							category,
							supply,
							productStat,
						}: ProductResponse) => (
							<Product
								key={_id}
								_id={_id}
								name={name}
								description={description}
								price={price}
								rating={rating}
								category={category}
								supply={supply}
								stat={productStat}
							/>
						)
					)}
				</Box>
			) : (
				<Box>Loading...</Box>
			)}
		</Box>
	);
}
export default Products;
