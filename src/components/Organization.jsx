import { Group, Select, Text } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { AppStateContext } from "../context/AppStateContext";

const Organization = () => {
  const { organization, setSite } = useContext(AppStateContext);
  const [sites, setSites] = useState([]);
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (organization) {
      const project = organization.projects[0];

      setSites(project.sites);

      const data = project.sites.map((s) => {
        return { value: s.id, label: s.name };
      });
      setData(data);
      setSite(project.sites[0]);
      setSelectedId(project.sites[0].id);
    }
  }, [organization, setSite]);

  return (
    <Group spacing={"xs"}>
      <Text size={"md"} weight={700}>
        {organization?.name}
      </Text>
      <Select
      size="xs"
        data={data}
        value={selectedId}
        onChange={(e) => {
          const ret = sites.find(s => s.id = e);
          setSite(ret);
          setSelectedId(ret.id);
        }}
      />
    </Group>
  );
};

export default Organization;
