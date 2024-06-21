import React from "react";

import { Text, Box, Touchable, Spacer, Cover } from '../index';

const Product = ({ cover, brand, title, price }) => {
  return (
    <Touchable hasPadding row background="light" spacing="0px 0px 2px 0px">
      <Cover width="80px" height="80px" image={cover} />
      <Box hasPadding style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Text color="dark">{brand}</Text>
        <Text color="dark" bold>
          {title}
        </Text>
        <Spacer />
        <Box row width="100%" justify="space-between">
          <Text color="dark">{price}</Text>
          <Text color="danger">Add to cart</Text>
        </Box>
      </Box>
    </Touchable>
  );
};

export default Product;
