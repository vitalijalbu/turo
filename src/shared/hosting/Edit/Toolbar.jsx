// For file /tabs/[activeTab].tsx
import { useRouter } from "next/router"
import { Container, Grid, Tabs } from "@mantine/core"

const Toolbar = (props) => {
    const router = useRouter();
  return (
    <div className="pt-0">
        <Container size={'xl'}>
            <Grid>
            <Grid.Col span={12}>
    <Tabs
      value={router.query.activeTab}
      onTabChange={value => router.push(`/account/listings/edit/${value}`)}
    >
      <Tabs.List>
        <Tabs.Tab value="first">Dettagli</Tabs.Tab>
        <Tabs.Tab value="second">Media</Tabs.Tab>
        <Tabs.Tab value="second">Altre informazioni</Tabs.Tab>
      </Tabs.List>
    </Tabs>
    </Grid.Col>
    </Grid>
    </Container>
</div>
  );
};

export default Toolbar;
