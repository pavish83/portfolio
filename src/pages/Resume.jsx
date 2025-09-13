import React from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import AppButton from "../components/common/AppButton";
import { motion } from "framer-motion";
import appTheme from "../styles/theme";
import { useThemeMode } from "../context/ThemeContext";
import resumeData from "../data/resumeData";
import {
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaEnvelope,
  FaVuejs
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiAngular,
  SiTypescript,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiMysql,
  SiRedux,
  SiSqlite,
} from "react-icons/si";

const techIcons = {
  React: <SiReact size={22} color={appTheme.dark.colors.react} />,
  "Node.js": <SiNodedotjs size={22} color={appTheme.dark.colors.node} />,
  MongoDB: <SiMongodb size={22} color={appTheme.dark.colors.mongo} />,
  Angular: <SiAngular size={22} color={appTheme.dark.colors.angular} />,
  AngularJS: <SiAngular size={22} color={appTheme.dark.colors.angular} />,
  JavaScript: (
    <SiJavascript size={22} color={appTheme.dark.colors.javascript} />
  ),
  TypeScript: (
    <SiTypescript size={22} color={appTheme.dark.colors.typescript} />
  ),
  SQL: <SiSqlite size={22} color={appTheme.dark.colors.sql} />,
  Docker: <SiDocker size={22} color={appTheme.dark.colors.docker} />,
  HTML: <SiHtml5 size={22} color={appTheme.dark.colors.html} />,
  CSS: <SiCss3 size={22} color={appTheme.dark.colors.css} />,
  Git: <SiGit size={22} color={appTheme.dark.colors.git} />,
  GitHub: <SiGithub size={22} color={appTheme.dark.colors.github} />,
  MySQL: <SiMysql size={22} color={appTheme.dark.colors.mysql} />,
  "Vue.js": <FaVuejs  size={28} color={appTheme.dark.colors.vue} />,
  Redux: <SiRedux size={22} color={appTheme.dark.colors.redux} />,
};

