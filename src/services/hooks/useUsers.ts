import { useQuery } from "react-query";
import { api } from "../api";

export interface User {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

interface GetUsersResponse {
  users: User[];
  totalCount: number;
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
  {
    const { data, headers } = await api.get("/users", {
      params: { page },
    });
    const users = data.users?.map((user: User) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.created_at).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
      };
    });
    const totalCount = Number(headers["x-total-count"]);

    return { users, totalCount };
  }
}

export function useUsers(page: number) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, //10 minutes
  });
}
