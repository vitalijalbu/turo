import { useToggle, upperFirst } from "@mantine/hooks"
import { useForm } from "@mantine/form";
import Link from "next/link";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Center,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Container,
  Grid,
  Stack
} from "@mantine/core";
import IconGoogle from "@/shared/common/IconGoogle";
import IconFacebook from "@/shared/common/IconFacebook";

const Index = () => {
  const [type, toggle] = useToggle(["login", "register"])
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true
    },

    validate: {
      email: val => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: val =>
        val.length <= 6 ? "Password should include at least 6 characters" : null
    }
  })

  return (
    <div className="page">
      <Container>
      <Grid>
          <Grid.Col className="mx-auto" span={6}>
    <Paper radius="md" p="xl">
      <Text size="lg" weight={500}>
        Welcome to Mantine, {type} with
      </Text>

      <Group grow mb="md" mt="md">
      <Button leftIcon={<IconGoogle />} variant="default">
          Accedi con Google
        </Button><Button leftIcon={<IconFacebook />} variant="default">
        Accedi con Facebook
        </Button>
      </Group>

      <Divider label="Oppure continua con la mail" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === "register" && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={event =>
                form.setFieldValue("name", event.currentTarget.value)
              }
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={event =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={event =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
          />
        </Stack>

        <Group position="apart" mt="xl">
          <Link
            component="button"
            type="button"
            color="dimmed"
            href="/register"
            size="xs"
          >Don't have an account? Register
          </Link>
          <Button type="submit">{upperFirst(type)}</Button>
        </Group>
      </form>
    </Paper>
    </Grid.Col>
    </Grid>
    </Container>
    </div>
  )
}
export default Index;