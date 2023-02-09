import { useState } from "react";
import Link from "next/link";
import { Container, Row, Col, Button, Input } from "reactstrap";
import IconGoogle from "@/shared/common/IconGoogle";
import IconFacebook from "@/shared/common/IconFacebook";
import { authAction } from "@/lib/graphql/mutations/auth";

const Index = () => {
  const [form, setFormValues] = useState({});
  console.log("form", form);
  /* Input change parent state */
  const handleOnChange = (e) => {
    setFormValues((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="page">
      <div className="page-content py-5">
        <Container>
          <Row>
            <Col className="mx-auto" md={4}>
              {/* Title */}
              <h3 className="mb-4 text-center">Accedi al tuo account</h3>
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
                  Oppure
                </p>
              </div>

              {/* Form START */}
              <form className="mt-4 text-start">
                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <Input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={handleOnChange}
                  />
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
                {/* Remember me */}
                <div className="mb-3 d-sm-flex justify-content-between">
                  <div>
                    <Input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberCheck"
                    />
                    <label className="form-check-label" htmlFor="rememberCheck">
                      Remember me?
                    </label>
                  </div>
                  <Link href="/forgot-password">Password diemnticata?</Link>
                </div>
                {/* Button */}
                <div>
                  <button type="submit" className="btn btn-primary w-100 mb-0">
                    Login
                  </button>
                </div>
                <p className="mt-3">
                  Nom hai un account ?<Link href="/register"> Creane uno</Link>
                </p>
              </form>
              {/* Form END */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Index;
