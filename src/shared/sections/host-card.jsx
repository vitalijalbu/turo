import React, { useState, useRef } from "react";
import { Button, Text, Avatar, Paper } from '@mantine/core';
import Link from 'next/link';


const HostCard = ({data}) => {
     return(
     <Paper
     radius="md"
     withBorder
     p="lg"
      key={data.id}
   >
     <Avatar src={data.photoUrl} size={120} radius={120} mx="auto" />
     <Text align="center" size="lg" weight={500} mt="md">
       {data.fullName}
     </Text>
     <Text align="center" color="dimmed" size="sm">
      {"Annunci online " + data.id}
     </Text>

     <Button component="a"
      target="_blank"
      rel="noopener noreferrer"
      href={"/hosts/"+data.id} variant="default" fullWidth mt="md" >
       Vedi Agenzia
     </Button>
   </Paper>
     )
}

export default HostCard;
