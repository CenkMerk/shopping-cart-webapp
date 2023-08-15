import Stack from "@mui/material/Stack/Stack";
import ProductItem from "./ProductItem";
import ProductItemsData from "../constant";
import Grid from "@mui/material/Grid";

const ProductsList = () => {
  return (
    <Grid container  spacing={2} >
      {ProductItemsData.map((item, index) => (
        <Grid item xs={12} sm={6} md={3}>
          <ProductItem
            key={index}
            id={item.id}
            img1={item.img1}
            img2={item.img2}
            price={item.price}
            title={item.title}
            quantity={item.quantity}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
