import { getCustomers } from "@/controllers";
import { useQuery } from "@tanstack/react-query";

export function useCustomers(range: string) {
  const query = useQuery({
    queryKey: ["rangeDate", { range }],
    queryFn: () => getCustomers({ range }),
  });

  return { ...query };
}
