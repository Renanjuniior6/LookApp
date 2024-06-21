/* eslint-disable prettier/prettier */
import React from 'react';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Touchable } from '../../components';
import Header from '../../components/Header';
import ProductList from '../../components/Product/list';

const Category = () => {
  return (
   <>
   <Header title="Woman" right={() => (
          <Touchable hasPadding width="80px">
            <Icon name="bag" size={20} color="#000" />
          </Touchable>
        )}
        />
        <ProductList />
   </>
  );
};

export default Category;
