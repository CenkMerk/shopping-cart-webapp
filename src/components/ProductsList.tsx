import ProductItem from "./ProductItem";
import ProductItemsData from "../constant";
import Grid from "@mui/material/Grid";
import { AddToBagButton } from "../style";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cartSlice";

const ProductsList = () => {
  const dispatch = useDispatch();

  return (
    <Grid container spacing={2}>
      {ProductItemsData.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={index}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <AddToBagButton
            variant="contained"
            onClick={() => dispatch(addItem(item))}
          >
            ADD TO BAG
          </AddToBagButton>
          <ProductItem
            img1={item.img1}
            img2={item.img2}
            price={item.price}
            title={item.title}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
