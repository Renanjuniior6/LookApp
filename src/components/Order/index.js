/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { Box, Text, Title, Spacer } from '../';
import { colors } from '../../styles/theme.json';
import util from '../../util';

const OrderITem = () => {
  return (
    <Box
      spacing="0px 0px 10px 0px"
      radius="5px"
      border={`1px solid ${util.toAlpha(colors.muted, 50)}`}
    >
      <Box
        hasPadding
        row
        width="100%"
        justify="space-between"
        style={{
          borderBottomWidth: 0.5,
          borderBottomColor: util.toAlpha(colors.muted, 50),
        }}
      >
        <Box row align="center">
          <Icon name="check" color="#6AB04C" size={20} />
          <Text color="secondary" spacing="0px 0px 0px 7px">
            DELIVERED
          </Text>
        </Box>
        <Text>August 17, 2016 3:58 PM</Text>
      </Box>
      <Box hasPadding width="100%" style={{
          borderBottomWidth: 0.5,
          borderBottomColor: util.toAlpha(colors.muted, 50),
        }}>
        <Title>Order №1947034</Title>
        <Spacer />
        <Text>
          Tracking number: <Text color="dark">IW3475453455</Text>
        </Text>
      </Box>
      <Box hasPadding row width="100%" justify="space-between">
        <Text>
          VALUE OF ITEMS: <Text color="dark">$66,60</Text>
        </Text>
        <Text>
          QUANITY: <Text color="dark">3</Text>
        </Text>
      </Box>
    </Box>
  );
};

export default OrderITem;