export default function Resume() {
    const { mode } = useThemeMode();
    const theme = mode === "dark" ? appTheme.dark : appTheme.light;

    const formatHeader = (str) => {
      let formatted = str.replace(/_/g, ' & ');

      formatted = formatted.replace(/([A-Z])/g, ' $1');

      formatted = formatted.replace(/\b\w/g, char => char.toUpperCase());

      return formatted;
    };

  return (
    <Box sx={{ maxWidth: 950, mx: "auto", py: 4, px: 1 }}>
      <Typography
        variant="h3"
        align="center"
        fontWeight={900}
        color={theme.colors.primary}
        sx={{ mb: 2, letterSpacing: 1 }}
      >
        Resume
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 * 0.13, type: "spring" }}
        whileHover={{
          scale: 1.025,
          boxShadow: "0 8px 32px 0 rgba(100,120,255,0.10)",
          transition: { duration: 0.18 },
        }}
        style={{ width: "100%" }}
      >
        <Paper
          sx={{
            p: { xs: 2, md: 5 },
            mb: 4,
            borderRadius: 5,
            bgcolor: theme.colors.cardBackground,
            textAlign: "center",
            boxShadow: theme.colors.shadow,
            borderLeft: `5px solid ${theme.colors.innerCardBackground}`,
            transition: "border 0.2s, box-shadow 0.2s, filter 0.2s",
            "&:hover": {
              filter: "brightness(1.03)",
              borderLeft: `8px solid ${theme.colors.innerCardBackground}`,
              boxShadow: "0 8px 36px 0 rgba(50,100,255,0.13)",
            },
          }}
        >
          <Typography
            variant="h4"
            fontWeight={800}
            color={theme.colors.primary}
          >
            Pavel Vishnepolsky
          </Typography>
          <Typography variant="h6" color={theme.colors.secondaryText} mb={1}>
            Senior Frontend Developer 
          </Typography>
          <Typography variant="body1" color={theme.colors.textMuted} mb={3}>
            Innovative Senior Front-End Engineer with extensive experience designing and developing scalable, high-performance web applications. Proficient in modern frameworks and technologies (React.js, Redux, and Vue.js), performance optimization techniques, and testing frameworks. Experienced in responsive, cross-platform UI development, third-party API integration, and building maintainable component-based applications. Skilled in collaborating with cross-functional teams and aligning technical delivery with business objectives. Effective problem-solver, committed to delivering high-quality software by combining efficient development practices and tailored user-focused solutions.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            gap={1}
            justifyContent="center"
            mb={1}
          >
            <AppButton
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <FaLinkedin />
                  LinkedIn
                </Box>
              }
              onClick={() =>
                window.open("https://linkedin.com/in/pavel-vishnepolsky", "_blank")
              }
              variant="secondary"
              size={"sm"}
            />
            <AppButton
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <FaGithub style={{ marginRight: 8 }} /> GitHub
                </Box>
              }
              onClick={() =>
                window.open("https://github.com/pavish83", "_blank")
              }
              variant="secondary"
              size={"sm"}
            />
          </Stack>
        </Paper>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 * 0.13, type: "spring" }}
        whileHover={{
          scale: 1.025,
          boxShadow: "0 8px 32px 0 rgba(100,120,255,0.10)",
          transition: { duration: 0.18 },
        }}
        style={{ width: "100%" }}
      >
        <Paper
          sx={{
            p: { xs: 2, md: 4 },
            mb: 4,
            borderRadius: 5,
            bgcolor: theme.colors.cardBackground,
            boxShadow: theme.colors.shadow,
            borderLeft: `5px solid ${theme.colors.innerCardBackground}`,
            transition: "border 0.2s, box-shadow 0.2s, filter 0.2s",
            "&:hover": {
              filter: "brightness(1.03)",
              borderLeft: `8px solid ${theme.colors.innerCardBackground}`,
              boxShadow: "0 8px 36px 0 rgba(50,100,255,0.13)",
            },
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            mb={2}
            color={theme.colors.textLight}
          >
            Technical Skills
          </Typography>
          <Stack direction="column" spacing={3}  mb={2}>
            {Object.entries(resumeData.skills).map(([category, skills]) => (
              <Box key={category} mb={3}>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  color={theme.colors.textMuted}
                  mb={1}
                >
                  {formatHeader(category)}
                </Typography>
                <Stack direction="row" flexWrap="wrap">
                  {skills.map((skill) => (
                    <Box key={skill}>
                      <Chip
                        icon={techIcons[skill] || null}
                        label={skill}
                        sx={{
                          m: 0.5,
                          fontWeight: 600,
                          fontSize: 15,
                          bgcolor: theme.colors.innerCardBackground,
                          color: theme.colors.textLight,
                          px: 1.2,
                          py: 0.2,
                          height: 34,
                          borderRadius: 2.2,
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
          <Typography
            variant="body2"
            color={theme.colors.textMuted}
            sx={{ mt: 4, mb: 2 }}
          >
            Soft Skills
          </Typography>
          <Stack direction="row" flexWrap="wrap">
            {resumeData.skillsSoft.map((softKey) => (
              <Chip
                key={softKey}
                label={softKey}
                sx={{
                  m: 0.5,
                  fontSize: 14,
                  bgcolor: theme.colors.innerCardBackground,
                  color: theme.colors.textMuted,
                }}
              />
            ))}
          </Stack>
        </Paper>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 * 0.13, type: "spring" }}
        whileHover={{
          scale: 1.025,
          boxShadow: "0 8px 32px 0 rgba(100,120,255,0.10)",
          transition: { duration: 0.18 },
        }}
        style={{ width: "100%" }}
      >
        <Paper
          sx={{
            p: { xs: 2, md: 4 },
            mb: 4,
            borderRadius: 5,
            bgcolor: theme.colors.cardBackground,
            boxShadow: theme.colors.shadow,
            borderLeft: `5px solid ${theme.colors.innerCardBackground}`,
            transition: "border 0.2s, box-shadow 0.2s, filter 0.2s",
            "&:hover": {
              filter: "brightness(1.03)",
              borderLeft: `8px solid ${theme.colors.innerCardBackground}`,
              boxShadow: "0 8px 36px 0 rgba(50,100,255,0.13)",
            },
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            mb={2}
            color={theme.colors.textLight}
          >
            Professional Experience
          </Typography>
          {resumeData.experience.map((exp, idx) => (
            <Box key={idx} mb={2.5}>
              <Typography
                variant="h6"
                fontWeight={700}
                color={theme.colors.primary}
              >
                {exp.companyKey} – {exp.roleKey}
              </Typography>
              <Typography
                variant="subtitle2"
                color={theme.colors.secondaryText}
                sx={{ mb: 1 }}
              >
                {exp.periodKey}
              </Typography>
              <ul
                style={{
                  margin: 0,
                  paddingInlineStart: "1.5em",
                  color: theme.colors.textLight,
                }}
              >
                {exp.descriptionKeys.map((descKey) => (
                  <li key={descKey}>
                    <Typography variant="body2" color={theme.colors.textMuted}>
                      {descKey}
                    </Typography>
                  </li>
                ))}
              </ul>
              {idx !== resumeData.experience.length - 1 && (
                <Divider sx={{ my: 2 }} />
              )}
            </Box>
          ))}
        </Paper>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 * 0.13, type: "spring" }}
        whileHover={{
          scale: 1.025,
          boxShadow: "0 8px 32px 0 rgba(100,120,255,0.10)",
          transition: { duration: 0.18 },
        }}
        style={{ width: "100%" }}
      >
        <Paper
          sx={{
            p: { xs: 2, md: 4 },
            mb: 4,
            borderRadius: 5,
            bgcolor: theme.colors.cardBackground,
            boxShadow: theme.colors.shadow,
            borderLeft: `5px solid ${theme.colors.innerCardBackground}`,
            transition: "border 0.2s, box-shadow 0.2s, filter 0.2s",
            "&:hover": {
              filter: "brightness(1.03)",
              borderLeft: `8px solid ${theme.colors.innerCardBackground}`,
              boxShadow: "0 8px 36px 0 rgba(50,100,255,0.13)",
            },
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            mb={2}
            color={theme.colors.textLight}
          >
            Education
          </Typography>
          {resumeData.education.map((edu, idx) => (
            <Box key={idx} mb={2}>
              <Typography
                variant="h6"
                fontWeight={700}
                color={theme.colors.primary}
              >
                {edu.degreeKey}
              </Typography>
              <Typography
                variant="subtitle2"
                color={theme.colors.secondaryText}
              >
                {edu.institutionKey} | {edu.periodKey}
              </Typography>
            </Box>
          ))}
        </Paper>
      </motion.div>
    </Box>
  );
}