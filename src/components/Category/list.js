/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView } from '../index';

import Category from '.';

const CategoryList = ({categories}) => {
  return (
    <ScrollView fluid style={{
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    }}>
      {categories?.map((category) => (
        <Category key={category.id} category={category}/>
      ))}
    </ScrollView>
  );
};

export default CategoryList;
