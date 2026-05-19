# Korea Tarot Constitution

## Core Principles

### I. Spec-Driven Development
모든 기능은 Spec → Plan → Tasks → Test → 구현 순서로 진행한다.

### II. Layered Architecture
Spring Boot는 Controller → Service → Repository 구조를 따른다.
AI 기능은 FastAPI에서 분리하여 처리한다.

### III. DTO Separation
Entity와 DTO는 반드시 분리한다.
API 응답에 Entity를 직접 노출하지 않는다.

### IV. AI Response Grounding
타로 해석은 가능한 한 RAG 문서를 기반으로 생성한다.
LLM이 임의로 과장된 예언, 공포 조장, 단정적 표현을 하지 않도록 제한한다.

### V. User Safety
건강, 생명, 법률, 투자 관련 질문에는 단정적인 답변을 하지 않는다.
“참고용 해석”임을 명확히 안내한다.

### VI. Simplicity First
초기 버전은 회원가입, 로그인, 타로 상담, 결과 저장, 마이페이지 조회에 집중한다.
결제, 포인트, 음성 기능은 후순위로 둔다.