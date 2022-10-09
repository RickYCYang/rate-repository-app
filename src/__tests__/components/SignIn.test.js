import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NativeRouter } from 'react-router-native';
import SignIn from '../../components/SignIn';
import useSignIn from '../../hooks/useSignIn';
jest.mock('../../hooks/useSignIn');

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const signInMock = jest.fn();
      useSignIn.mockImplementation(() => [signInMock]);

      // render the SignInContainer component, fill the text inputs and press the submit button
      const { getByPlaceholderText, getByText, debug } = render(
        <NativeRouter>
          <SignIn />
        </NativeRouter>
      );
      debug();
      const user = {
        username: 'rick',
        password: 'password',
      };
      fireEvent.changeText(getByPlaceholderText('Username'), user.username);
      fireEvent.changeText(getByPlaceholderText('Password'), user.password);
      fireEvent.press(getByText('Sign in'));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(signInMock).toHaveBeenCalledTimes(1);
        expect(signInMock).toHaveBeenCalledWith(user);
      });
    });
  });
});
