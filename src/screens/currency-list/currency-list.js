import React from 'react';
import { StatusBar, FlatList } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import { FlatListItem } from './flat-list-item';
import { RowSeperator } from '../../components/row-item';

import { propTypes } from './prop-types';

import CURRENCIES from '../../utils/currencies.json';

import { COLORS } from '../../styles';
import { StyledWrapper, StyledFooterComponent } from './styled';

export const CurrencyList = ({ navigation, route: { params } }) => {
  const insets = useSafeArea();
  const { isBaseCurrency } = params;

  const ListFooterComponent = () => <StyledFooterComponent insets={insets} />;

  return (
    <StyledWrapper>
      <StatusBar barStyle='dark-content' backgroundColor={COLORS.white} />
      <FlatList
        data={CURRENCIES}
        renderItem={(item) => FlatListItem(item, navigation, isBaseCurrency)}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={RowSeperator}
        ListFooterComponent={ListFooterComponent}
      />
    </StyledWrapper>
  );
};

CurrencyList.propTypes = propTypes;
