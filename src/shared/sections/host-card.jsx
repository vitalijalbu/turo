import React, { useState, useRef } from "react";
import { Button, Text, Avatar, Paper } from "@mantine/core";
import Link from "next/link";

const HostCard = ({ data }) => {
  return (
    <Paper radius="md" withBorder p="lg" key={data.id}>
      <Avatar src={data.photo?.url ?? null} size={120} radius={120} mx="auto" />
      <Text align="center" size="lg" weight={500} mt="md">
        {data.fullName}
      </Text>
      <Text align="center" color="dimmed" size="sm">
        {`Annunci online ${data.id}`}
      </Text>

      <Button
        variant="default"
        fullWidth
        mt="md"
      >
        <Link href={`/hosts/${data.id}`} rel="noopener noreferrer" target="_blank">Vedi Agenzia</Link>
      </Button>
    </Paper>
  );
};

export default HostCard;
