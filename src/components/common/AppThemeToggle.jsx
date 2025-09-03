import { Switch, FormControlLabel, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import appTheme from "../../styles/theme";
import { useThemeMode } from "../../context/ThemeContext";

const AppThemeToggle = () => {
  const { mode, toggleTheme } = useThemeMode();
  const theme = mode === "dark" ? appTheme.dark : appTheme.light;

  return (
    <Box
      sx={{
        ml: "auto",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <FormControlLabel
        control={
          <Switch
            checked={mode === "dark"}
            onChange={toggleTheme}
            color="default"
          />
        }
        label=""
        sx={{ pr: 0 }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "static",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "1.5em",
            height: "1.5em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {mode === "dark" ? (
            <FontAwesomeIcon
              icon={faMoon}
              style={{
                cursor: "pointer",
                transition: "opacity 0.2s",
                color: theme.colors.textLight,
                position: "absolute",
                left: 0,
                top: "10%",
              }}
              onClick={toggleTheme}
            />
          ) : (
            <FontAwesomeIcon
              icon={faSun}
              style={{
                cursor: "pointer",
                transition: "opacity 0.2s",
                color: theme.colors.textLight,
                position: "absolute",
                left: 0,
                top: "10%",
              }}
              onClick={toggleTheme}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AppThemeToggle;