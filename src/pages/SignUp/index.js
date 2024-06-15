/* eslint-disable prettier/prettier */
import React from 'react';
import { Box, Spacer, Text, Title, Button, Input } from '../../components';

import { StatusBar } from 'react-native';

const SignUp = () => {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
    <Box background="light" justify="center" align="center" hasPadding>
      <Title bold>Create new account.</Title>
      <Spacer />
      <Text>Enter your details below:</Text>

      <Spacer size="50px" />

      <Input placeholder="Name"/>
      <Spacer />
      <Input placeholder="E-mail"/>
      <Spacer />
      <Input placeholder="Password" secureTextEntry/>

      <Spacer size="50px" />
      <Button block>
        <Text color="light">Create new account</Text>
      </Button>
      <Spacer size="20px" />
      <Text onPress={() => alert('test')} underline>
        Back to sign in
      </Text>
    </Box>
    </>
  );
};

export default SignUp;
