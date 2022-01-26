import React from 'react';
import { Button, Modal, Box } from '@mui/material';


const ProductModal = (props) => {
    // console.log(props)
    
    const contentStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    
    let url = props.prod.product_link
    
    const prodWeb = () => {
        window.open(url, "_blank")
    }
    

    return (
        <Modal
            {...props}
        >
        <Box sx={contentStyle}>
            <h2>{props.prod.name}</h2>
            <img src={props.prod.image_link} alt='product'/>
            <h4> Description: {props.prod.description} </h4>
            <h4> Rating: {props.prod.rating == null ? 'No rating': (props.rating)} </h4>
            <h4> Price: ${props.prod.price} </h4>
            <h4> Colors offered: </h4>
            {props.prod.product_colors != null && 
            props.prod.product_colors.map(color =>
                <div key={color.hex_value}>
                    <ul>{color.colour_name} </ul>
                </div>
            )}
            <Button variant='contained' color='primary' onClick={prodWeb}>Product Website</Button>
        </Box>
        </Modal>
    )
}

export default ProductModal;