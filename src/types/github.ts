export interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface GitHubSearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubUser[];
}

export type SearchType = "users" | "organizations";

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  perPage: number;
}