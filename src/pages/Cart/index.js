/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';

import Header from '../../components/Header';
import Product from '../../components/Product';
import Tabs from '../../components/Tabs';
import PaymentForm from '../../components/Forms/payment';

import { ScrollView, Spacer, Box, Text, Button } from '../../components';
import { colors } from '../../styles/theme.json';

const Cart = () => {
  const [tab, setTab] = useState('payment');

  return (
    <>
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
            {Array.from(Array(3))?.map((item) => (
              <Product
                cover="https://s3-alpha-sig.figma.com/img/80c4/641b/349ac2aa1a3c8d5e6d528e28935c4589?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UhBybcfOtgyNNarvkTvSVDAVSbh4XEvW1eKeqCjhk9cTO190Hjr6IvvG2mRL2MlqwOtCyNTiMhWJy5~YpK9hKyxn1OWbboulWothaeMdXdKaWbcPIY9IN7RoMV1jAyVubky~-Ls1oAmT4-nDRIeKC5hSR5gHq6LrHaKrg0HoiwBYSlewRz85fU9pfiTGfI1RWmeZkl~yYBr4g~R-6y1ZG5DkHQbVM758--uV4-k6pzH3NZlEPpe-sOgctYn-fZp1CUa30nAYb-gW1Yx7Qv0BD2iih4Py-o~avyFS1Pkmmg~tyeaMRAw7gCip7xsYNK2FBPPz12VCaH~-dRop4aSuhg__"
                brand="Raf Simons"
                title="Large striped cardigan"
                price="R$1080"
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
              onPress={() => {}}
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
