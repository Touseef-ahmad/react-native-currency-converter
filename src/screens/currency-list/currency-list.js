import React, { useContext } from 'react';
import { StatusBar, FlatList, Text } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import { RowItem, RowSeperator } from '../../components/row-item';

import { ItemPropTypes, propTypes } from './prop-types';

import CURRENCIES from '../../utils/currencies.json';
import { ConversionContext } from '../../utils';

import { COLORS } from '../../styles';
import { StyledWrapper, StyledFooterComponent } from './styled';

export const CurrencyList = ({ navigation, route: { params } }) => {
  const { baseCurrency, quoteCurrency, setBaseCurrency, setQuoteCurrency } = useContext(
    ConversionContext,
  );
  const insets = useSafeArea();
  const { isBaseCurrency } = params;

  const Item = ({ item }) => {
    let selected = false;
    if (isBaseCurrency && item === baseCurrency) {
      selected = true;
    } else if (!isBaseCurrency && item === quoteCurrency) {
      selected = true;
    }
    const navigateBack = () => {
      if (isBaseCurrency) {
        setBaseCurrency(item);
      } else {
        setQuoteCurrency(item);
      }
      navigation.pop();
    };
    return (
      <RowItem text={item} onPress={navigateBack} rightIcon={selected && <Text>&#10004;</Text>} />
    );
  };
  Item.propTypes = ItemPropTypes;

  const ListFooterComponent = () => <StyledFooterComponent insets={insets} />;

  return (
    <StyledWrapper>
      <StatusBar barStyle='dark-content' backgroundColor={COLORS.white} />
      <FlatList
        data={CURRENCIES}
        renderItem={Item}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={RowSeperator}
        ListFooterComponent={ListFooterComponent}
      />
    </StyledWrapper>
  );
};

CurrencyList.propTypes = propTypes;
