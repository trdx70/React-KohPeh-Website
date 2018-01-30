import React from "react";

import Layout from '../Layout/Layout';
import './Process.css';
import processImg from '../../assets/images/coffee-beans_sel.jpg';

const proces = props => (
  <Layout> 
    <div className="proces">
      <div className="jumbotron jumbotron-fluid">
        <img src={processImg} alt="process" />
      </div>
    </div>
  </Layout>
);

export default proces;
