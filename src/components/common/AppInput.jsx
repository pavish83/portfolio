import React, { useState } from "react";
import { TextField, Tooltip } from "@mui/material";
import appTheme from "../../styles/theme";
import { useThemeMode } from "../../context/ThemeContext";

const AppInput = ({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  errorMessage,
  instructions,
}) => {
  const { mode } = useThemeMode();
  const theme = mode === "dark" ? appTheme.dark : appTheme.light;
  const [selected, setSelected] = useState(false);

  const handleFocus = () => {
    setSelected(true);
  };

  const handleBlur = () => {
    setSelected(false);
  };

  return (
    <Tooltip
      title={instructions && error ? instructions : ""}
      open={!!(instructions && error && selected)}
      placement="right"
      arrow
    >
      <TextField
        label={placeholder}
        type={type === "password" && showPassword ? "text" : type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        error={!!error}
        helperText={error ? errorMessage : ""}
        variant="outlined"
        fullWidth
        InputLabelProps={{
          style: {
            color: theme.colors.textLight,
            transformOrigin: "top left",
            right: "auto",
            left: 10,
          },
        }}
        InputProps={{
          style: {
            backgroundColor: theme.colors.inputBackground,
            color: theme.colors.textLight,
            borderRadius: theme.input.borderRadius,
            fontFamily: theme.fontFamily,
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: error
                ? theme.colors.error
                : selected
                ? theme.colors.inputBorderSelected
                : theme.colors.inputBorder,
            },
            "& legend": {
              textAlign: "left",
              marginRight: 0,
              marginLeft: "8px",
            },
          },
          mb: 2,
        }}
      />
    </Tooltip>
  );
};

export default AppInput;