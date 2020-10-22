import React, { useEffect, useState, useContext } from 'react';
import { ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { ConversionInput, Button, KeyboardSpacer } from '../../components';
import {
  StyledContentWrapper,
  StyledErrorText,
  StyledErrorWrapper,
  StyledHeader,
  StyledInputContainer,
  StyledLogo,
  StyledLogoBackground,
  StyledLogoContainer,
  StyledText,
  StyledTextHeader,
  StyledWrapper,
} from './styled';
import { fetchExchangeRates } from '../../api';
import { COLORS } from '../../styles';
import { BACKGROUND_IMAGE, LOGO, ConversionContext } from '../../utils';
import { propTypes } from './prop-types';

export const Home = ({ navigation }) => {
  const {
    baseCurrency,
    conversionRate,
    quoteCurrency,
    setConversionRate,
    swapCurrencies,
  } = useContext(ConversionContext);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const goToScreen = (screenName, isBaseCurrency) => {
    navigation.push(screenName, {
      title: 'Base Currency',
      isBaseCurrency,
    });
  };
  const getCoversionRate = async () => {
    const data = await fetchExchangeRates(baseCurrency, quoteCurrency);
    if (data.message) {
      setError(true);
      setErrorMessage(data.message);
      setConversionRate(0);
    } else {
      setConversionRate(data.rates[quoteCurrency]);
    }
  };
  useEffect(() => {
    getCoversionRate();
  }, [baseCurrency, quoteCurrency]);

  return (
    <StyledWrapper>
      <StatusBar barStyle='light-content' backgroundColor={COLORS.blue} />
      <StyledHeader>
        <TouchableOpacity onPress={() => navigation.push('Options')}>
          <Entypo name='cog' size={32} color='white' />
        </TouchableOpacity>
      </StyledHeader>
      <ScrollView scrollEnabled={scrollEnabled}>
        <StyledContentWrapper>
          <StyledLogoContainer>
            <StyledLogoBackground resizeMode='contain' source={BACKGROUND_IMAGE} />
            <StyledLogo resizeMode='contain' source={LOGO} />
          </StyledLogoContainer>
          <StyledTextHeader>Currency Converter</StyledTextHeader>
          <StyledInputContainer>
            <ConversionInput
              onButtonPress={() => goToScreen('CurrencyList', true)}
              onChangeText={(text) => setValue(text)}
              text={baseCurrency}
              value={value}
              keyboardType='numeric'
            />
            <ConversionInput
              isEditable={false}
              keyboardType='numeric'
              onButtonPress={() => goToScreen('CurrencyList', false)}
              text={quoteCurrency}
              value={value && `${(parseFloat(value) * conversionRate).toFixed(2)}`}
            />
          </StyledInputContainer>
          <StyledText>
            {`1 ${baseCurrency} equals ${conversionRate.toFixed(2)} ${quoteCurrency}`}
          </StyledText>
          <Button onButtonPress={() => swapCurrencies()} text='Reverse currencies' />
          {error && (
            <StyledErrorWrapper>
              <MaterialIcons color={COLORS.white} name='error' size={20} />
              <StyledErrorText>{errorMessage}</StyledErrorText>
            </StyledErrorWrapper>
          )}
        </StyledContentWrapper>
        <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
      </ScrollView>
    </StyledWrapper>
  );
};

Home.propTypes = propTypes;
