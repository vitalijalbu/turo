import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  useMantineTheme,
  createStyles
} from "@mantine/core"

export const MOCKDATA = [
  {
    title: "No third parties",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves"
  },
  {
    title: "Secure by default",
    description:
      "Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right"
  },
  {
    title: "24/7 Support",
    description:
      "Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail"
  }
]

export function Feature({ title, description }) {
  const theme = useMantineTheme()
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
      icon
      </ThemeIcon>
      <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
        {title}
      </Text>
      <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  )
}

const useStyles = createStyles(theme => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "left"
    }
  }
}))

export function Features({ title, description, data = MOCKDATA }) {
  const { classes, theme } = useStyles()
  const features = data.map((feature, index) => (
    <Feature {...feature} key={index} />
  ))

  return (
  <section className="section-content features">
    <Container size="xl">
      <Title>Come funziona</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={theme.spacing.xl * 2}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "xl" },
          { maxWidth: 755, cols: 1, spacing: "xl" }
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
    </section>
  )
}


export default Features;
