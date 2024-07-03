/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useContext } from 'react';

import Header from '../../components/Header';
import Product from '../../components/Product';
import Tabs from '../../components/Tabs';
import PaymentForm from '../../components/Forms/payment';
import CongratsModal from '../../components/Modals/congrats';
import Empty from '../../components/Empty';
import api from '../../services/api';
import moment from 'moment';

import { ScrollView, Spacer, Box, Text, Button } from '../../components';
import { colors } from '../../styles/theme.json';
import { ActivityIndicator } from 'react-native';

import { AppContext } from '../../contexts/app';
import util from '../../util';

const Cart = () => {
  const [showCongrats, setShowCongrats] = useState(false);
  const [tab, setTab] = useState('cart');
  const [loading, setLoading] = useState(false);
  const [creditCard, setCreditCart] = useState({});
  const { cart, user, DISCOUNT_PORCENTAGE, DELIVERY_TAX, ORDER_NUMBER } = useContext(AppContext);

  const cartIsEmpty = cart?.length === 0;

  const orderPrice = cart?.reduce((acc, product) => {
    return (acc + product.price);
  }, 0);

  const totalDiscount = (orderPrice * DISCOUNT_PORCENTAGE).toFixed(2);
  const totalOrderPrice = (orderPrice + DELIVERY_TAX - totalDiscount);

  const buyCart = async () => {
    try {
      setLoading(true);

      // VALIDAR OS DADOS DO CARTÃO DE CRÉDITO
      const creditCardValidation = util.isValidCreditCard(creditCard);
      if(creditCardValidation.error) {
        alert(creditCardValidation.message);
        return false;
      }
      // CRIAR A ORDER
      // "id": "1",
      //   "userId": 1,
      //   "step": "waiting",
      //   "createdAt": "2022-04-21T12:32",
      //   "orderNumber": "1947034",
      //   "trackingNumber": "IW3475453455",
      //   "totalValue": 80.58,
      //   "totalItems": 3

      const {data: orderData} = await api.post('/orders', {

        userId: user.id,
        step: 'waiting',
        createdAt: moment().format(),
        orderNumber: ORDER_NUMBER,
        trackingNumber: new Date().getTime(),
        totalValue: totalOrderPrice,
        totalItems: cart?.length,
      });

      if(!orderData.id) {
        alert('Order creation error, try again later...');
        setLoading(false);
        return false;
      }

      // EXIBIR O MODAL DE SUCESSO
      setShowCongrats(true);

    } catch (err) {
      setLoading(false);
      alert(err.message);
    }
  };

  return (
    <>
      {showCongrats && <CongratsModal />}

      <Header title="Cart" goBack />

      {cartIsEmpty && <Empty message="O carrinho está vazio..." />}
      {!cartIsEmpty && (
        <>
          <Tabs
            tabs={[
              { label: 'Cart', value: 'cart' },
              { label: 'Payment', value: 'payment' },
            ]}
            active={tab}
            onChange={(value) => setTab(value)}
          />
          <ScrollView hasPadding background="light">
            <Spacer size="20px" />
            <Text color="dark">Order number is {ORDER_NUMBER}</Text>
            <Spacer size="20px" />

            {tab === 'cart' && (
              <>
                {cart?.map((product) => (
                  <Product product={product} selected />
                ))}
                <Spacer size="50px" />
                <Box row width="100%" height="30px" justify="space-between">
                  <Text color="dark">Order:</Text>
                  <Text color="dark">R$ {orderPrice.toFixed(2)}</Text>
                </Box>
                <Box row width="100%" height="30px" justify="space-between">
                  <Text color="dark">Discount:</Text>
                  <Text color="secondary">R$ -{totalDiscount}</Text>
                </Box>
                <Box row width="100%" height="30px" justify="space-between">
                  <Text color="dark">Delivery:</Text>
                  <Text color="dark">R$ {DELIVERY_TAX.toFixed(2)}</Text>
                </Box>
                <Box row width="100%" height="30px" justify="space-between">
                  <Text color="dark" bold>
                    Total order:
                  </Text>
                  <Text color="dark" bold>
                    R$ {totalOrderPrice.toFixed(2)}
                  </Text>
                </Box>
                <Spacer size="50px" />
                <Button
                  block
                  onPress={() => {
                    setTab('payment');
                  }}
                >
                  <Text color="light">Place order</Text>
                </Button>
              </>
            )}
            {tab === 'payment' && (
              <>
                <Spacer size="20px" />
                <Box
                  row
                  width="100%"
                  justify="space-between"
                  style={{
                    borderBottomWidth: 0.5,
                    borderBottomColor: colors.muted,
                    paddingBottom: 10,
                  }}
                >
                  <Text color="dark" bold>
                    Shipping address
                  </Text>
                  <Text color="danger">Change</Text>
                </Box>
                <Spacer />
                <Text color="dark">
                  Tiana Rosser, 4517 Washington Ave Manchester, Kentucky 39495
                  United States
                </Text>

                <Spacer size="30px" />

                <Box
                  row
                  width="100%"
                  justify="space-between"
                  style={{
                    borderBottomWidth: 0.5,
                    borderBottomColor: colors.muted,
                    paddingBottom: 10,
                  }}
                >
                  <Text color="dark" bold>
                    Delivery details
                  </Text>
                  <Text color="danger">Change</Text>
                </Box>
                <Spacer />
                <Text color="dark">Standard Delivery</Text>
                <Text color="dark">Saturday 27 - Tuesday 30</Text>
                <Text color="dark">Cost: $10</Text>
                <Spacer size="30px" />
                <PaymentForm
                  onChange={(creditCardData) => setCreditCart(creditCardData)}
                />
                <Spacer size="30px" />
                <Button block onPress={() => buyCart()}>
                  {!loading && <Text color="light">Confirmation</Text>}
                  {loading && <ActivityIndicator />}
                </Button>
                <Spacer size="50px" />
              </>
            )}
          </ScrollView>
        </>
      )}
    </>
  );
};

export default Cart;
