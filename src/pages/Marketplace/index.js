/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import CategoryList from '../../components/Category/list';
import { Touchable } from '../../components';
import Empty from '../../components/Empty';
import api from '../../services/api';

const Marketplace = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {

    try {
      setLoading(true);
      setTimeout(async () => {
        const { data: categoriesData } = await api.get('/categories');
        setCategories(categoriesData);
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
      getCategories();
    });

    return unsubscribe;
  }, [navigation]);

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
      {loading && <Empty loading/>}
      {!loading && <CategoryList categories={categories}/>}
    </>
  );
};

export default Marketplace;
