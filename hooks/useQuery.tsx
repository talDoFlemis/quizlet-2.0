import request from "graphql-request"
import useSWR from "swr"

const fetcher = (query: string, variables?: object) =>
  request("/api/graphql", query, variables)

export const useQuery = (query: string, variables?: object) => {
  return useSWR([query, variables], fetcher)
}
