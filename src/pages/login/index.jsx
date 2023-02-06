import { useToggle, upperFirst } from "@mantine/hooks"

import Link from "next/link";
import {
  Container,
  Row,
  Col
} from "reactstrap";
import IconGoogle from "@/shared/common/IconGoogle";
import IconFacebook from "@/shared/common/IconFacebook";

const Index = () => {
  const [type, toggle] = useToggle(["login", "register"])


  return (
    <div className="page">
      <Container>
  <Row>
    <Col className="m-auto">
          {/* Information */}
          <div className="col-lg-6 order-1">
            <div className="p-4 p-sm-7">
              {/* Logo */}
              <a href="index.html">
                <img
                  className="h-50px mb-4"
                  src="assets/images/logo-icon.svg"
                  alt="logo"
                />
              </a>
              {/* Title */}
              <h1 className="mb-2 h3">Welcome back</h1>
              <p className="mb-0">
                New here?<a href="sign-up.html"> Create an account</a>
              </p>
              {/* Form START */}
              <form className="mt-4 text-start">
                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Enter email id</label>
                  <input type="email" className="form-control" />
                </div>
                {/* Password */}
                <div className="mb-3 position-relative">
                  <label className="form-label">Enter password</label>
                  <input
                    className="form-control fakepassword"
                    type="password"
                    id="psw-input"
                  />
                  <span className="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
                    <i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2" />
                  </span>
                </div>
                {/* Remember me */}
                <div className="mb-3 d-sm-flex justify-content-between">
                  <div>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberCheck"
                    />
                    <label className="form-check-label" htmlFor="rememberCheck">
                      Remember me?
                    </label>
                  </div>
                  <a href="forgot-password.html">Forgot password?</a>
                </div>
                {/* Button */}
                <div>
                  <button type="submit" className="btn btn-primary w-100 mb-0">
                    Login
                  </button>
                </div>
                {/* Divider */}
                <div className="position-relative my-4">
                  <hr />
                  <p className="small bg-mode position-absolute top-50 start-50 translate-middle px-2">
                    Or sign in with
                  </p>
                </div>
                {/* Google and facebook button */}
                <div className="vstack gap-3">
                  <a href="#" className="btn btn-light mb-0">
                    <i className="fab fa-fw fa-google text-google-icon me-2" />
                    Sign in with Google
                  </a>
                  <a href="#" className="btn btn-light mb-0">
                    <i className="fab fa-fw fa-facebook-f text-facebook me-2" />
                    Sign in with Facebook
                  </a>
                </div>
              </form>
              {/* Form END */}
            </div>
          </div>
    </Col>
  </Row>


    </Container>
    </div>
  )
}
export default Index;