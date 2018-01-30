import React, { Component } from 'react';

import Layout from '../../components/Layout/Layout';
import Jumbotron from '../../components/Jumbotron/Jumbotron';


class Home extends Component {
    render() {
        return (
            <Layout>
               <Jumbotron />
            </Layout>
        )
    }
}

export default Home;