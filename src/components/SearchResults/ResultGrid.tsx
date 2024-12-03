import React from "react";
import { ResultCard } from "./ResultCard";
import { GitHubUser } from "../../types/github";

interface ResultsGridProps {
  results: GitHubUser[];
}

export const ResultGrid: React.FC<ResultsGridProps> = ({ results }) => {
  return (
    <div
      data-testid="results-grid"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {results.map((result, index) => (
        <div key={result.id} data-testid={`result-item-${index}`}>
          <ResultCard result={result} index={index} />
        </div>
      ))}
    </div>
  );
};
