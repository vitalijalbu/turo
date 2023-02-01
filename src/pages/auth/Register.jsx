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

const Register = (f7router) => {
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
          <Button iconF7="logo_google" outline className='google_btn'>Continua con Google</Button>
  </Block>    
  <Block>
          <Button iconF7="logo_facebook" outline className='fb_btn'>Continua con Facebook</Button>
  </Block>
  <LoginScreenTitle>Accedi al tuo account</LoginScreenTitle>
  <List form>
    <ListInput
      validate
      clearButton
      label="nome"
      type="text"
      name="firstName"
      placeholder="Nome"
      value={form?.email || ''}
      onInput={onChange}
      required
    /> 
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
    <ListInput
      validate
      clearButton
      label="Conferma password"
      type="password"
      name="password"
      placeholder="Conferma password"
      value={form?.password || ''}
      onInput={onChange}
      required
    />
  </List>
   <Block>
    <Button fill large onClick={handleLogin} preloader loading={loading} className={loading && 'disabled'}>Registrati</Button>
    </Block>
  <Block className="text-align-center">
        <Link href="/signin">Torna al login</Link>
      </Block>
    </Page>
  );
};
export default Register;