/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import { FlatListItem } from './flat-list-item';
import { RowSeperator } from '../../components/row-item';

import { propTypes } from './prop-types';

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

  const ListFooterComponent = () => <StyledFooterComponent insets={insets} />;
  const getFlatListItem = (item) => FlatListItem(
    item,
    navigation,
    isBaseCurrency,
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
  );

  return (
    <StyledWrapper>
      <StatusBar barStyle='dark-content' backgroundColor={COLORS.white} />
      <FlatList
        data={CURRENCIES}
        renderItem={getFlatListItem}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={RowSeperator}
        ListFooterComponent={ListFooterComponent}
      />
    </StyledWrapper>
  );
};

CurrencyList.propTypes = propTypes;
