import React from 'react';
import { Text } from 'react-native';

import { RowItem } from '../../../components/row-item';

export const FlatListItem = (
  item,
  navigation,
  isBaseCurrency,
  baseCurrency,
  quoteCurrency,
  setBaseCurrency,
  setQuoteCurrency,
) => {
  let selected = false;
  if (isBaseCurrency && item.item === baseCurrency) {
    selected = true;
  } else if (!isBaseCurrency && item.item === quoteCurrency) {
    selected = true;
  }

  const navigateBack = () => {
    if (isBaseCurrency) {
      setBaseCurrency(item.item);
    } else {
      setQuoteCurrency(item.item);
    }
    navigation.pop();
  };

  return (
    <RowItem
      text={item.item}
      onPress={navigateBack}
      rightIcon={selected && <Text>&#10004;</Text>}
    />
  );
};
