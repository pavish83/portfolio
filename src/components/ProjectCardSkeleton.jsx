import React from "react";
import { Paper, Box, Skeleton, Stack } from "@mui/material";

export default function ProjectCardSkeleton({ theme }) {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        borderRadius: 6,
        overflow: "hidden",
        bgcolor: theme.colors.cardBackground,
        boxShadow: theme.colors.shadow,
        mb: 4,
        minHeight: 230,
      }}
    >
      <Box sx={{ minWidth: 220, p: 2 }}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={130}
          sx={{ borderRadius: 3, bgcolor: theme.colors.innerCardBackground }}
        />
      </Box>
      <Box sx={{ flex: 1, p: { xs: 2, sm: 4 } }}>
        <Skeleton variant="text" width="60%" height={40} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="95%" height={22} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="90%" height={18} sx={{ mb: 2 }} />
        <Stack direction="row" spacing={1}>
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} variant="rounded" width={55} height={26} />
          ))}
        </Stack>
        <Box sx={{ mt: 2 }}>
          <Skeleton
            variant="rectangular"
            width={120}
            height={36}
            sx={{ mr: 2, borderRadius: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width={120}
            height={36}
            sx={{ borderRadius: 2 }}
          />
        </Box>
      </Box>
    </Paper>
  );
}