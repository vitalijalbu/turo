import React from "react";
import { useForm } from "@mantine/form";
import {
  Container,
  Grid,
  Title,
  Button,
  Card,
  NumberInput,
  Text, useMantineTheme,
} from "@mantine/core";
import SideNav from "@/shared/hosting/SideNav";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';


const Settings = () => {
  const theme = useMantineTheme();
  return (
    <div className="page" id="searchPage">
      <Container size="xl">
        <Grid gutter="lg">
          <Grid.Col span={3}>
            <div className="medium-only">
              <SideNav />
            </div>
          </Grid.Col>
          <Grid.Col span={9}>
            <Title large>Impostazioni account</Title>
            <Card withBorder>
            <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
    >
      <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
        <Dropzone.Accept>
          
        </Dropzone.Accept>
        <Dropzone.Reject>
          
        </Dropzone.Reject>
        <Dropzone.Idle>
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    </Dropzone>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Settings;
