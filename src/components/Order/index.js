/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import moment from 'moment';

import { Box, Text, Title, Spacer } from '../';
import { colors } from '../../styles/theme.json';
import util from '../../util';

const OrderITem = ({order}) => {

  const stepEnum = {
    waiting: {
      icon: 'clock',
      color: 'warning',
    },
    delivered: {
      icon: 'check',
      color: 'secondary',
    },
    canceled: {
      icon: 'close',
      color: 'danger',
    },
  };

  const stepData = stepEnum[order?.step];

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
          <Icon name="check" color={colors[stepData.color]} size={20} />
          <Text color={stepData.color} spacing="0px 0px 0px 7px">
            {order.step?.toUpperCase()}
          </Text>
        </Box>
        <Text>{moment(order?.createdAt).format('DD/MM/YYYY HH:mm')}</Text>
      </Box>
      <Box hasPadding width="100%" style={{
          borderBottomWidth: 0.5,
          borderBottomColor: util.toAlpha(colors.muted, 50),
        }}>
        <Title variant="small">Order № {order?.orderNumber}</Title>
        <Spacer />
        <Text>
          Tracking number: <Text color="dark">{order?.trackingNumber}</Text>
        </Text>
      </Box>
      <Box hasPadding row width="100%" justify="space-between">
        <Text>
          VALUE OF ITEMS: <Text color="dark">R$ {order?.totalValue.toFixed(2)}</Text>
        </Text>
        <Text>
          QUANTITY: <Text color="dark">{order?.totalItems}</Text>
        </Text>
      </Box>
    </Box>
  );
};

export default OrderITem;
