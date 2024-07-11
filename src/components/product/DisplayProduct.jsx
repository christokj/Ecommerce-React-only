import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import data from '../../assets/data.json';
import iconClose from '../../assets/json/Close.json';
import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';

function DisplayProduct(id) {
    const [showAllPhotos, setShowAllPhotos] = useState(false);
    const [index, setIndex] = useState(1);
    const [price, setPrice] = useState('');

    const cId = id.id;

    useEffect(() => {
        if (!id) {
            return;
        }
    }, [id]);

    const product = data[cId].find(item => item.id == index);
    const navigate = useNavigate();
    let Price = (price) => {
        setPrice(price);
        navigate(`payment`, { state: { price: price } })
    }


    if (showAllPhotos) {
        return (
            <Box className='absolute inset-0 bg-white h-max z-50' >
                <div className='max-sm:m-1 max-md:m-2 m-8 grid gap-4'>
                    <div className='mb-4'>
                        <button onClick={() => setShowAllPhotos(false)} className='fixed bg-opacity-30 flex rounded-full  bg-gray-100 hover:bg-gray-300 text-black font-semibold'>
                            <Lottie className='w-10' animationData={iconClose} />
                        </button>
                    </div>
                    {product?.photos?.length > 0 && product.photos.map(photos => (
                        <div className='flex justify-center all_photos' key={photos}>
                            <img src={photos} alt="" />
                        </div>
                    ))}
                </div>
            </Box>
        );
    }


    return (
        <>
            {data && data[cId].map(product => (
                <Grid item xs={6} sm={4} key={product.id}>
                    <img onClick={() => {
                        setIndex(product.id)
                        setShowAllPhotos(true)
                    }} className="w-full h-96 object-fill cursor-pointer" src={product.photos[0]} alt={product.alt} />
                    {product.description}
                    <Typography variant="h5">₹{product.price}</Typography>
                    <div className='flex justify-end'>
                        <Button onClick={() => Price(product.price)} variant="contained">Buy Now</Button>
                    </div>
                </Grid>
            ))}
        </>
    )
}

export default DisplayProduct;
