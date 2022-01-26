import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import ProductModal from './ProductModal';

const ProductList = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => { axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
    .then((response) => setProducts(response.data))
    .catch(err => console.log("Error: ", err))
  })

  const [open, setOpen] = useState(false);

  const [prod, setProd] = useState([]);

  const handleOpen = (props) => {
    setProd(props);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // let prod = products.map((product) => (
  //   product.name,
  //   product.price,
  //   product.rating,
  //   product.image_link,
  //   product.description,
  //   product.product_link,
  //   product.product_colors
  // ))

  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map((product) => (
        <Grid item xs={2} sm={4} md={4} key={product.id}>
              <h3>{product.name}</h3>
              <h4>Price: ${product.price}</h4>
              <h4>Rating: {product.rating == null ? 'No rating': (product.rating)}</h4>
              <img src={product.image_link} alt='product'/>
              <button value={product} onClick={() => handleOpen(product)}>View More</button>
        </Grid>
        ))}
      </Grid>
      <ProductModal open={open} onClose={handleClose} prod={prod} />
    </div>
  );
}

export default ProductList;