import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import { Example } from './Example';

describe('Example', () => {
  it('should render', () => {
    render(<Example />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<Example />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
