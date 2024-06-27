/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Title, Text, Button, Box, Spacer } from '../../components';

import { AppContext } from '../../contexts/app';

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  const {setUser} = useContext(AppContext);

  const checkedLogged = async () => {
    // AsyncStorage.clear();

    setLoading(true);

    const loggedUser = await AsyncStorage.getItem('@user');

    if(loggedUser) {
      setUser(JSON.parse(loggedUser));
      navigation.replace('Feed');
    } else {
      setLoading(false);
    }

  };

  useEffect(() => {
    checkedLogged();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Box hasPadding align="center" background="dark">
        <Box justify="center" align="center" fluid>
          <Title color="light" variant="big" bold>
            LookApp
          </Title>
          <Spacer />
          <Text align="center" spacing="0px 40px">
            Stay on top of the fashion world and buy your favorite looks.
          </Text>
          <Spacer size="40px" />
          {loading && <ActivityIndicator size="large" />}
        </Box>

        {!loading && (
          <Box align="center" fluid justify="flex-end">
            <Button block onPress={() => navigation.navigate('SignIn')}>
              <Text color="light">Sig In my account</Text>
            </Button>
            <Spacer size="20px" />
            <Text
              onPress={() => navigation.navigate('SignUp')}
              underline
              color="light"
            >
              Create new account
            </Text>
            <Spacer size="70px" />
          </Box>
        )}
      </Box>
    </>
  );
};

export default Home;
