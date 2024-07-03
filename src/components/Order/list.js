/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from '../index';

import OrderITem from '.';

const OrderList = ({orders}) => {
  return (
    <ScrollView fluid background="light" hasPadding>
      {orders?.map((order) => (
        <OrderITem order={order}/>
      ))}
    </ScrollView>
  );
};

export default OrderList;
