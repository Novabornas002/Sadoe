const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL =
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

export async function generateResponse(prompt) {
  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: `사용자의 소비 고민을 읽고
사도 되는 이유와 참아야 하는 이유를 균형 있게 말하고
짧고 재치 있게 정리해줘
마지막에 한 줄 결론을 내려줘

사용자 질문: ${prompt}`,
          },
        ],
      },
    ],
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const raw = await response.text();

    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status} / ${raw}`);
    }

    const data = JSON.parse(raw);
    return data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '응답이 비어 있습니다.';
  } catch (error) {
    throw new Error(`API 호출 중 오류: ${error.message}`);
  }
}