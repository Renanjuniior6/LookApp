/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect, useContext } from 'react';
import { StretchyScrollView } from 'react-native-stretchy';

import { Touchable, Box, Title, Text, Spacer, Button } from '../../components';
import Header from '../../components/Header';
import Picker from '../../components/Picker';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { colors } from '../../styles/theme.json';
import util from '../../util';
import { AppContext } from '../../contexts/app';

const Product = ({navigation, route}) => {

  const { product } = route?.params;
  const { addToCart, cart } = useContext(AppContext);
  const [size, setSize] = useState();

  useEffect(() => {
    setSize(product?.sizes?.[0]?.value);
  }, [product]);

  return (
    <>
      <Header
        title={product?.title}
        goBack
        right={() => (
          <Touchable hasPadding width="80px">
            <Icon name="bag" size={20} color="#000" onPress={() => navigation.navigate('Cart')} />
          </Touchable>
        )}
      />
      <StretchyScrollView
        image={{
          uri: product?.cover,
        }}
        imageOverlay={<Box background={util.toAlpha(colors.dark, 40)} />}
        foreground={
          <Box hasPadding justify="flex-end">
            <Title bold color="light" variant="big">
              $ {product?.price.toFixed(2)}
            </Title>
          </Box>
        }
      >
        <Box hasPadding background="light">
          <Text color="black">{product?.type}</Text>
          <Spacer size="20px" />
          <Title color="black">{product?.title}</Title>
          <Spacer size="30px" />
          <Text color="dark">
           {product?.description}
          </Text>
          <Spacer size="30px" />
          <Picker options={product?.sizes}
          onChange={(value) => setSize(value)}
            initialValue={product?.sizes[0]?.value}
            title="Size"
          />
          <Spacer size="30px" />
          <Button block onPress={() => {
            addToCart({...product, size});
            navigation.navigate('Cart');
          }}>
            <Text color="light">Add to cart</Text>
          </Button>
        </Box>
      </StretchyScrollView>
    </>
  );
};

export default Product;
