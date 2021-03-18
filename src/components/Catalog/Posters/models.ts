// export interface PostersProps {
//   movies: {
//     title: string;
//     tagline: string;
//     vote_average: number;
//     vote_count: number;
//     release_date: string;
//     poster_path: string;
//     overview: string;
//     budget: number;
//     revenue: number;
//     runtime: number;
//     genres: string[];
//     id: number;
//   };
//   total?: number;
//   offset?: number;
//   limit?: number;
//   currentPage?: number;
//   totalPages?: number;
//   loading?: boolean;
//   error?: boolean;
// }[];
export interface PostersProps {
  setMovieDetails: {
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    runtime: number;
    genres: string[];
    id: number;
  };
}
