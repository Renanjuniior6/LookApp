/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from '../index';

import OrderITem from '.';

const OrderList = () => {
  return (
    <ScrollView fluid background="light" hasPadding>
      {Array.from(Array(3))?.map((item) => (
        <OrderITem />
      ))}
    </ScrollView>
  );
};

export default OrderList;
