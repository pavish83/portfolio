import React, { useEffect, useState } from "react";
import { Zoom, Fab } from "@mui/material";
import { KeyboardArrowUp as ArrowUpIcon } from "@mui/icons-material";
import appTheme from "../../styles/theme";
import { useThemeMode } from "../../context/ThemeContext";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { mode } = useThemeMode();
  const theme = mode === "dark" ? appTheme.dark : appTheme.light;

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={visible}>
      <Fab
        size="medium"
        aria-label="scroll back to top"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: { xs: 24, md: 100 },
          right: { xs: 18, md: 20 },
          bgcolor: theme.colors.primary,
          color: "#fff",
          boxShadow: "0 4px 24px rgba(40,40,90,0.12)",
          zIndex: 9999,
          "&:hover": {
            bgcolor: theme.colors.primaryHover || theme.colors.primary,
            filter: "brightness(1.15)",
          },
        }}
      >
        <ArrowUpIcon />
      </Fab>
    </Zoom>
  );
}