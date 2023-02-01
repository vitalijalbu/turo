import React, { useState, useRef } from "react";
import {
  Views,
  View,
  Page,
  Navbar,
  BlockTitle,
  Toolbar,
  Popup,
  NavRight,
  NavTitle,
  Button,
  List,
  ListItem,
  ListInput,
  AccordionContent,
  Block,
  Range,
  AccordionItem,
  Icon,
  Row,
  Col,
  f7,
} from "framework7-react";
import IconGoogle from '@/components/Common/IconGoogle';
import IconFacebook from '@/components/Common/IconFacebook';

const FiltersPopup = ({ opened, close }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginScreenOpened, setLoginScreenOpened] = useState(false);

  const signIn = () => {
    f7.dialog.alert(`Username: ${username}<br>Password: ${password}`, () => {
      f7.loginScreen.close();
    });
  };


  return (
    <Popup id="auth-popup" opened={opened} onPopupClosed={close}>
      <Views>
      <View>
      <Page>
        <Navbar>
          <NavRight>
            <Button black onClick={close} iconF7="xmark" className="close"/>
          </NavRight>
          <NavTitle>Accedi al tuo profilo</NavTitle>
        </Navbar>
        <Block>
          <Button outline color="black" className='google_btn'><IconGoogle/> Continua con Google</Button>
  </Block>    
  <Block>
          <Button outline color="black" className='fb_btn'><IconFacebook/> Continua con Facebook</Button>
  </Block>
      <Block>
        <Row tag="div">
          <Col width="100">
          <List noHairlinesMd>
  <ListInput
    label="E-mail"
    floatingLabel
    type="email"
    placeholder="Your e-mail"
    clearButton
  />

  <ListInput
    label="Password"
    floatingLabel
    type="password"
    placeholder="Your password"
    clearButton
  />
  </List>
          </Col>
        </Row>
      </Block>
      <Block>
        <span className="text-muted">Facendo clic su Registrati oppure Continua con Google, Facebook, accetti le <a href="/legal/terms">Condizioni d'uso</a> e l'Informativa sulla <a href="/legal/privacy">privacy</a> di Resthotels. È possibile che Resthotels ti invii delle comunicazioni; puoi modificare le tue preferenze nelle impostazioni dell'account. Non pubblicheremo mai senza il tuo permesso.</span>
      </Block>
      </Page>
      </View>
      </Views>
    </Popup>
  );
};

export default FiltersPopup;
