import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Puma', decription: 'Sneakers', price: '$1' },
    { id: 2, name: 'Protein', description: 'Supliment', price: '$0.5' }

]



const Products = () => {
    return (
        <main>    
        <Grid container justifyContent='center' spacing={4}>
               {products.map((product) => {    
                   <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} />
                   </Grid>
               })}
        </Grid>
       </main>
    )
}

export default Products
