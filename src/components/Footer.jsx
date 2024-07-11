import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" style={{ color: 'black' }} className="bg-gray-100 py-8">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="mb-4">
              Get to Know Us
            </Typography>
            <ul>
              <li>
                <Link href="#" style={{ color: 'black' }}  className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: 'black' }} className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: 'black' }} className="hover:underline">
                  About Ecommerce
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: 'black' }} className="hover:underline">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: 'black' }} className="hover:underline">
                  Ecommerce Devices
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="mb-4">
              Make Money with Us
            </Typography>
            <ul>
              <li>
                <Link href="#" style={{ color: 'black' }} className="hover:underline">
                  Sell on Ecommerce
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: 'black' }} className="hover:underline">
                  Sell Your Services on Ecommerce
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: 'black' }} className="hover:underline">
                  Sell on Ecommerce Business
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: 'black' }} className="hover:underline">
                  Sell Your Apps on Ecommerce
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: 'black' }} className="hover:underline">
                  Become an Affiliate
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="mb-4">
              Ecommerce Payment Products
            </Typography>
            <ul>
              <li>
                <Link href="#" style={{ color: 'black' }} className="hover:underline">
                  Ecommerce Rewards Visa Signature Cards
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: 'black' }} className="hover:underline">
                  Ecommerce.com Store Card
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: 'black' }} className="hover:underline">
                  Ecommerce Business Card
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: 'black' }} className="hover:underline">
                  Ecommerce.com Corporate Credit Line
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: 'black' }} className="hover:underline">
                  Shop with Points
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="mb-4">
              Let Us Help You
            </Typography>
            <ul>
              <li>
                <Link href="#" style={{ color: 'black' }} className="hover:underline">
                  Your Account
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: 'black' }} className="hover:underline">
                  Your Orders
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: 'black' }} className="hover:underline">
                  Shipping Rates & Policies
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: 'black' }} className="hover:underline">
                  Returns & Replacements
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: 'black' }} className="hover:underline">
                  Help
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Box className="mt-8 text-center">
          <Typography variant="body2">
            © 2024, YourCompany.com, Inc. or its affiliates
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
