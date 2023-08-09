import { Box, Group, Stack, Text, UnstyledButton } from "@mantine/core";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ActivityButton = ({ title, text, h = 60, icon = null, link }) => {

    const navigate = useNavigate();
  
    const onClick = () => {
      navigate(link);
    }
  
    return (
      <UnstyledButton w={"100%"} mb={"xs"} onClick={onClick}>
        <Box
          w={"100%"}
          h={"100%"}
          p={"xs"}
          sx={(theme) => ({
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.red[6] : theme.colors.red[2],
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

  export {ActivityButton}