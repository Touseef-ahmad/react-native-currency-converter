import React from 'react';
import { ScrollView, Linking, StatusBar } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { RowItem, RowSeperator } from '../../components';
import { StyledSafeAreaView } from './styled';
import { COLORS } from '../../styles';

const openURL = (url) => {
  Linking.openURL(url).catch(() => null);
};
export const Options = () => (
  <StyledSafeAreaView>
    <StatusBar barStyle='dark-content' backgroundColor={COLORS.white} />

    <ScrollView>
      <RowItem
        text='Themes'
        rightIcon={<Entypo color={COLORS.blue} name='chevron-right' size={20} />}
        onPress={() => null}
      />
      <RowSeperator />
      <RowItem
        text='React Native Basics'
        rightIcon={<Entypo color={COLORS.blue} name='export' size={20} />}
        onPress={() => openURL('https://reactnative.dev/')}
      />
      <RowSeperator />
      <RowItem
        text='Expo.io'
        rightIcon={<Entypo color={COLORS.blue} name='export' size={20} />}
        onPress={() => openURL('https://expo.io/')}
      />
    </ScrollView>
  </StyledSafeAreaView>
);
