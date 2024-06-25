/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { Box, Title, Touchable } from '../index.js';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { colors } from '../../styles/theme.json';
import Icon from 'react-native-vector-icons/SimpleLineIcons.js';
import { useNavigation } from '@react-navigation/native';
import util from '../../util.js';

const Header = ({ title = 'Explore', right = null, goBack = false }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: `${util.toAlpha(colors.muted, 50)}`,
        backgroundColor: colors.light,
      }}
    >
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Touchable
          width="70px"
          justify="center"
          align="center"
          hasPadding
          onPress={() => navigation[!goBack ? 'openDrawer' : 'goBack']()}
        >
          <Icon name={!goBack ? 'menu' : 'arrow-left'} size={18} color="#000" />
        </Touchable>
        <Box align="center" justify="center">
          <Title>{title}</Title>
        </Box>
        {right ? right() : <Touchable hasPadding width="70px" />}
      </SafeAreaView>
    </View>
  );
};

export default Header;
