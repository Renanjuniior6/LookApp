/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Touchable } from '../../components';
import Header from '../../components/Header';
import Empty from '../../components/Empty';
import ProductList from '../../components/Product/list';
import api from '../../services/api';

const Category = ({route, navigation}) => {

  const { category } = route?.params;

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {

    try {
      setLoading(true);
      setTimeout(async () => {
        const { data: productsData } = await api.get('/products', {
          params: {
            categoryId: category?.id,
          },
        });
        setProducts(productsData);
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
      getProducts();
    });

    return unsubscribe;
  }, [navigation]);

  return (
   <>
   <Header title={category?.title} goBack right={() => (
          <Touchable hasPadding width="80px">
            <Icon name="bag" size={20} color="#000" onPress={() => navigation.navigate('Cart')}/>
          </Touchable>
        )}
        />
        {loading && <Empty loading/>}
        {!loading && <ProductList products={products}/>}
   </>
  );
};

export default Category;
