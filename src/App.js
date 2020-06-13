import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

const Form = styled.form`
  border: 1px solid red;
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const FormItem = styled.div`
  margin: 10px 0;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-left: 110px;
`;

const Error = styled.p`
  color: red;
`;

export const validateInput = (str = '') => str.includes('@');

function App() {
  const [formData, setFormData] = useState({});

  const handleOnChange = ({ target: { name, value } }) => setFormData((prev) => ({ ...prev, [name]: value }));

  const onFormSubmit = (e) => {
    e.preventDefault();
    // login();
  };

  return (
    <Form name="login-form" onSubmit={(e) => onFormSubmit(e)} data-testid="form">
      <FormItem>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" onChange={(e) => handleOnChange(e)} />
      </FormItem>
      {formData.email && !validateInput(formData.email) ? <Error title="error message">Email not valid</Error> : null}
      <FormItem>
        <label htmlFor="password">Password:</label>
        <input name="password" type="password" onChange={(e) => handleOnChange(e)} />
      </FormItem>
      <Button type="submit">submit</Button>
    </Form>
  );
}

export default hot(module)(App);
