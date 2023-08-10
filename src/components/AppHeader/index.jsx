import { Button, Divider, Group, Image, Stack, Text, useMantineTheme } from "@mantine/core";
import { config } from "../../config/config";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowLeft } from "@tabler/icons-react";
import { useContext } from "react";
import { AppStateContext } from "../../context/AppStateContext";
import { ActivePage } from "../../config/values";
import { useNavigate } from "react-router-dom";
import UserMenu from "../UserInfo/UserMenu";
import Organization from "../Organization";

const AppHeader = () => {
  const theme = useMantineTheme();
  const matchesMinMd = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
  const { activePage } = useContext(AppStateContext);
  const navigate = useNavigate();

  const navOption = () => {
    navigate("./");
  };

  return (
    <Stack spacing={0}>
      <Group w={"100%"} position="apart" p={"xs"}>
        <Group p={0}>
          <Image src={config.PUBLIC_URL + "/logos/logo.png"} alt="image" width={matchesMinMd ? 60 : 40} />
        </Group>
        <UserMenu />
      </Group>
      <Divider m={0} color="#e5e5e5" />
      <Group position="apart" p={"xs"}>
        <Organization />
        {activePage === ActivePage.appsInRole ? (
          <Group spacing={0} p={0}>
            <Button size={"xs"} p={"xs"} onClick={navOption}>
              <IconArrowLeft size={18} stroke={2.5} />
              {matchesMinMd ? (
                <Text weight={700} ml={"xs"}>
                  {activePage}
                </Text>
              ) : null}
            </Button>
          </Group>
        ) : null}
      </Group>
    </Stack>
  );
};

export default AppHeader;
