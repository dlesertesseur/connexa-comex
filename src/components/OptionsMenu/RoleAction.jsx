import { Box, Group, Stack, Text, UnstyledButton } from "@mantine/core";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppStateContext } from "../../context/AppStateContext";

// eslint-disable-next-line react/prop-types
const RoleAction = ({ title, text, h = 60, icon = null, link, applications}) => {
  const navigate = useNavigate();
  const { setApplications } = useContext(AppStateContext);
  
  const onClick = () => {
    setApplications(applications);
    navigate(link);
  }

  return (
    <UnstyledButton w={"100%"} mb={"xs"} onClick={onClick}>
      <Box
        w={"100%"}
        h={"100%"}
        p={"xs"}
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2],
          textAlign: "center",
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          cursor: "pointer",
          "&:hover": {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3],
          },
        })}
      >
        <Group position="apart" noWrap>
          <Stack spacing={"xs"} h={h} align={"flex-start"} justify={"space-between"}>
            <Text size={"xl"} weight={600}>{title}</Text>
            <Text align="start" size={"xs"} weight={500} color="dimmed">{text}</Text>
          </Stack>
          <Stack spacing={"xs"} h={h} align={"flex-start"}>
            {icon}
          </Stack>
        </Group>
      </Box>
    </UnstyledButton>
  );
};

export default RoleAction;
