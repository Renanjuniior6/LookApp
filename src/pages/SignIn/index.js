/* eslint-disable prettier/prettier */
import React from 'react';
import { Box, Spacer, Text, Title, Button, Input } from '../../components';

import { StatusBar } from 'react-native';

const SignIn = ({navigation: {navigate, replace}}) => {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <Box background="light" justify="center" align="center" hasPadding>
      <Title bold variant="big">LookApp</Title>
      <Spacer size="50px"/>
      <Title bold>Sign In my account</Title>

      <Spacer size="50px" />

      <Input placeholder="E-mail"/>
      <Spacer />
      <Input placeholder="Password" secureTextEntry/>

      <Spacer size="50px" />
      <Button block onPress={() => replace('Feed')}>
        <Text color="light">Sign In my account</Text>
      </Button>
      <Spacer size="20px" />
      <Text onPress={() => navigate('SignUp')} underline>
        Create new account
      </Text>
    </Box>
    </>
  );
};

export default SignIn;
