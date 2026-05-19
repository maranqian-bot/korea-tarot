# Feature Specification: AI 타로 상담

**Feature Branch**: `001-tarot-reading`  
**Status**: Draft  
**Input**: 사용자는 고민을 입력하고 타로 카드 3장을 선택한 뒤 AI 해석을 받을 수 있어야 한다.

---

## User Story 1 - 타로 상담 생성 (P1)

로그인한 사용자는 자신의 고민을 입력하고 카드 3장을 선택하여 AI 타로 해석을 받을 수 있다.

### Why this priority
타로 상담은 서비스의 핵심 기능이다.

### Independent Test
로그인한 사용자가 고민과 카드 정보를 전송하면 AI 해석 결과가 생성되고 DB에 저장되는지 검증한다.

### Acceptance Scenarios

1. Given 로그인한 사용자  
   When 고민을 입력하고 카드 3장을 선택  
   Then AI 해석 결과가 생성된다

2. Given 로그인하지 않은 사용자  
   When 타로 상담 요청  
   Then 인증 오류가 발생한다

3. Given 카드가 3장 미만인 요청  
   When 상담 요청  
   Then validation 오류가 발생한다

---

## User Story 2 - 상담 결과 저장 (P2)

사용자는 AI 타로 해석 결과를 나중에 다시 확인할 수 있다.

### Acceptance Scenarios

1. Given 타로 상담 성공  
   When 결과 생성 완료  
   Then 상담 기록이 DB에 저장된다

2. Given 마이페이지 접속  
   When 상담 기록 조회  
   Then 이전 타로 상담 목록을 확인할 수 있다

---

## User Story 3 - RAG 기반 카드 해석 (P2)

AI는 선택된 카드의 기본 의미 문서를 검색하여 해석에 반영한다.

### Acceptance Scenarios

1. Given 선택된 카드 정보  
   When AI 해석 요청  
   Then 관련 카드 문서를 검색한다

2. Given 검색된 카드 문서  
   When 프롬프트 생성  
   Then 문서 기반으로 해석을 생성한다

---

## Functional Requirements

- FR-001: System MUST allow authenticated users to create tarot readings
- FR-002: System MUST validate question length
- FR-003: System MUST require exactly 3 selected tarot cards
- FR-004: System MUST store tarot reading result in MySQL
- FR-005: System MUST call FastAPI AI server for interpretation
- FR-006: System MUST retrieve tarot card meaning from FAISS
- FR-007: System MUST prevent fear-inducing or overly deterministic responses
- FR-008: System MUST allow users to view their reading history
- FR-009: System MUST separate Spring API server and FastAPI AI server
- FR-010: System MUST return readingId, selected cards, summary, and full interpretation

---

## Key Entities

### User
- userId
- email
- password
- nickname
- createdAt

### TarotReading
- readingId
- userId
- question
- summary
- aiResult
- createdAt

### TarotCardSelection
- selectionId
- readingId
- cardName
- position
- isReversed

### TarotCard
- cardId
- name
- uprightMeaning
- reversedMeaning
- loveMeaning
- careerMeaning
- keyword

---

## Edge Cases

- 사용자가 고민을 입력하지 않은 경우
- 카드가 3장이 아닌 경우
- FastAPI 서버 응답 실패
- OpenAI API 실패
- FAISS 검색 결과가 없는 경우
- 같은 요청을 여러 번 클릭한 경우
- 비로그인 사용자가 상담 요청한 경우

---

## Success Criteria

- SC-001: 사용자는 1분 이내 타로 상담을 완료할 수 있다
- SC-002: AI 해석 결과는 10초 이내 반환된다
- SC-003: 상담 결과는 DB에 정상 저장된다
- SC-004: 마이페이지에서 이전 상담 기록 조회가 가능하다