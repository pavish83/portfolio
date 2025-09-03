import React, { use } from "react";
import {
  Paper,
  Typography,
  Chip,
  Stack,
  Box,
  Tooltip,
  CardMedia,
  Divider,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import appTheme from "../styles/theme";
import AppButton from "./common/AppButton";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaRegCopy,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiAngular,
  SiTypescript,
  SiPython,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiGit,
  SiSqlite,
  SiGithub,
  SiMysql,
} from "react-icons/si";

const techIcons = {
  React: <SiReact size={22} color={appTheme.dark.colors.react} />,
  "Node.js": <SiNodedotjs size={22} color={appTheme.dark.colors.node} />,
  MongoDB: <SiMongodb size={22} color={appTheme.dark.colors.mongo} />,
  SQL: <SiSqlite size={22} color={appTheme.dark.colors.sql} />,
  Angular: <SiAngular size={22} color={appTheme.dark.colors.angular} />,
  AngularJS: <SiAngular size={22} color={appTheme.dark.colors.angular} />,
  JavaScript: (
    <SiJavascript size={22} color={appTheme.dark.colors.javascript} />
  ),
  TypeScript: (
    <SiTypescript size={22} color={appTheme.dark.colors.typescript} />
  ),
  Python: <SiPython size={22} color={appTheme.dark.colors.python} />,
  Docker: <SiDocker size={22} color={appTheme.dark.colors.docker} />,
  HTML: <SiHtml5 size={22} color={appTheme.dark.colors.html} />,
  CSS: <SiCss3 size={22} color={appTheme.dark.colors.css} />,
  Git: <SiGit size={22} color={appTheme.dark.colors.git} />,
  GitHub: <SiGithub size={22} color={appTheme.dark.colors.github} />,
  MySQL: <SiMysql size={22} color={appTheme.dark.colors.mysql} />,
};

function handleCopy(text) {
  navigator.clipboard.writeText(text);
}

export default function ProjectCard({ project, theme, index }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 + index * 0.13, type: "spring" }}
      whileHover={{
        scale: 1.025,
        boxShadow: "0 8px 32px 0 rgba(100,120,255,0.10)",
        transition: { duration: 0.18 },
      }}
      style={{ width: "100%" }}
    >
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          borderRadius: 6,
          overflow: "hidden",
          bgcolor: theme.colors.cardBackground,
          boxShadow: theme.colors.shadow,
          mb: 4,
          borderLeft: `5px solid ${theme.colors.innerCardBackground}`,
          transition: "border 0.2s, box-shadow 0.2s, filter 0.2s",
          "&:hover": {
            filter: "brightness(1.03)",
            borderLeft: `8px solid ${theme.colors.innerCardBackground}`,
            boxShadow: "0 8px 36px 0 rgba(50,100,255,0.13)",
          },
        }}
      >
        <Box
          sx={{
            minWidth: 220,
            bgcolor: theme.colors.cardBackground,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Box
            sx={{
              minWidth: 220,
              bgcolor: theme.colors.cardBackground,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
            }}
          >
            <CardMedia
              component="img"
              image={project.image}
              alt={project.nameKey}
              sx={{
                width: { xs: "100%", sm: 450 },
                height: { xs: 180, sm: "100%" },
                borderRadius: 3,
                boxShadow: 2,
                objectFit: "cover",
                bgcolor: theme.colors.innerCardBackground,
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            p: { xs: 2, sm: 4 },
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: theme.colors.primary, fontWeight: 800 }}
          >
            {project.nameKey}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.colors.textLight, mt: 1 }}
          >
            {project.descriptionKey}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              mt: 2,
              flexWrap: "wrap",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            {project.tags.map((tag) => (
              <Box dir="ltr" key={tag}>
                <Tooltip title={tag} key={tag}>
                  <Chip
                    icon={techIcons[tag] || null}
                    label={tag}
                    sx={{
                      bgcolor: theme.colors.innerCardBackground,
                      color: theme.colors.textLight,
                      fontWeight: 500,
                      mr: 1,
                      "&:hover": {
                        bgcolor: theme.colors.hover,
                      },
                    }}
                  />
                </Tooltip>
              </Box>
            ))}
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
            {project.demo && (
              <AppButton
                label={
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <FaExternalLinkAlt style={{ marginRight: 8 }} />{" "}
                    Live Demo
                  </Box>
                }
                onClick={() => window.open(project.demo, "_blank")}
                variant="update"
                size={"sm"}
              />
            )}
            <span style={{ margin: "0 8px" }}>
              <AppButton
                label={
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <FaGithub style={{ marginRight: 8 }} />{" "}
                    GitHub Repository
                  </Box>
                }
                onClick={() => window.open(project.github, "_blank")}
                variant="secondary"
                size={"sm"}
              />
            </span>
          </Stack>
          <Stack direction="column" spacing={0.5} sx={{ mt: 2 }}>
            {project.featuresKeys &&
              project.featuresKeys.map((feature, idx) => (
                <Typography
                  key={idx}
                  variant="body2"
                  sx={{ color: theme.colors.textMuted }}
                >
                  • {feature}
                </Typography>
              ))}
          </Stack>
          {project.testAccounts && project.testAccounts.length > 0 && (
            <Box
              sx={{
                mt: 3,
                p: 2,
                bgcolor: theme.colors.innerCardBackground,
                borderRadius: 2,
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight={700}
                sx={{ color: theme.colors.textLight, mb: 1 }}
              >
                Test Accounts
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <Stack direction="column" spacing={1}>
                {project.testAccounts.map((account, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      bgcolor: theme.colors.innerCardBackground,
                      p: 1.5,
                      borderRadius: 2,
                      boxShadow: 1,
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: theme.colors.textLight,
                        mb: 0.5,
                      }}
                    >
                      {account.role}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: theme.colors.textLight,
                        mb: 0.5,
                      }}
                    >
                      <Typography variant="body2">
                        Username:{" "}
                        <span style={{ direction: "ltr", fontWeight: 600 }}>
                          {account.username}
                        </span>
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() => handleCopy(account.username)}
                        sx={{ color: theme.colors.primary }}
                      >
                        <FaRegCopy size={14} />
                      </IconButton>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: theme.colors.textLight,
                      }}
                    >
                      <Typography variant="body2">
                        Password:{" "}
                        <span style={{ direction: "ltr", fontWeight: 600 }}>
                          {account.password}
                        </span>
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() => handleCopy(account.password)}
                        sx={{ color: theme.colors.primary }}
                      >
                        <FaRegCopy size={14} />
                      </IconButton>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          )}
        </Box>
      </Paper>
    </motion.div>
  );
}