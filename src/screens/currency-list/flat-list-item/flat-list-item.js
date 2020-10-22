import React, { useContext } from 'react';
import { Text } from 'react-native';

import { RowItem } from '../../../components/row-item';

import { propTypes } from './prop-types';

import { ConversionContext } from '../../../utils';

export const FlatListItem = ({ item, isBaseCurrency, navigation }) => {
  const { baseCurrency, quoteCurrency, setBaseCurrency, setQuoteCurrency } = useContext(
    ConversionContext,
  );

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

FlatListItem.propTypes = propTypes;
