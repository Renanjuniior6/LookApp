/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from '../index';

import Category from '.';

const CategoryList = () => {
  return (
    <ScrollView fluid style={{
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    }}>
      {Array.from(Array(10))?.map((item) => (
        <Category title={'Woman'} description={'3450 items'}/>
      ))}
    </ScrollView>
  );
};

export default CategoryList;
