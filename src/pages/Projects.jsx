import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import appTheme from "../styles/theme";
import { useThemeMode } from "../context/ThemeContext";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectCardSkeleton from "../components/ProjectCardSkeleton";

export default function Projects() {
  const { mode } = useThemeMode();
  const theme = mode === "dark" ? appTheme.dark : appTheme.light;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ py: { xs: 2, md: 6 }, maxWidth: 1100, mx: "auto" }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: 900, color: theme.colors.textLight, mb: 4 }}
      >
        Projects
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: theme.colors.secondaryText, mb: 4 }}
      >
        A collection of my projects showcasing my skills and technologies I work with.
      </Typography>
      {loading
        ? Array.from({ length: 2 }).map((_, idx) => (
            <ProjectCardSkeleton key={idx} theme={theme} />
          ))
        : projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              theme={theme}
              index={idx}
            />
          ))}
    </Box>
  );
}