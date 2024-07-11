import React from 'react';
import { Link } from 'react-router-dom';
import productBox from "../assets/productBox.json";
import { Box, Container } from '@mui/material';
import CarouselHome from '../components/carousel/CarouselHome';
import ProductBox from '../components/productBox/ProductBox';
import Footer from '../components/Footer';

function IndexPage() {

    return (
        <Container maxWidth={false} style={{ padding: 0 }} >
            <Box sx={{ position: 'relative' }} >
                <CarouselHome />
                <Box sx={{ position: 'absolute', bottom: '30px', zIndex: '1' }} className="flex flex-row gap-10 mx-24">
                    {
                        productBox.length > 0 && productBox.map(product => (
                            <Link to={'product/' + product.id}>
                                {product.image?.[0] && (
                                    <Box height={200} width={200} my={4} display="flex" alignItems="center" gap={4} p={2} sx={{ background: 'white', flexDirection: 'column' }}>
                                        <ProductBox key={product.id} page={"indexPage"} product={product} />
                                    </Box>
                                )}
                            </Link>
                        ))
                    }
                </Box>
            </Box>
            <Footer/>
        </Container>
    );
}

export default IndexPage;



