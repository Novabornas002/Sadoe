import './QuestionInput.css';

const templates = [
  '실용적인 소비인지 알고 싶어요',
  '충동구매인지 판단해 주세요',
  '이미 비슷한 게 있는데 또 사고 싶어요',
  '비싼데 만족도가 클지 고민돼요',
];

const templateMap = {
  '실용적인 소비인지 알고 싶어요':
    '나는 [물건]을 사고 싶어요. 가격은 [ ] 정도이고, 주로 [사용 목적] 때문에 필요하다고 느끼고 있어. 지금 내 상황에서 이 소비가 실용적인 선택인지 판단해줘.',
  '충동구매인지 판단해 주세요':
    '나는 지금 [물건]이 너무 사고 싶어. 가격은 [ ] 정도이고, 갑자기 갖고 싶다는 생각이 들었어. 이게 정말 필요한 소비인지, 아니면 충동구매에 가까운지 판단해줘.',
  '이미 비슷한 게 있는데 또 사고 싶어요':
    '나는 이미 [비슷한 물건]을 가지고 있는데도 [새로 사고 싶은 물건]이 또 사고 싶어. 가격은 [ ] 정도야. 이 소비가 중복구매인지, 아니면 살 만한 이유가 있는지 판단해줘.',
  '비싼데 만족도가 클지 고민돼요':
    '나는 [물건]을 사고 싶지만 가격이 [ ] 정도로 부담돼. 내 예산은 [ ] 정도이고, 대신 [기대하는 효과 또는 이유]가 있어서 고민 중이야. 이 물건이 가격만큼 만족도가 클지 판단해줘.',
};

export function QuestionInput({ prompt, setPrompt }) {
  const handleTemplateClick = (template) => {
    setPrompt(templateMap[template]);
  };

  return (
    <div className="question-input">
      <h3 className="question-title">소비 고민을 입력하세요</h3>
      <p className="question-description">
        질문 작성 부담을 줄이기 위해 예시를 준비했어요. 자동 생성된 문장을 참고해서
        내 상황에 맞게 수정해보세요.
      </p>

      <div className="chip-list">
        {templates.map((template) => (
          <button
            key={template}
            type="button"
            className="chip"
            onClick={() => handleTemplateClick(template)}
          >
            {template}
          </button>
        ))}
      </div>

      <textarea
        className="prompt-textarea"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="예: 나는 이미 태블릿이 있는데 아이패드를 또 사고 싶어. 공부할 때 필기용으로 쓸지 고민 중이야. 가격은 60만 원 정도고, 꼭 필요한지는 잘 모르겠어."
      />

      <p className="helper-text">
        무엇을 사고 싶은지, 가격, 이유, 이미 가진 비슷한 물건, 사용 빈도를 함께 적으면
        더 정확한 판단을 받을 수 있어요.
      </p>
    </div>
  );
}