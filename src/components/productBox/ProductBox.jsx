import React from 'react';
import { Typography } from '@mui/material';

function ProductBox({product, className = null, page}) {

  if (!product.head) {
    product.head = 'Product header unavailable';
  }

  if (product.id == 1 && page == 'indexPage') {
    className = 'z-0 -m-8';
  } else {
    className = 'z-0 -m-16';
  }

  if (page == 'indexPage') {
    return (
      <>
          <Typography className='z-10' variant="subtitle2">{product.head}</Typography>
        <img className={className} src={product.image} alt={product.alt} />
      </>
      );
  }
 
}

export default ProductBox;
