import { Box, Typography } from "@mui/material";

export const ItemCard = ({
  isActive,
  label,
  value,
}: {
  isActive: boolean;
  label: string;
  value: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography component="p" variant="body1">
        {label}
      </Typography>
      <Typography component="p" variant="body1">
        {isActive ? value : 0}
      </Typography>
    </Box>
  );
};
