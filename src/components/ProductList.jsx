import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid, Button } from '@mui/material';
import ProductModal from './ProductModal';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false)
  const [prod, setProd] = useState()
  const data = {
    prod
  }
  //const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => { axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
    .then((response) => setProducts(response.data))
    .catch(err => console.log("Error: ", err))
  })

  const handleOpen = (e) => {
    e.preventDefault();
    let value = e.target.value;
    axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline?id="+value)
    .then((response) => setProd(response.data))
    console.log(prod)
    .catch(err => console.log("Error: ", err));
    setOpen(true);
    }

  const handleClose = () => {
    setOpen(false)
  }

  // const openFromParent = () => {
  //   setIsOpen(true);
  // }

  // const handleCloseModal = (e, data) => {
  //   console.log(e, data);
  //   setIsOpen(false);
  // }

  // const handleAfterOpen = (e, data) => {
  //   console.log(e, data);
  // }
  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map((product) => (
        <Grid item xs={2} sm={4} md={4} key={product.id}>
              <h3>{product.name}</h3>
              <h4>Price: {product.price}</h4>
              <h4>Rating: {product.rating == null ? 'No rating': (product.rating)}</h4>
              <img src={product.image_link} alt='product'/>
              <Button className='button' variant='contained' color='primary' value = {product.id} onClick = { handleOpen }>View More</Button>
        </Grid>
        ))}
      </Grid>
      <ProductModal
        props = {data}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      />
      {/*       
      <ProductModal
        dynData={props}
        IsModalOpened={modalIsOpen}
        onCloseModal={handleCloseModal}
        onAfterOpen={handleAfterOpen}
      />
       */}
    </div>
  );
}

export default ProductList;