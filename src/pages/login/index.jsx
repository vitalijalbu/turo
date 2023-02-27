import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Center,
  Text,
  Heading,
} from "@chakra-ui/react";
import IconFacebook from "@/shared/components/icons/IconFacebook";
import IconGoogle from "@/shared/components/IconGoogle";
import { authAction } from "@/lib/graphql/mutations/auth";

const Index = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [form, setFormValues] = useState({});
  const [error, setError] = useState('');


  /* Input change parent state */
  const handleOnChange = (e) => {
    setFormValues((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = (value) => {
    setRegistrationType(value);
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
          <div className="row">
            <div className="col-md-4 col-xs-12 mx-auto">
              <h3 className="mb-4 text-center">Ti diamo il benvenuto su Resthotels</h3>
              {/* Google and facebook Button */}
              <div className="vstack gap-3">
                 {/* Facebook */}
       <Button w={'full'} colorScheme={'facebook'} leftIcon={<IconFacebook />} mb="2">
          <Center>
            <Text>Continua con Facebook</Text>
          </Center>
        </Button>

        {/* Google */}
        <Button w={'full'} variant={'outline'} leftIcon={<IconGoogle />}>
          <Center>
            <Text>Accedi con Google</Text>
          </Center>
        </Button>
              </div>
              {/* Divider */}
              <div className="position-relative my-4">
                <hr />
                <p className="small bg-white position-absolute top-50 start-50 translate-middle px-2">
                  Oppure
                </p>
              </div>

              {/* Form START */}
              <form onSubmit={handleSubmit(onSubmit)}>
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
                  <Button w={'full'} onClick={handleAuth} colorScheme={'blue'} disabled={loading}>
                    Accedi
                  </Button>
                </div>
                <p className="mt-3">
                  Nom hai un account ?<Link href="/register" className="color-link"> Creane uno</Link>
                </p>
              </form>
              {/* Form END */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
