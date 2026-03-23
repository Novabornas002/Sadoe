import { useState } from 'react';
import { QuestionInput } from '../../features/question-input/QuestionInput';
import { ResultDisplay } from '../../features/result-display/ResultDisplay';
import { Button } from '../../shared/ui/Button';
import { generateResponse } from '../../shared/lib/geminiApi';
import './MainPage.css';

export function MainPage() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);
    setResult('');

    try {
      const response = await generateResponse(prompt);
      setResult(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    alert('결과가 복사되었습니다!');
  };

  const handleNewResponse = async () => {
    const modifiedPrompt = prompt + ' (다른 관점에서 판단해줘)';
    setIsLoading(true);
    setError(null);
    try {
      const response = await generateResponse(modifiedPrompt);
      setResult(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="main-page">
      <div className="hero-box">
        <span className="tag">AI Shopping Advisor</span>
        <h1>사도 돼?</h1>
        <p>지금 이 소비가 합리적인지, AI가 객관적으로 정리해드릴게요.</p>
      </div>

      <div className="app-card">
        <section className="section question-section">
          <QuestionInput prompt={prompt} setPrompt={setPrompt} />
          <Button onClick={handleSubmit} disabled={isLoading || !prompt.trim()} className="primary-btn">
            판단해줘!
          </Button>
          <p className="hint">AI가 심층 분석 후 객관적인 판단을 도와줍니다.</p>
        </section>

        <section className="section result-section">
          <ResultDisplay result={result} isLoading={isLoading} error={error} />
          {result && !isLoading && !error && (
            <div className="action-row">
              <Button onClick={handleCopy} className="secondary-btn">복사하기</Button>
              <Button onClick={handleNewResponse} className="secondary-btn">다른 답변 보기</Button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}