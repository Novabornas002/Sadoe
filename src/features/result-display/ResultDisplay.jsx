import './ResultDisplay.css';

export function ResultDisplay({ result, isLoading, error }) {
  if (isLoading) {
    return (
      <div className="result-display">
        <div className="loading">
          <div className="spinner"></div>
          판단 중...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="result-display">
        <div className="error">오류: {error}</div>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  return (
    <div className="result-display">
      <h3>판단 결과</h3>
      <div className="result-text">{result}</div>
    </div>
  );
}
