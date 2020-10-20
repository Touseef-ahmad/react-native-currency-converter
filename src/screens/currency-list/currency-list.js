import React from 'react';
import { StatusBar, FlatList, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useSafeArea } from 'react-native-safe-area-context';

import { RowItem, RowSeperator } from '../../components/row-item';

import { COLORS } from '../../styles';

import CURRENCIES from '../../utils/currencies.json';
import { propTypes } from './prop-types';

export const CurrencyList = ({ navigation, route = {} }) => {
  const insets = useSafeArea();
  const params = route.params || {};
  const { activeCurrency, onChange } = params;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <StatusBar barStyle='dark-content' backgroundColor={COLORS.white} />
      <FlatList
        data={CURRENCIES}
        renderItem={({ item }) => {
          const selected = item === activeCurrency;
          return (
            <RowItem
              text={item}
              onPress={() => {
                onChange(item);
                navigation.pop();
              }}
              rightIcon={selected && <Entypo name='check' />}
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeperator />}
        ListFooterComponent={() => <View style={{ paddingBottom: insets.bottom }} />}
      />
    </View>
  );
};

CurrencyList.propTypes = propTypes;
