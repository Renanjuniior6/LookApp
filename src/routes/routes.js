/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Feed from '../pages/Feed';
import Marketplace from '../pages/Marketplace';
import Product from '../pages/Marketplace/product';
import Category from '../pages/Marketplace/category';

import { colors } from '../styles/theme.json';
import util from '../util';
import { Title } from '../components';

const CustomDrawerComponent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Title bold color="light" variant="big" hasPadding>
        LOOKAPP
      </Title>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerComponent = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Feed"
      drawerContent={(props) => <CustomDrawerComponent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: util.toAlpha(colors.primary, 70),
        drawerActiveTintColor: colors.light,
        drawerInactiveTintColor: util.toAlpha(colors.light, 60),
        drawerStyle: {
          backgroundColor: colors.black,
        },
      }}
    >
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => <Icon name="people" color={color} />,
        }}
        name="For You"
        component={Feed}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => <Icon name="tag" color={color} />,
        }}
        name="Marketplace"
        component={Marketplace}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => <Icon name="basket" color={color} />,
        }}
        name="Orders"
        component={Feed}
      />
    </Drawer.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Feed"
          component={DrawerComponent}
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="Category"
          component={Category}
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="Product"
          component={Product}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
