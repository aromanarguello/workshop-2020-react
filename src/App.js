import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import { Button } from 'antd';

export const Text = styled.p`
  color: ${(props) => (props.color.counter < 2 ? 'red' : 'blue')};
`;

const StyledButton = styled(Button)`
  border: 1px solid red;
  background-color: blue;
`;

const App = (props) => {
  const [state] = useState({ counter: 0 });

  return (
    <div>
      <Text color={state} className="text">
        counter: {state.counter}
      </Text>
      {/* eslint-disable-next-line */}
      <StyledButton onClick={props.onClick}>+</StyledButton>
    </div>
  );
};

export default hot(module)(App);
