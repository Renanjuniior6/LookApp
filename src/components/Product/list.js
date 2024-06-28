/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from '../index';

import Product from '.';

const ProductList = ({products}) => {
  return (
    <ScrollView fluid>
      {products?.map((product) => (
        <Product product={product} />
      ))}
    </ScrollView>
  );
};

export default ProductList;
