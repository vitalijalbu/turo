import React, { useState, useEffect } from 'react';
import {
  Page,
  LoginScreenTitle,
  List,
  ListInput,
  ListButton,
  Block,
  Row,
  Col,
  Button,
  Link,
  f7
} from 'framework7-react';
//import { userLogin } from '../../actions/user';
//import IconGoogle from '../components/Common/IconGoogle';
//import IconFacebook from '../components/Common/IconFacebook';

const Login = (f7router) => {
  const [form, setFormValues] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  /* Input change parent state */
  const onChange = (e) => {
    e.preventDefault();
      setFormValues((prevState) => {
          return { ...prevState, [e.target.name]: e.target.value };
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = f7.input.validateInputs('#loginForm');
    if (isValid === true ){
    setLoading(true);
    userLogin({...form})
      .then((data) => {
        f7.toast.show({text: data.message, horizontalPosition: 'center', closeTimeout: 2500, cssClass: 'success'});
        f7router.navigate('/');
      })
      .catch((err) => {
        if (err?.message) {
          f7.toast.show({text: err.message, horizontalPosition: 'center', closeTimeout: 2500, cssClass: 'danger'});
        }
      }).finally(() => {
        setLoading(false);
      });
    }else{
      alert('invalid');
    }
  };

  return (
    <Page loginScreen>
        <Block>
          <Button outline color="black" className='google_btn'>Continua con Google</Button>
  </Block>    
  <Block>
          <Button outline color="black" className='fb_btn'> Continua con Facebook</Button>
  </Block>
  <LoginScreenTitle>Accedi al tuo account</LoginScreenTitle>
  <List form>
    <ListInput
      validate
      clearButton
      label="Email"
      type="email"
      name="email"
      placeholder="Email"
      value={form?.email || ''}
      onInput={onChange}
      required
    />
    <ListInput
      validate
      clearButton
      label="Password"
      type="password"
      name="password"
      placeholder="Password"
      value={form?.password || ''}
      onInput={onChange}
      required
    />
  </List>
  <Block className="text-align-center">
        <Link href="/forgot-password">Password dimenticata?</Link>
      </Block>
   <Block>
    <Button fill large onClick={handleLogin} preloader loading={loading} className={loading && 'disabled'}>Accedi</Button>
    </Block>
      <Block className="text-align-center">
        <Link href="/signup">Crea un account</Link>
      </Block>
      
    </Page>
  );
};
export default Login;