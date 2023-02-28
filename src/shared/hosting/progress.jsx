import { Progress } from '@chakra-ui/react';

const ProgressBar = ({value}) => {
  return (
    <div>
      <span>Stato della configurazione</span>
      <Progress hasStripe value={value} borderRadius="8px"/>
    </div>
  );
}

export default ProgressBar;