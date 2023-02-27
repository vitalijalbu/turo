import { useState } from "react";
import Link from "next/link";
import { Container, Row, Col, Button, Form, Input, UncontrolledAlert  } from "reactstrap";
import IconGoogle from "@/shared/components/IconGoogle";
import { IconBrandFacebook } from "@tabler/icons-react";
import { authAction } from "@/lib/graphql/mutations/auth";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [form, setFormValues] = useState({});
  const [error, setError] = useState('');


  /* Input change parent state */
  const handleOnChange = (e) => {
    setFormValues((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleAuth = (event, values) => {
    setLoading(true);
    authAction(form)
      .then(() => {
        window.location.replace('/');
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false)
      });
  };

  return (
    <div className="page">
      <div className="page-content py-5">
        <div className="container">
          <Row>
            <Col className="mx-auto" md={4}>
              {/* Title */}
              {!!error && <UncontrolledAlert color="danger">{error}</UncontrolledAlert>}
              <h3 className="mb-4 text-center">Ti diamo il benvenuto su Resthotels</h3>
              {/* Google and facebook Button */}
              <div className="vstack gap-3">
                <Button outline>
                  <IconGoogle />
                  Continua con Google
                </Button>
                <Button style={{background: "#3b5998"}}>
                  <IconBrandFacebook />
                  Continua con Facebook
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
              <Form className="mt-4 text-start">
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
                  <Link href="/forgot-password" className="color-link">Password dimenticata?</Link>
                </div>
                {/* Button */}
                <div>
                  <Button block onClick={handleAuth} disabled={loading}>
                    Accedi
                  </Button>
                </div>
                <p className="mt-3">
                  Nom hai un account ?<Link href="/register" className="color-link"> Creane uno</Link>
                </p>
              </Form>
              {/* Form END */}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default Index;
