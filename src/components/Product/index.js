/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text, Box, Touchable, Spacer, Cover } from '../index';

const Product = ({ cover, brand, title, price, selected = false }) => {
  const { navigate } = useNavigation();

  return (
    <Touchable
      onPress={() => navigate('Product')}
      hasPadding={!selected}
      row
      background="light"
      spacing={selected ? '5px 0' : '0px 0px 2px 0px'}
    >
      <Cover width="80px" height="80px" image={cover} />
      <Box hasPadding style={{ paddingTop: 0, paddingBottom: 0 }}>
        {!selected && <Text color="dark">{brand}</Text>}
        <Text color="dark" bold>
          {title}
        </Text>
        <Spacer />
        {selected && (
          <Box>
            <Text color="dark">Size: GG</Text>
          </Box>
        )}
        <Box row width="100%" justify="space-between">
          <Text color="dark">{price}</Text>
          <Text color="danger">{selected ? 'remove' : 'Add to cart'}</Text>
        </Box>
      </Box>
    </Touchable>
  );
};

export default Product;
