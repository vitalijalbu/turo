import { useState } from "react";
import Link from "next/link";
import { Container, Row, Col, Button, Input, FormGroup } from "reactstrap";
import IconGoogle from "@/shared/common/IconGoogle";
import IconFacebook from "@/shared/common/IconFacebook";
import { authAction } from "@/lib/graphql/mutations/auth";

const Index = () => {
  const [form, setFormValues] = useState({});
  console.log('form', form)
    /* Input change parent state */
    const handleOnChange = (e) => {
      setFormValues((prevState) => {
        return { ...prevState, [e.target.name]: e.target.value };
      });
    };

  return (
    <div className="page">
      <Container>
        <Row>
          <Col className="mx-auto" md={4}>
              {/* Title */}
              <h1 className="mb-2 h3">Crea un account</h1>
              {/* Google and facebook button */}
              <div className="vstack gap-3">
                <Button outline>
                  <IconGoogle />
                  Accedi con Google
                </Button>
                <Button outline>
                  <IconFacebook />
                  Accedi con Facebook
                </Button>
              </div>
              {/* Divider */}
              <div className="position-relative my-4">
                <hr />
                <p className="small bg-mode position-absolute top-50 start-50 translate-middle px-2">
                  Oppure accedi
                </p>
              </div>

              {/* Form START */}
              <form className="mt-4 text-start">
                <FormGroup>
                  <Row>
                    <Col>
                    <label className="form-label">Nome</label>
                    <Input type="email" name="email" className="form-control" onChange={handleOnChange}/>
                    </Col>
                    <Col>
                    <label className="form-label">Cognome</label>
                    <Input type="email" name="email" className="form-control" onChange={handleOnChange}/>
                    </Col>
                  </Row>
                </FormGroup>
                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <Input type="email" name="email" className="form-control" onChange={handleOnChange}/>
                </div>
                {/* Password */}
                <div className="mb-3 position-relative">
                  <label className="form-label">Password</label>
                  <Input
                    className="form-control"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    id="psw-input"
                  />
                </div>
                 {/* Password */}
                 <div className="mb-3 position-relative">
                  <label className="form-label">Conferma Password</label>
                  <Input
                    className="form-control"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    id="psw-input"
                  />
                </div>
                {/* Remember me */}
                <div className="mb-3 d-sm-flex justify-content-between">
                  <div>
                    <Input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberCheck"
                    />
                    <label className="form-check-label" htmlFor="rememberCheck">
                      Accetto i temrmini e le condizioni
                    </label>
                  </div>
                </div>
                {/* Button */}
                <div>
                  <button type="submit" className="btn btn-primary w-100 mb-0">
                    Login
                  </button>
                </div>
                <p className="mt-3">
                  Hai già un account ?<Link href="/login"> Accedi qui</Link>
                </p>
              </form>
              {/* Form END */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Index;
