import { getUserInfo } from "@/api/client/userInfo";
import { useQuery } from "@tanstack/react-query";

export default function useUserInfoQuery() {
  const query = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => getUserInfo(),
  });

  return query;
}
