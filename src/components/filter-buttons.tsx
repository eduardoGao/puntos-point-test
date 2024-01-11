import { Box, Button } from "@mui/material";

const BUTTONS = [
  { label: "Hoy", value: "today" },
  { label: "7D", value: "week" },
  { label: "Este mes", value: "month" },
  { label: "6M", value: "six-months" },
  { label: "1A", value: "year" },
];

export const FilterButtons = ({
  range,
  handleSelection,
}: {
  range: string;
  handleSelection: (value: string) => void;
}) => {
  return (
    <Box>
      {BUTTONS.map((button, idx) => (
        <Button
          key={idx}
          color="secondary"
          variant={range === button.value ? "contained" : "text"}
          size="small"
          sx={{ color: "inherit", textTransform: "capitalize" }}
          value={button.value}
          onClick={() => handleSelection(button.value)}
        >
          {button.label}
        </Button>
      ))}
    </Box>
  );
};
