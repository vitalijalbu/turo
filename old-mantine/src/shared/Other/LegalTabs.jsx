import React, { useState, useEffect } from "react";
import {
  Tabs
} from "@mantine/core";
import { useRouter } from "next/router";

const LegalTabs = () => {
  const router = useRouter();

  return (
      <Tabs
      color="dark" variant="pills" radius="xl" defaultValue="gallery"
      value={router.query.activeTab}
      onTabChange={(value) => router.push(`/legal/${value}`)}
    >
      <Tabs.List>
        <Tabs.Tab value="cookies">Cookies</Tabs.Tab>
        <Tabs.Tab value="privacy-policy">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

export default LegalTabs;
