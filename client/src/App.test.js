import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('renders without crashing', () => {
  render(<App />)
})

test('darkMode renders to the UI', () => {
  const { getByText } = render(<App />)

  getByText(/darkmode/i)
})

test('navBar is rendered', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/navbar/i)
})


