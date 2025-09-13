import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  IconButton,
  Tooltip,
  Divider,
} from "@mui/material";

import appTheme from "../styles/theme";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import AppInput from "../components/common/AppInput.jsx";
import AppTextArea from "../components/common/AppTextArea";
import AppButton from "../components/common/AppButton";
import { useSnackbar } from "notistack";
import { useThemeMode } from "../context/ThemeContext";

const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSckGFN4nGKdxIIDwa6KTPsAdOoIkHLvhbQZ9NWK9fxNOpBn1Q/formResponse";

const ENTRY_IDS = {
  name: "entry.950580695",
  email: "entry.1387489059",
  message: "entry.262847622",
};

export default function Contact() {
  const { mode } = useThemeMode();
  const theme = mode === "dark" ? appTheme.dark : appTheme.light;
  const { enqueueSnackbar } = useSnackbar();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState([]);

  const validateForm = () => {
    const errors = [];

    if (!form.name.trim()) errors.push("name");
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errors.push("email");
    if (!form.message.trim()) errors.push("message");

    setFormErrors(errors);
    return errors.length === 0;
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append(ENTRY_IDS.name, form.name);
    formData.append(ENTRY_IDS.email, form.email);
    formData.append(ENTRY_IDS.message, form.message);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      enqueueSnackbar("Thank you for reaching out! Your message has been sent.", { variant: "success" });
      setForm({ name: "", email: "", message: "" });
      setFormErrors([]);
    } catch (error) {
      console.error("Error sending form:", error);
      enqueueSnackbar("Failed to send message. Please try again.", { variant: "error" });
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", py: 6 }}>
      <Paper
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 6,
          bgcolor: theme.colors.cardBackground,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={900}
          color={theme.colors.textLight}
          mb={2}
        >
          Contact Me
        </Typography>
        <Typography variant="body1" color={theme.colors.secondaryText} mb={3}>
          Want to work together or have a question? Fill in the form or reach me directly via LinkedIn.
        </Typography>
        <form onSubmit={handleSend}>
        <Stack spacing={2}>
            <AppInput
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                error={formErrors.includes("name")}
                errorMessage="Please enter your name"
            />
            <AppInput
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                error={formErrors.includes("email")}
                errorMessage="Please enter a valid email"
            />
            <AppTextArea
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                error={formErrors.includes("message")}
                errorMessage="Please enter your message"
            />
            <Divider sx={{ my: 2 }} />
            <AppButton
                type="submit"
                label="Send"
                variant="secondary"
                fullWidth
            />
        </Stack>
        </form>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h6" mb={2} color={theme.colors.textLight}>
          Or reach me directly:
        </Typography>
        <Stack direction="row" spacing={2}>
          <Tooltip title="LinkedIn">
            <IconButton
              href="https://www.linkedin.com/in/pavel-vishnepolsky/"
              target="_blank"
              rel="noopener"
              color="primary"
              sx={{ fontSize: 30 }}
            >
              <FaLinkedin />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub">
            <IconButton
              href="https://github.com/pavish83"
              target="_blank"
              rel="noopener"
              color="primary"
              sx={{ fontSize: 30 }}
            >
              <FaGithub />
            </IconButton>
          </Tooltip>
        </Stack>
      </Paper>
    </Box>
  );
}