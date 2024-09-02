import React from 'react';
import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';

import BodySection from './BodySection';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('BodySection tests', () => {
  test('should render without crashing', () => {
    render(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    expect(screen.getByText('test title')).toBeInTheDocument();
    expect(screen.getByText('test children node')).toBeInTheDocument();
  });
});
