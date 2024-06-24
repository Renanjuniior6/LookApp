/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { Text, ScrollView, Touchable } from '../';
import { colors } from '../../styles/theme.json';

const Tabs = ({ tabs, active, onChange = (tab) => {} }) => {
  const TotalTabs = tabs?.length;

  const activeStyle = {
    borderBottomWidth: 3,
    borderColor: colors.primary,
  };

  return (
    <ScrollView
      style={{
        maxHeight: 65,
        backgroundColor: colors.light,
      }}
      horizontal
    >
      {tabs?.map((tab) => (
        <Touchable
          onPress={() => onChange(tab.value)}
          hasPadding
          width="195px"
          style={[
            {
              minWidth: `${100 / TotalTabs}%`,
              alignItems: 'center',
            },
            active === tab.value ? activeStyle : {},
          ]}
        >
          <Text color={active === tab.value ? 'primary' : undefined}>{tab.label}</Text>
        </Touchable>
      ))}
    </ScrollView>
  );
};

export default Tabs;
