import { Card, CardHeader, CardBody, Heading, Box, Text, Stack, StackDivider, CardFooter } from '@chakra-ui/react'
import { IconBulb } from '@tabler/icons-react';
const HelpBox = () => {

  return (
    <Card variant="outline">
  <CardHeader>
    <Heading size='md'><IconBulb/> I prossimi suggerimenti per te</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        I prossimi passaggi per te
        </Heading>
        <Text pt='2' fontSize='sm'>
          Per una maggiore visibilità, compila tutti i campi richiesti
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Foto
        </Heading>
        <Text pt='2' fontSize='sm'>
          Utilizza foto chiare
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Analysis
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
  );
      
};

export default HelpBox;
