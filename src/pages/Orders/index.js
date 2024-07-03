/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';

import Header from '../../components/Header';
import OrderList from '../../components/Order/list';
import Empty from '../../components/Empty';

import { AppContext } from '../../contexts/app';
import api from '../../services/api';

const OrdersPage = ({navigation}) => {

  const {user} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {

    try {
      setLoading(true);
      setTimeout(async () => {
        const { data: ordersData } = await api.get('/orders', {
          params: {
            userId: user?.id,
          },
        });
        setOrders(ordersData);
        setLoading(false);
      }, 1000);
    } catch (err) {
      setLoading(false);
      alert(err.message);
    }
  };


   // FOCUS
   useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getOrders();
    });

    return unsubscribe;
  }, [navigation]);


  return (
    <>
      <Header title="Orders" />
      {loading && <Empty loading />}
      {!loading && <OrderList orders={orders} />}
    </>
  );
};

export default OrdersPage;
