import React, { useContext } from 'react';
import { StatusBar, FlatList, View, Text } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import { RowItem, RowSeperator } from '../../components/row-item';

import { COLORS } from '../../styles';

import CURRENCIES from '../../utils/currencies.json';
import { propTypes } from './prop-types';
import { ConversionContext } from '../../utils';

export const CurrencyList = ({ navigation, route = {} }) => {
  const { baseCurrency, quoteCurrency, setBaseCurrency, setQuoteCurrency } = useContext(
    ConversionContext,
  );
  const insets = useSafeArea();
  const params = route.params || {};
  const { isBaseCurrency } = params;
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
          let selected = false;

          if (isBaseCurrency && item === baseCurrency) {
            selected = true;
          } else if (!isBaseCurrency && item === quoteCurrency) {
            selected = true;
          }
          return (
            <RowItem
              text={item}
              onPress={() => {
                if (isBaseCurrency) {
                  setBaseCurrency(item);
                } else {
                  setQuoteCurrency(item);
                }
                navigation.pop();
              }}
              rightIcon={selected && <Text>&#10004;</Text>}
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
