import { GoogleLogin } from 'react-google-login';

export const Google: React.FC = () => {

  const responseGoogle = (response: any) => {
    console.log('gg login', response);
  }

  return (
    <GoogleLogin
      // secret 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
      clientId="172382248983-ptorgtop1761aih2qalaadgbf8p4856m.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}