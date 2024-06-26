/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import api from '../../services/api';
import { Box, Spacer, Text, Title, Button, Input } from '../../components';

const SignIn = ({ navigation: { navigate, replace } }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const requestLogin = async () => {
    try {
      const { data: userData } = await api.get('/users', {
        params: {
          email: user.email,
          password: user.password,
        },
      });
      console.log(userData);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Box background="light" justify="center" align="center" hasPadding>
        <Title bold variant="big">
          LookApp
        </Title>
        <Spacer size="50px" />
        <Title bold>Sign In my account</Title>

        <Spacer size="50px" />

        <Input
          placeholder="E-mail"
          value={user.email}
          onChangeText={(email) =>
            setUser({
              ...user,
              email,
            })
          }
        />
        <Spacer />
        <Input
          placeholder="Password"
          secureTextEntry
          value={user.password}
          onChangeText={(password) =>
            setUser({
              ...user,
              password,
            })
          }
        />

        <Spacer size="50px" />
        <Button block onPress={() => requestLogin()}>
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
