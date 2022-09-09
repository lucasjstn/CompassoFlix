import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import BtnGoBack from '../index';
import {createNavigationContainerRef} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

describe('Button Go Back', () => {
  it('should render', () => {
    render(<BtnGoBack />);
  });
});
