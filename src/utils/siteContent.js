// TODO: Retained mock content for legacy componentized pages during frontend architecture migration.

export const navItems = [
  { label: "오늘의 운세", to: "/daily" },
  { label: "타로 보기", to: "/tarot/select" },
  { label: "상담 기록", to: "/mypage/readings" },
  { label: "마이페이지", to: "/mypage" },
];

export const categoryCards = [
  { title: "오늘의 운세", description: "데일리 리딩 화면", to: "/daily", accent: "primary", cta: "EXPLORE" },
  { title: "타로 보기", description: "카드 선택과 결과 확인", to: "/tarot/select", accent: "secondary", cta: "SELECT" },
  { title: "상담 기록", description: "이전 리딩 다시 보기", to: "/mypage/readings", accent: "tertiary", cta: "REVISIT" },
  { title: "마이페이지", description: "개인 기록과 설정 관리", to: "/mypage", accent: "primary", cta: "ENTER" },
];

export const historyItems = [
  { date: "2024.05.20", type: "오늘의 총운", title: "태양의 축복", summary: "긍정의 에너지가 강하게 흐르는 하루입니다." },
  { date: "2024.05.18", type: "타로", title: "연인", summary: "관계와 선택의 균형을 살피기 좋은 시기입니다." },
];

export const timelineEntries = [
  {
    date: "2024.05.20",
    title: "심야의 타로: 연인",
    summary: "관계의 흐름이 부드럽게 열리는 날입니다.",
    accent: "primary",
    detail: "연인 카드는 조화와 선택을 상징합니다.",
  },
];

export const featuredStats = [
  { label: "가장 많이 뽑힌 카드", value: "The Star", note: "희망과 회복의 상징" },
  { label: "운명 기록 누적", value: "128 Days", note: "별과 연결된 시간이 쌓였습니다." },
];

export const profileTags = ["물병자리", "별빛 수집가", "Level 24 Explorer"];

export const tarotDeck = [
  { id: 1, name: "The Moon", angle: "-18deg" },
  { id: 2, name: "The Hermit", angle: "-9deg" },
  { id: 3, name: "The Lovers", angle: "0deg" },
  { id: 4, name: "The Star", angle: "9deg" },
  { id: 5, name: "Wheel of Fortune", angle: "18deg" },
];

export const tarotSpread = [
  { phase: "Past", card: "은둔자", subtitle: "The Hermit", text: "고요한 시간이 지금의 통찰을 만들었습니다." },
  { phase: "Present", card: "연인", subtitle: "The Lovers", text: "지금은 관계와 선택이 함께 중요한 시기입니다." },
  { phase: "Future", card: "별", subtitle: "The Star", text: "희망과 회복의 메시지가 더 가까워집니다." },
];

export const fortuneScores = [
  { label: "연애운", score: 85, accent: "secondary" },
  { label: "금전운", score: 70, accent: "primary" },
  { label: "직장운", score: 92, accent: "tertiary" },
  { label: "건강운", score: 65, accent: "error" },
];

export const luckyGuides = [
  { title: "빈티지 열쇠", description: "막혀 있던 고민을 풀어줄 상징입니다." },
  { title: "미스틱 바이올렛", description: "감정과 직관을 정렬해주는 컬러입니다." },
];
