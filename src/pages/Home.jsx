import {
  Box,
  Typography,
  Stack,
  Avatar,
  Paper,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiJavascript,
  SiRedux,
  SiTypescript,
  SiCss3,
  SiHtml5
} from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import appTheme from "../styles/theme";
import AppButton from "../components/common/AppButton";
import { useThemeMode } from "../context/ThemeContext";
const AVATAR_URL = "/avatar.jpg";

export default function Home() {
  const { mode } = useThemeMode();
  const theme = mode === "dark" ? appTheme.dark : appTheme.light;
  const themeMui = useTheme();
  const isMobile = useMediaQuery(themeMui.breakpoints.down("md"));
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 2, md: 8 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 * 0.13, type: "spring" }}
        whileHover={{
          scale: 1.025,
          transition: { duration: 0.18 },
        }}
        style={{ width: "100%" }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 7 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 5,
            maxWidth: 950,
            mx: "auto",
            borderRadius: 6,
            bgcolor: theme.colors.cardBackground,
            boxShadow: "0 4px 36px 0 rgba(0,0,0,0.20)",
            backdropFilter: "blur(8px)",
            border: "1.5px solid rgba(255,255,255,0.06)",
            borderLeft: `5px solid ${theme.colors.innerCardBackground}`,
            transition: "border 0.2s, box-shadow 0.2s, filter 0.2s",
            "&:hover": {
              filter: "brightness(1.03)",
              borderLeft: `8px solid ${theme.colors.innerCardBackground}`,
              boxShadow: "0 8px 36px 0 rgba(50,100,255,0.13)",
            },
          }}
        >
          <Avatar
            src={AVATAR_URL}
            alt="Pavl Vishnepolsky's Avatar"
            sx={{
              width: { xs: 110, md: 155 },
              height: { xs: 110, md: 155 },
              boxShadow: 6,
              border: `4px solid ${theme.colors.avatarBorder}`,
              bgcolor: theme.colors.avatarBackground,
            }}
          />
          <Box sx={{ flex: 1, minWidth: { xs: "auto", sm: 270 } }}>
            <Typography
              variant="h3"
              fontWeight={900}
              sx={{
                background: theme.colors.headline,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                overflowWrap: "break-word",
                wordBreak: "break-word",
                whiteSpace: "normal",
              }}
            >
              Pavel Vishnepolsky
            </Typography>
            <Typography
              variant="h5"
              fontWeight={700}
              color={theme.colors.secondaryText}
              gutterBottom
              sx={{ mt: 1 }}
            >
                Senior Front End Developer
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 1.5,
              }}
            >
              <Box
                sx={
                  isMobile
                    ? { display: "flex", flexWrap: "wrap", gap: 1, mb: 1.5 }
                    : { display: "flex", alignItems: "center", gap: 2, mb: 1.5 }
                }
              >
                <Tooltip title="React">
                  <SiReact size={28} color={appTheme.dark.colors.react} />
                </Tooltip>
                <Tooltip title="Vue.js">
                  <FaVuejs  size={28} color={appTheme.dark.colors.vue} />
                </Tooltip>
                <Tooltip title="Node.js">
                  <SiNodedotjs size={28} color={appTheme.dark.colors.node} />
                </Tooltip>
                <Tooltip title="Docker">
                  <SiDocker size={28} color={theme.colors.docker} />
                </Tooltip>
                <Tooltip title="JavaScript">
                  <SiJavascript
                    size={26}
                    color={appTheme.dark.colors.javascript}
                  />
                </Tooltip>
                <Tooltip title="TypeScript">
                  <SiTypescript
                    size={26}
                    color={appTheme.dark.colors.typescript}
                  />
                </Tooltip>
                <Tooltip title="Redux">
                  <SiRedux
                    size={26}
                    color={appTheme.dark.colors.redux}
                  />
                </Tooltip>
                <Tooltip title="HTML5">
                  <SiHtml5 size={26} color={appTheme.dark.colors.html} />
                </Tooltip>
                <Tooltip title="CSS3">
                  <SiCss3 
                    size={26}
                    color={appTheme.dark.colors.css}
                  />
                </Tooltip>
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontSize: 18, color: theme.colors.textLight }}
            >
              I am a Senior Front-End Developer with over 10 years of experience designing and delivering scalable, user-focused web applications. My background includes working with modern JavaScript frameworks such as React, Vue.js, and Angular, leading front-end architecture design, and driving performance improvements that enhance responsiveness and reliability across various platforms.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontStyle: "italic", color: theme.colors.textMuted, mb: 2 }}
            >
              Building software. Creating value. Always learning.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Box sx={{ gap: 1, display: "flex", flexDirection: "row" }}>
                <AppButton
                  label="View Projects"
                  variant="primary"
                  onClick={() => navigate("/projects")}
                  size={"sm"}
                />
                <AppButton
                  label="Resume"
                  variant="secondary"
                  size={"sm"}
                  onClick={() => navigate("/resume")}
                />
              </Box>
            </Stack>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
}