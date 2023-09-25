import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Import 'rapidApiKey' from your environment correctly.
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com',
    prepareHeaders: headers => {
      // Use 'rapidApiKey' as a variable without quotes.
      headers.set('X-RapidAPI-Key', rapidApiKey);
      headers.set(
        'X-RapidAPI-Host',
        'article-extractor-and-summarizer.p.rapidapi.com'
      );

      return headers;
    },
  }),
  endpoints: builder => ({
    getSummary: builder.query({
      // Construct the URL using a template literal.
      query: params => ({
        url: `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        // Replace 'length=3' with your desired query parameters.
      }),
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
