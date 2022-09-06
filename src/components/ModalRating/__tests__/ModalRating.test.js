import React from 'react';
import {render} from '@testing-library/react-native';
import ModalRating from '..';
import {Modal} from 'react-native';

describe('Modal Rating Tests', () => {
  it('should render', () => {
    render(<ModalRating />);
  });
  it('should render a single title text', () => {
    const {getAllByText} = render(<ModalRating />);

    expect(getAllByText(/Faça a sua avaliação/).length).toBe(1);
    // console.log('getAllByText', getAllByText);
  });
});
