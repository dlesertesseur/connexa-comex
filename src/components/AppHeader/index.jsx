import { Divider, Group, Image, Stack, useMantineTheme } from "@mantine/core";
import { config } from "../../config/config";
import { useMediaQuery } from "@mantine/hooks";
import UserMenu from "../UserInfo/UserMenu";
import Organization from "../Organization";

const AppHeader = () => {
  const theme = useMantineTheme();
  const matchesMinMd = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

  return (
    <Stack spacing={0}>
      <Group w={"100%"} position="apart" p={"xs"}>
        <Group p={0}>
          <Image src={config.PUBLIC_URL + "/logos/logo.png"} alt="image" width={matchesMinMd ? 60 : 40} />
        </Group>
        <UserMenu />
      </Group>
      <Divider m={0} color="#e5e5e5"/>
      <Group position="left" p={"xs"}>
      <Organization />
      </Group>

    </Stack>
  );
};

export default AppHeader;
