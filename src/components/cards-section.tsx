import { getMonthlyRevelue } from "@/controllers";
import { Box, IconButton } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import { CardMonthly } from "./card-monthly";
import { useToggle } from "@/hooks";

export const CardsSection = () => {
  const {
    data: monthlyRevenue,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["revenue"],
    queryFn: getMonthlyRevelue,
  });

  const [isActive, toggleActive] = useToggle(true);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Something went wrong, please try it later</div>;
  }

  return (
    isSuccess && (
      <>
        <Box display="flex" justifyContent="flex-end">
          <IconButton aria-label="hide-information" onClick={toggleActive}>
            {isActive ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Box>
        <Box>
          {monthlyRevenue.revenueByMonth.map((month, idx) => (
            <Box
              key={month.id}
              position="relative"
              zIndex={1}
              mt={!isActive && idx !== 0 ? -16 : 0}
              sx={{ transition: ".4s" }}
            >
              <CardMonthly key={month.id} isActive={isActive} {...month} />
            </Box>
          ))}
        </Box>
      </>
    )
  );
};
