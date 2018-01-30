import React, { Component } from 'react';

import Product from './Product/Product';
import Layout from '../Layout/Layout';

class Products extends Component {
    render() {
        return (
            <Layout>
               <Product />
            </Layout>
        )
    }
}

export default Products;