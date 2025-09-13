import { Box, Stack, IconButton, Typography, Tooltip } from "@mui/material";
import appTheme from "../../styles/theme";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useThemeMode } from "../../context/ThemeContext";

export default function Footer() {
  const { mode } = useThemeMode();
  const theme = mode === "dark" ? appTheme.dark : appTheme.light;
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 8, md: "58px" },
        px: { xs: 2, md: "16px" },
        py: { xs: 3, md: "10px" },
        bgcolor: theme.colors.innerCardBackground,
        color: theme.colors.textMuted,
        borderTop: `1.5px solid ${theme.colors.inputBorder}`,
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ maxWidth: 1200, mx: "auto" }}
      >
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          © {year} All rights reserved. Pavel Vishnepolsky
        </Typography>
        <Stack direction="row" spacing={1}>
          <Tooltip title="LinkedIn">
            <IconButton
              href="https://www.linkedin.com/in/pavel-vishnepolsky-142b63138/"
              target="_blank"
              rel="noopener"
              sx={{ color: theme.colors.textMuted, fontSize: 22 }}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub">
            <IconButton
              href="https://github.com/pavish83"
              target="_blank"
              rel="noopener"
              sx={{ color: theme.colors.textMuted, fontSize: 22 }}
              aria-label="GitHub"
            >
              <FaGithub />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
}