import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Button,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  FormLabel,
  Input,
  Switch,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { IconMessageCircle, IconBookmark } from "@tabler/icons-react";
import SideNav from "@/shared/settings/side-nav";
import { getProfile } from "@/lib/graphql/queries/user";
import { useForm, Controller } from "react-hook-form";
import confirm from '@/shared/components/confirm/';

const Security = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (data) => {
    setSubmitting(true);
    // Submit data to server or perform other actions here
    console.log(data);
    setSubmitting(false);
  };


    /* Confirm */
    const handleDelete = () => {
      confirm({
        title: 'Sei sicuro di voler eliminare l\'account?',
        message: 'Tutti i tuo idati personali verranno rimossi, annunci etc... Non saranno più recuperabili',
        cancelText: 'Annulla',
        confirmText: 'Procedi',
        confirmdivor: 'danger',
      }).then((confirmed) => {
        if (confirmed) {
          removeSession();
          window.location.href="/";
        }
      });
    };
  

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
        <div className="container">
          <div className="row g-5">
            <div className="col-md-4">
              <div className="position-sticky" style={{ top: "2rem" }}>
                <div className="p-4">
                  <SideNav />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <h1 className="section-title">Password e sicurezza</h1>
              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          type="email"
          id="email"
          placeholder="Inserisci la tua email"
          {...register("email", {
            required: "Campo obbligatorio",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Email non valida",
            },
          })}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
                <div className="row">
                <div className="col">
      <FormControl isInvalid={errors.nome}>
        <FormLabel htmlFor="nome">Nome</FormLabel>
        <Input
          type="text"
          id="nome"
          placeholder="Inserisci il tuo nome"
          {...register("nome", { required: "Campo obbligatorio" })}
        />
        <FormErrorMessage>{errors.nome?.message}</FormErrorMessage>
      </FormControl>
      </div>
      <div className="col">
      <FormControl isInvalid={errors.cognome}>
        <FormLabel htmlFor="cognome">Cognome</FormLabel>
        <Input
          type="text"
          id="cognome"
          placeholder="Inserisci il tuo cognome"
          {...register("cognome", { required: "Campo obbligatorio" })}
        />
        <FormErrorMessage>{errors.cognome?.message}</FormErrorMessage>
      </FormControl>
      </div>
      </div>

      <Button
        type="submit"
        colorScheme="blue"
        isLoading={submitting}
       
      >
        Reimposta nuova password
      </Button>
    </form>
              {/* End Form */}
              <hr />
                <div>
                  <Button color="danger" onClick={handleDelete}>
                    Elimina account
                  </Button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
