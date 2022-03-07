import request from "graphql-request"
import useSWR from "swr"

const fetcher = (query: string, variables?: object) =>
  request(
    `${process.env.NEXT_PUBLIC_BASE_URL as string}/api/graphql/`,
    query,
    variables
  )

export const useQuery = (query: string, variables?: object) => {
  return useSWR([query, variables], fetcher)
}
