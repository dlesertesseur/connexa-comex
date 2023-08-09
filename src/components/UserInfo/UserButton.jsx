import { Menu, Avatar } from "@mantine/core";
import { IconSettings, IconUser, IconLogout } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { logOut } from "../../data/Auth";
import { useContext } from "react";
import { AppStateContext } from "../../context/AppStateContext";

const UserButton = () => {
  const { user } = useContext(AppStateContext);
  const { t } = useTranslation();

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`;
  }
  const onLogout = () => {
    logOut();
  };

  return (
    <Menu shadow="md">
      <Menu.Target>
        <Avatar size={"sm"} color={stringToColor(user.firstName + " " + user.lastName)} radius="xl">
          {stringAvatar(user.firstName + " " + user.lastName)}
        </Avatar>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item icon={<IconSettings size={24} />}>{t("userOptions.profile")}</Menu.Item>
        <Menu.Item icon={<IconUser size={24} />}>{t("userOptions.account")}</Menu.Item>
        <Menu.Item icon={<IconLogout size={24} />} onClick={onLogout}>
          {t("userOptions.logout")}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserButton;
