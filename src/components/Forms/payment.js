/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import SegmentedPicker from 'react-native-segmented-picker';

import { Box, Title, Text, Spacer, Input, Touchable } from '../';

const PaymentForm = ({onChange = creditCardData => {}}) => {

    const pickerRef = useRef(null);

    const [data, setData] = useState({
        name: '',
        number: '',
        valid_date: '',
        cvv: '',
    });

    useEffect(() => {
        onChange(data);
    }, [data]);

  return (
    <>
    <SegmentedPicker
    ref={pickerRef}
    onConfirm={data => setData({
        ...data,
        number: `${data.month}/${data.year}`,
    })}
    options={[
        {
            key: 'month',
            items: [
                { label: 'Option 1', value: 'option_1'},
                { label: 'Option 2', value: 'option_2'},
            ],
        },
        {
            key: 'year',
            items: [
                { label: 'Option 3', value: 'option_3'},
            ],
        },
    ]}
    />
    <Box>
      <Title variant="small">Select and enter your payment details</Title>
      <Spacer />
      <Text>By continuing you agree to our Terms</Text>
      <Spacer size="20px"/>
      <Input placeholder="Name" value={data.name} onChangeText={name => setData({
        ...data,
        name,
      })}/>
      <Spacer />
      <Input placeholder="Credit Card Number" value={data.number} onChangeText={number => setData({
        ...data,
        number,
      })}/>
      <Spacer />
      <Touchable width="100%" onPress={() => pickerRef.current.show()}>
      <Input pointerEvents="none" editable={false} placeholder="09/2025"/>
      </Touchable>
      <Spacer />
      <Box row>
        <Box spacing="0px 10px 0px 0px">
            <Input placeholder="CVV" value={data.cvv} onChangeText={cvv => setData({
        ...data,
        cvv,
      })}/>
        </Box>
        <Box>
            <Text spacing="10px 0px 0px 0px" variant="small">3 or 4 digits usually found on the signature strip</Text>
        </Box>
      </Box>
    </Box>
    </>

  );
};

export default PaymentForm;
