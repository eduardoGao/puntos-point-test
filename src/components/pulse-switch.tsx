import { BarChart, Star } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export function PulseSwitch({
  isActive,
  togglePulse,
}: {
  isActive: boolean;
  togglePulse: () => void;
}) {
  const translation = isActive ? 100 : 0;

  return (
    <Box
      id="pulse-switch-button"
      component="button"
      onClick={togglePulse}
      sx={{ cursor: "pointer" }}
      bgcolor="transparent"
      width="208px"
      height="45px"
      border={1}
      p={0.3}
      borderRadius={7}
      borderColor="primary.main"
      color="black"
      position="relative"
    >
      <Box
        height="95%"
        width="100px"
        bgcolor="primary.main"
        borderRadius={7}
        sx={{ transform: `translateX(${translation}%)`, transition: ".4s" }}
      ></Box>

      <Grid
        container
        position="absolute"
        height={"100%"}
        top={0}
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item>
          <Box display="flex" alignItems="center" gap={1}>
            <BarChart
              sx={{ color: !isActive ? "white" : "black", transition: ".4s" }}
            />
            <Typography
              component="p"
              variant="body2"
              color={!isActive ? "white" : "black"}
              sx={{ transition: ".4s" }}
            >
              Gráfico
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" alignItems="center" gap={1}>
            <Star
              sx={{ color: isActive ? "white" : "black", transition: ".4s" }}
            />
            <Typography
              component="p"
              variant="body2"
              color={isActive ? "white" : "black"}
              sx={{ transition: ".4s" }}
            >
              Pulso
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
