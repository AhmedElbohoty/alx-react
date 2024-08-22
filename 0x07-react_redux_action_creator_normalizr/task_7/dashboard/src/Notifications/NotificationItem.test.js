import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import NotificationItem from './NotificationItem';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('NotificationItem tests', () => {
  test('Rendering without crashing', () => {
    render(<NotificationItem type="default" value="test" />);
  });

  test('Rendering with type and value props', () => {
    render(<NotificationItem type="default" value="test" />);
    const li = screen.getByRole('listitem');

    expect(li).toHaveAttribute('data-notification-type', 'default');
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('Rendering with html prop', () => {
    const htmlProp = { __html: '<p>test</p>' };
    render(<NotificationItem type="default" html={htmlProp} />);

    const li = screen.getByRole('listitem');
    within(li).getByText('[object Object]');
  });
});

describe('markAsRead function tests', () => {
  test('markAsRead function tests', () => {
    const spy = jest.fn();
    render(
      <NotificationItem
        type="default"
        value="test item"
        markAsRead={spy}
        id={1}
      />
    );
    fireEvent.click(screen.getByRole('listitem'));

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
