import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  FormText,
  Input,
  UncontrolledAlert
} from "reactstrap";
import { IconMessageCircle, IconBookmark } from "@tabler/icons-react";
import SideNav from "@/shared/settings/side-nav";
import { getProfile } from "@/lib/graphql/queries/user";

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const [form, setFormValues] = useState({});
  const [error, setError] = useState('');
  const [alert, setAlert] = useState(null);


  /* Input change parent state */
  const handleOnChange = (e) => {
    setFormValues((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    getProfile()
    .then((data) => {
      setFormValues(data?.user);
      console.log('🐝 API response ACCOUNT', data)
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const handleUpdate = (event, values) => {
    setLoading(true);
    console.log('form', form);
    /*authAction(form)
      .then(() => {
        window.location.replace('/');
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false)
      });*/
  };

  return (
    <div className="page">
      <div className="page-content">
        
        <Container>
          <div className="row g-5">
            <div className="col-md-4">
              <div className="position-sticky" style={{ top: "2rem" }}>
                <div className="p-4">
                  <SideNav />
                </div>
              </div>
            </div>
            <Col md={8}>
            {!!alert && <UncontrolledAlert color={alert.color}>{alert.message}</UncontrolledAlert>}
              <h3 className="pb-4 mb-4 border-bottom">Impostazioni account</h3>
              <Form>
                <FormGroup>
                  <Row>
                    <Col>
                      <Label for="firstName">Nome</Label>
                      <Input id="firstName" name="firstName" type="text" value={form.firstName}/>
                    </Col>
                    <Col>
                      <Label for="lastName">Cognome</Label>
                      <Input id="lastName" name="lastName" type="text"value={form.lastName} />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Label for="email">Indirizzo email</Label>
                  <Input id="email" name="email" type="email" value={form.email}/>
                </FormGroup>
                <FormGroup>
                  <Label for="v">Telefono</Label>
                  <Input id="phoneNumber" name="phoneNumber" type="num" value={form.phoneNumber}/>
                </FormGroup>

                <hr />
                <div className="d-flex justify-content-end">
                  <Button type="button" color="primary" disabled={loading} className={loading ? 'btn-loading' : ''} onClick={handleUpdate}>
                    Salva
                  </Button>
                </div>
              </Form>
            </Col>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Settings;
