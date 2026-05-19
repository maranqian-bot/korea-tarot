## Phase 1: Setup

- [x] T001 GitHub repo 초기 구조 생성
- [x] T002 frontend / backend / ai-server 폴더 분리
- [ ] T003 Spring Boot 프로젝트 생성
- [x] T004 React + Vite 프로젝트 생성
- [ ] T005 FastAPI 프로젝트 생성
- [ ] T006 env.example 작성

---

## Phase 2: Backend Foundation

- [ ] T007 MySQL 연결 설정
- [ ] T008 JPA 설정
- [ ] T009 BaseEntity 생성
- [ ] T010 ApiResponse 공통 응답 구조 생성
- [ ] T011 GlobalExceptionHandler 생성
- [ ] T012 ErrorCode 정의
- [ ] T013 JWT 인증 구조 구현

---

## Phase 3: User Feature

- [ ] T014 User Entity 생성
- [ ] T015 회원가입 DTO 생성
- [ ] T016 로그인 DTO 생성
- [ ] T017 AuthService 구현
- [ ] T018 AuthController 구현
- [ ] T019 회원가입 validation 적용
- [ ] T020 로그인 JWT 발급 구현

---

## Phase 4: Tarot Reading Domain

- [ ] T021 TarotReading Entity 생성
- [ ] T022 TarotCardSelection Entity 생성
- [ ] T023 TarotCard Entity 생성
- [ ] T024 TarotReadingRepository 생성
- [ ] T025 TarotCardSelectionRepository 생성
- [ ] T026 TarotReading DTO 생성

---

## Phase 5: Tarot Reading API

- [ ] T027 POST /api/tarot/readings 구현
- [ ] T028 GET /api/tarot/readings 구현
- [ ] T029 GET /api/tarot/readings/{readingId} 구현
- [ ] T030 로그인 사용자 본인 기록만 조회하도록 권한 검증
- [ ] T031 카드 3장 validation 적용
- [ ] T032 고민 내용 validation 적용

---

## Phase 6: FastAPI AI Server

- [ ] T033 FastAPI 기본 서버 생성
- [ ] T034 OpenAI client 설정
- [ ] T035 LangChain 설정
- [ ] T036 FAISS vector store 생성
- [ ] T037 tarot card 문서 로딩 기능 구현
- [ ] T038 POST /api/ai/tarot-reading 구현
- [ ] T039 AI 응답 DTO 정의

---

## Phase 7: RAG Data

- [ ] T040 Major Arcana 카드 문서 작성
- [ ] T041 Minor Arcana 카드 문서 작성
- [ ] T042 카드별 정방향/역방향 의미 정리
- [ ] T043 연애/직업/관계별 해석 문서 정리
- [ ] T044 문서 chunking 처리
- [ ] T045 embedding 생성
- [ ] T046 FAISS 저장

---

## Phase 8: Prompt Engineering

- [ ] T047 System Prompt 작성
- [ ] T048 RAG Prompt 작성
- [ ] T049 Safety Prompt 작성
- [ ] T050 결과 응답 JSON format 정의
- [ ] T051 공포 조장 표현 방지 규칙 추가

---

## Phase 9: Frontend

- [x] T052 메인 페이지 구현
- [x] T053 로그인 페이지 구현
- [x] T054 회원가입 페이지 구현
- [x] T055 고민 입력 페이지 구현
- [x] T056 카드 선택 페이지 구현
- [ ] T057 카드 flip animation 구현
- [x] T058 AI 해석 결과 페이지 구현
- [x] T059 마이페이지 상담 기록 목록 구현
- [x] T060 상담 상세 페이지 구현

---

## Phase 10: Test

- [ ] T061 AuthController 테스트
- [ ] T062 TarotReadingService 테스트
- [ ] T063 TarotReadingController 테스트
- [ ] T064 FastAPI AI endpoint 테스트
- [ ] T065 RAG 검색 테스트
- [ ] T066 프론트 상담 흐름 테스트

---

## Phase 11: Deploy

- [ ] T067 Dockerfile 작성
- [ ] T068 GitHub Actions 설정
- [ ] T069 EC2 배포 설정
- [ ] T070 환경변수 등록
- [ ] T071 Swagger 확인
- [ ] T072 운영 환경 테스트
