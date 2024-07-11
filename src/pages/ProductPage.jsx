import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Container, Grid, Typography } from '@mui/material';
import DisplayProduct from '../components/product/DisplayProduct';

function ProductPage() {
    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }
    }, [id]);


    return (
        <Container className='pt-8 '>
            <Typography variant="h5" className='text-3xl'>Results</Typography>
            <Box >

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <DisplayProduct id={id} />
                </Grid>

            </Box>
        </Container>
    );
}

export default ProductPage;