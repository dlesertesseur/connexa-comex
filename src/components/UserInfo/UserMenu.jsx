import { Avatar, Flex, Group, Menu, Text, UnstyledButton, useMantineTheme } from "@mantine/core";
import { IconChevronDown, IconChevronUp, IconLogout, IconUser } from "@tabler/icons-react";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppStateContext } from "../../context/AppStateContext";
import { config } from "../../config/config";
import { useMediaQuery } from "@mantine/hooks";
import { removeFromLocalStorage } from "../../util";

const fontColor = "black";
// eslint-disable-next-line react/prop-types
const UserMenu = ({ compact = true }) => {
  const { user, setUser, setToken } = useContext(AppStateContext);
  const { t } = useTranslation();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const theme = useMantineTheme();

  const matchesMinMd = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

  const getInitials = (user) => {
    let initials = null;
    if (user) {
      const name = user.firstname + " " + user.lastname;

      let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
      initials = [...name.matchAll(rgx)] || [];

      initials = ((initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")).toUpperCase();
    }

    return initials;
  };

  const onLogout = () => {
    setUser(null);
    setToken(null);
    removeFromLocalStorage("user");
  };

  return (
    // <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
    <Menu
      opened={userMenuOpened}
      position="bottom-end"
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal
      withArrow
    >
      <Menu.Target>
        <UnstyledButton
          bg={theme.colors.gray[2]}
          py={3}
          sx={{
            borderTopLeftRadius: 36,
            borderBottomLeftRadius: 36,
            borderTopRightRadius: compact ? 6 : 36,
            borderBottomRightRadius: compact ? 6 : 36,
          }}
        >
          <Group spacing={"xs"}>
            {user?.image ? (
              <Avatar
                size={matchesMinMd ? "md" : "sm"}
                radius="xl"
                ml={3}
                mr={compact ? 3 : 0}
                src={config.SERVER + ":" + config.PORT + user.image}
              />
            ) : (
              <Avatar size={matchesMinMd ? "md" : "sm"} radius="xl" ml={3} mr={3}>
                {getInitials(user)}
              </Avatar>
            )}

            {compact ? (
              <>
                <Flex align="flex-start" direction="column" wrap="wrap">
                  <Text
                    weight={matchesMinMd ? 550 : 600}
                    size={matchesMinMd ? "sm" : "xs"}
                    sx={{ lineHeight: 1, color: fontColor }}
                    mr={3}
                    mb={5}
                  >
                    {user?.firstname + " " + user?.lastname}
                  </Text>
                  {matchesMinMd ? (
                    <Text weight={200} size="xs" sx={{ lineHeight: 1, color: fontColor }} mr={3}>
                      {user?.role ? user?.role : t("label.basicUser")}
                    </Text>
                  ) : null}
                </Flex>

                <Group mr={"xs"}>{userMenuOpened ? <IconChevronDown size={16} /> : <IconChevronUp size={16} />}</Group>
              </>
            ) : null}
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>{t("label.settings")}</Menu.Label>
        <Menu.Item icon={<IconUser size={16} stroke={1.5} />}>{t("userOptions.account")}</Menu.Item>
        <Menu.Item icon={<IconLogout size={16} stroke={1.5} />} onClick={onLogout}>
          {t("userOptions.logout")}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
    // </MediaQuery>
  );
};

export default UserMenu;
