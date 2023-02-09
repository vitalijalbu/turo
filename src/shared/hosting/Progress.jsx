import { Progress } from 'reactstrap';

function ProgressBar() {
  return (
    <>
      <Progress value={75} label="75%" size="xl" radius="xl" />
    </>
  );
}