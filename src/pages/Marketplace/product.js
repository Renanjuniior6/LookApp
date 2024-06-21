/* eslint-disable prettier/prettier */
import React from 'react';
import { StretchyScrollView } from 'react-native-stretchy';

import { Touchable, Box, Title, Text, Spacer, Button } from '../../components';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { colors } from '../../styles/theme.json';
import util from '../../util';

const Product = () => {
  return (
    <>
      <Header
        title="striped cardigan"
        goBack
        right={() => (
          <Touchable hasPadding width="80px">
            <Icon name="bag" size={20} color="#000" />
          </Touchable>
        )}
      />
      <StretchyScrollView
        image={{
          uri: 'https://s3-alpha-sig.figma.com/img/36f6/ffe6/aab4cb1ff4e61074bdfd1b9a73b67c0b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jCMCoXHKnJzPX88HDZu2QT7BmD4Krd~KN2EkZw7~MFSi0-DQTEBEq-SAyRk6-sagaj~PjEV3Jy9RW-NtLderih1ON~NFBy2pJl3T0SKm3p~6kJJ0G71PLkP560PKVzwt8F6AM3Ep9ZsMpl7W-vMCs6pcO25kBEMxEukPkNB0~LHvUbLdPkYeQZhNkokeKBlU0r-0mG4dT2V95zOVP1Zq-k0TiC--1vk1o-I9RU1dSI2I9mxVTspcSNuLFn2j5BgvZUPNNj7JhwNJ3edXgxtU-GjfKqInV1vfAqtK06rtKxFPdne0V6Ln2PUDpoPiNi1TAiRO9rUH3xxoynOlIuHuFA__',
        }}
        imageOverlay={<Box background={util.toAlpha(colors.dark, 40)} />}
        foreground={
          <Box hasPadding justify="flex-end">
            <Title bold color="light" variant="big">
              R$1080
            </Title>
          </Box>
        }
      >
        <Box hasPadding background="light">
          <Text color="black">Shirts</Text>
          <Spacer size="20px" />
          <Title color="black">A.P.C. Collection Spring 2015</Title>
          <Spacer size="30px" />
          <Text color="dark">
            Enjoy the beauty of italian cotton all over your body. This item
            will fit your body and warm you up all over and during spring. This
            item will fit your body and warm you up all over and during spring.
          </Text>
          <Spacer size="30px" />
          <Button block>
            <Text color="light">Add to cart</Text>
          </Button>
        </Box>
      </StretchyScrollView>
    </>
  );
};

export default Product;
