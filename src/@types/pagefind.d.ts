declare module '@pagefind/default-ui' {
  interface SearchResult {
    url: string;
    title: string;
    excerpt: string;
  }

  interface SearchResponse {
    results: SearchResult[];
  }

  interface PagefindModule {
    search: (query: string) => Promise<SearchResponse>;
    init: () => Promise<void>;
  }

  const pagefind: PagefindModule;
  export default pagefind;
  export type { SearchResult, SearchResponse, PagefindModule };
} 