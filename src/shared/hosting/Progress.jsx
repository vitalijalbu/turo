import { Progress } from '@mantine/core';

function ProgressBar() {
  return (
    <>
      <Progress value={75} label="75%" size="xl" radius="xl" />
    </>
  );
}