/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { StatusBar } from 'react-native';

import {Title, Text, Button, Box, Spacer} from '../../components';

import { AppContext } from '../../contexts/app';

const Home = ({navigation}) => {

  const context = useContext(AppContext);

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
      </Box>

     <Box align="center" fluid justify="flex-end">
     <Button block onPress={() => navigation.navigate('SignIn')}>
        <Text color="light">Sig In my account</Text>
      </Button>
      <Spacer size="20px" />
      <Text onPress={() => navigation.navigate('SignUp')} underline color="light">
        Create new account
      </Text>
      <Spacer size="70px"/>
     </Box>
   </Box>
    </>

  );

};

export default Home;
