/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { Text, Box, Touchable, Spacer } from '../index';
import { colors } from '../../styles/theme.json';

const Picker = ({
  options = [],
  initialValue = '',
  title,
  onChange = (value) => {},
}) => {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    setSelected(initialValue);
  }, []);

  return (
    <>
      <Text bold color="dark">
        {title}
      </Text>
      <Spacer />
      <Box row fluid height="50px">
        {options?.map((opt) => (
          <Touchable
            key={opt.id}
            onPress={() => {
              setSelected(opt?.value);
              onChange(opt?.value);
            }}
            style={[
              styles.base,
              styles[selected === opt?.value ? 'checked' : 'unchecked'],
            ]}
          >
            <Text
              style={selected === opt?.value ? styles.textChecked : undefined}
            >
              {opt?.label}
            </Text>
          </Touchable>
        ))}
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    maxWidth: 46,
    height: 45,
    marginRight: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unchecked: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.muted,
  },
  checked: {
    backgroundColor: colors.primary,
  },
  textChecked: {
    color: colors.light,
  },
});

export default Picker;
