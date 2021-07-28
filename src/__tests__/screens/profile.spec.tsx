import React from 'react';
import { render } from '@testing-library/react-native';

import { Profile } from '../../screens/Profile';

describe('Profile', () => {
  it('Should be able show correctly user input name placeholder', () => {
    const { getByPlaceholderText } = render(<Profile />);
  
    const inputName = getByPlaceholderText('Nome');
  
    expect(inputName).toBeTruthy();
  });
  
  it('Should be load user data', () => {
    const { getByTestId } = render(<Profile />);
  
    const inputName = getByTestId('input-name');
    const inputSurname = getByTestId('input-surname');
  
    expect(inputName.props.value).toEqual('Rafael');
    expect(inputSurname.props.value).toEqual('Quartaroli');
  });
  
  it('Should exist title render correctly', () => {
    const { getByTestId } = render(<Profile />);
  
    const textTitle = getByTestId('text-title');
  
    expect(textTitle.props.children).toContain('Perfil');
  });
  
});
