/* eslint-disable prettier/prettier */
import React from 'react';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import CategoryList from '../../components/Category/list';
import { Touchable } from '../../components';

const Marketplace = () => {
  return (
    <>
      <Header
        title="Categories"
        right={() => (
          <Touchable hasPadding width="80px">
            <Icon name="bag" size={20} color="#000" />
          </Touchable>
        )}
      />
      <CategoryList />
    </>
  );
};

export default Marketplace;
