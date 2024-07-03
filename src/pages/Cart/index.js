/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useContext } from 'react';

import Header from '../../components/Header';
import Product from '../../components/Product';
import Tabs from '../../components/Tabs';
import PaymentForm from '../../components/Forms/payment';
import CongratsModal from '../../components/Modals/congrats';

import { ScrollView, Spacer, Box, Text, Button } from '../../components';
import { colors } from '../../styles/theme.json';

import { AppContext } from '../../contexts/app';

const Cart = () => {
  const [showCongrats, setShowCongrats] = useState(false);
  const [tab, setTab] = useState('cart');
  const { cart } = useContext(AppContext);

  return (
    <>
    {showCongrats && <CongratsModal />}
      <Header title="Cart" goBack />
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
        <Text color="dark">Order number is 458765342</Text>
        <Spacer size="20px" />

        {tab === 'cart' && (
          <>
            {cart?.map((product) => (
              <Product
              product={product}
              selected
              />
            ))}
            <Spacer size="50px" />
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Order:</Text>
              <Text color="dark">R$445,00</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Discount:</Text>
              <Text color="secondary">R$-44,50</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Delivery:</Text>
              <Text color="dark">R$10,00</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark" bold>
                Total order:
              </Text>
              <Text color="dark" bold>
                R$410,50
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
            <PaymentForm onChange={(creditCardData) => console.log(creditCardData)}/>
            <Spacer size="30px" />
            <Button
              block
              onPress={() => setShowCongrats(true)}
            >
              <Text color="light">Confirmation</Text>
            </Button>
            <Spacer size="50px"/>
          </>
        )}
      </ScrollView>
    </>
  );
};

export default Cart;
