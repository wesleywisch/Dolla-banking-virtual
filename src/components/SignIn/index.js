import React from "react";

import { 
  Container, 
  Form, 
  FormButton, 
  FormContent, 
  FormInput, 
  FormLabel, 
  FormP, 
  FormWrap, 
  Icon, 
  Text 
} from './styles';

export function SignIn() {
  return (
    <Container>
      <FormWrap>
        <Icon to='/'>dolla</Icon>

        <FormContent>
          <Form action="#">
            <FormP>Sign in to your account</FormP>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />

            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />

            <FormButton type="submit">Continue</FormButton>

            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
} 