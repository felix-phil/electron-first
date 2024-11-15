import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { API_KEY, TopTracksResponse } from "../../api";

export const musicApi = createApi({
  reducerPath: "musics",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ws.audioscrobbler.com/2.0",
  }),
  tagTypes: ["Tracks"],
  endpoints: (builder) => ({
    getMusics: builder.query({
      query: ({ artist = "davido" }: { artist?: string }) => {
        return {
          url: `/method=artist.getTopTracks&artist=${artist}&api_key=${API_KEY}&format=json`,
          method: "get",
        };
      },

      transformResponse: (response: TopTracksResponse) =>
        response.toptracks.track,
      providesTags: ["Tracks"]
    }),
  }),
});
export const { useGetMusicsQuery } = musicApi;
