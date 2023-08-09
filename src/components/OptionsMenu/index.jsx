import { Button, Popover, ScrollArea } from "@mantine/core";
import { useTranslation } from "react-i18next";

const OptionsMenu = () => {
  const { t } = useTranslation();
  return (
    <Popover width={300} trapFocus position="bottom-start" withArrow shadow="md" arrowPosition="center">
      <Popover.Target>
        <Button>{t("label.options")}</Button>
      </Popover.Target>
      <Popover.Dropdown
        sx={(theme) => ({ background: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white })}
      >
        <ScrollArea>
        </ScrollArea>
      </Popover.Dropdown>
    </Popover>
  );
};

export default OptionsMenu;
