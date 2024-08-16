import React from 'react';
import Button from './Button.tsx';
import {renderWithProviders} from '@utils';

describe('<Button />', () => {
  it('should render correctly', () => {
    const {getByTestId, toJSON} = renderWithProviders(<Button label={'Test'} />);

    expect(getByTestId('button-container')).toBeDefined();
    expect(toJSON()).toMatchSnapshot();
  });
});
