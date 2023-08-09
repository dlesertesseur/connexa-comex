import { Group, Select, Text } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { AppStateContext } from "../context/AppStateContext";

const Organization = () => {
  const { organization, site, setSite } = useContext(AppStateContext);
  const [sites, setSites] = useState([]);

  useEffect(() => {
    if (organization) {
      const project = organization.projects[0];

      const sites = project.sites.map((s) => {
        return { value: s.id, label: s.name };
      });
      setSites(sites);
      setSite(sites[0].value);
    }
  }, [organization, setSite]);

  return (
    <Group>
      <Text size={"lg"} weight={700}>
        {organization?.name}
      </Text>
      <Select
        placeholder="Pick one"
        data={sites}
        value={site}
        onChange={setSite}
      />
    </Group>
  );
};

export default Organization;
