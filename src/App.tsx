import React from "react";

import { SearchForm } from "./components/SearchForm/SearchForm";
import { useGitHubSearch } from "./hooks/useGithubSearch";
import { ResultGrid } from "./components/SearchResults/ResultGrid";
import { Pagination } from "./components/Pagination/Pagination";
import { ErrorBoundary } from "./components/ErrorBoundary";

const App: React.FC = () => {
  const {
    searchTerm,
    setSearchTerm,
    searchType,
    setSearchType,
    results,
    isLoading,
    error,
    pagination,
    handleSearch,
    handlePageChange,
    isSubmitted,
  } = useGitHubSearch();

  const canShowResultNotFound =
    results.length === 0 && !isLoading && !error && isSubmitted;

  return (
    <ErrorBoundary>
      <div className="max-w-5xl mx-auto p-6" data-testid="app-container">
        <h1
          className="text-3xl font-bold mb-8"
          id="search-bar"
          data-testid="app-title"
        >
          GitHub Search
        </h1>

        <SearchForm
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchType={searchType}
          setSearchType={setSearchType}
          isLoading={isLoading}
          onSubmit={handleSearch}
          data-loading={isLoading}
        />

        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-10"
            role="alert"
            data-testid="error-message"
          >
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {canShowResultNotFound && (
          <p
            data-testid="no-results-message"
            className="text-center text-gray-500"
          >
            No results found
          </p>
        )}

        <main
          id="search-results"
          role="region"
          aria-label="Search results"
          tabIndex={-1}
          data-testid="search-results"
        >
          <ResultGrid results={results} />

          {pagination && (
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              onPageChange={handlePageChange}
              isLoading={isLoading}
              totalResults={pagination.totalResults}
              resultsPerPage={pagination.perPage}
              data-testid="pagination"
            />
          )}
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default App;
