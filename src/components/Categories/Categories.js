import React, { Component } from 'react';
import Category from './Category/Category';
import Layout from '../Layout/Layout';

class Categories extends Component {
    render() {
        return (
            <Layout>
                <Navbar />
               <Category />
            </Layout>
        )
    }
}

export default Categories;