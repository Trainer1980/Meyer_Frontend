import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid, Checkbox, FormControlLabel, FormGroup, FormLabel, Box } from '@mui/material';
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

  return (
    <div>
      <div>
          <h1>Maybelline Make-up</h1>
      </div>
      <div>
          <h2>Filters</h2>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={4}>
              <Box>
                <FormGroup sx={{display: 'inline', width:'200px'}}>
                  <h4>Rating:</h4>
                  <FormControlLabel
                    label="5"
                    control={
                      <Checkbox />
                    } 
                    />
                  <FormControlLabel
                  label="4-4.9"
                  control={
                    <Checkbox />
                  } />
                  <FormControlLabel
                  label="3-3.9"
                  control={
                    <Checkbox />
                  } />
                  <FormControlLabel
                  label="2-2.9"
                  control={
                    <Checkbox />
                  } />
                  <FormControlLabel
                  label="1-1.9"
                  control={
                    <Checkbox />
                  } />
                  <FormControlLabel
                  label="0-0.9"
                  control={
                    <Checkbox />
                  } />
                  <FormControlLabel
                  label="No Rating"
                  control={
                    <Checkbox />
                  } />
                </FormGroup>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Box>
                <FormGroup sx={{display: 'inline', width:'300px'}}>
                  <h4>Price:</h4>
                  <FormControlLabel
                    label="$16+"
                    control={
                      <Checkbox />
                    } />
                  <FormControlLabel
                  label="$13-15.99"
                  control={
                    <Checkbox />
                  } />
                  <FormControlLabel
                  label="$9-11.99"
                  control={
                    <Checkbox />
                  } />
                  <FormControlLabel
                  label="$5-7.99"
                  control={
                    <Checkbox />
                  } />
                  <FormControlLabel
                  label="4.99 and below"
                  control={
                    <Checkbox />
                  } />
                </FormGroup>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Box>
                <FormGroup sx={{display: 'inline', width:'400px'}}>
                  <h4>Product Type:</h4>
                  <FormControlLabel
                    label="Blush"
                    control={
                      <Checkbox />
                    } />
                  <FormControlLabel
                  label="Bronzer"
                  control={
                    <Checkbox />
                  } />
                  <FormControlLabel
                  label="Eyeliner"
                  control={
                    <Checkbox />
                  } />
                  <FormControlLabel
                  label="Eyeshadow"
                  control={
                    <Checkbox />
                  } />
                  <FormControlLabel
                  label="Foundation"
                  control={
                    <Checkbox />
                  } />
                  <FormControlLabel
                  label="Lip Liner"
                  control={
                    <Checkbox />
                  } />
                  <FormControlLabel
                  label="Lipstick"
                  control={
                    <Checkbox />
                  } />
                  <FormControlLabel
                  label="Mascara"
                  control={
                    <Checkbox />
                  } />
                  <FormControlLabel
                  label="Nail Polish"
                  control={
                    <Checkbox />
                  } />
                </FormGroup>
              </Box>
            </Grid>
          </Grid>
      </div>
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