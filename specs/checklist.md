# Korea Tarot 구현 체크리스트

## 1. 설계

- [ ] CHK001 Spec 문서 작성 완료
- [ ] CHK002 Plan 문서 작성 완료
- [ ] CHK003 Tasks 문서 작성 완료
- [ ] CHK004 Spring / FastAPI / React 역할 분리 완료
- [ ] CHK005 API 흐름 정의 완료

---

## 2. Backend

- [ ] CHK006 User Entity 구현
- [ ] CHK007 TarotReading Entity 구현
- [ ] CHK008 TarotCardSelection Entity 구현
- [ ] CHK009 DTO 분리 완료
- [ ] CHK010 Repository 구현 완료
- [ ] CHK011 Service 구현 완료
- [ ] CHK012 Controller 구현 완료

---

## 3. Auth

- [ ] CHK013 회원가입 구현
- [ ] CHK014 로그인 구현
- [ ] CHK015 JWT 발급 구현
- [ ] CHK016 인증 사용자 정보 추출 구현
- [ ] CHK017 비로그인 접근 제한 적용

---

## 4. AI / RAG

- [ ] CHK018 FastAPI 서버 실행 확인
- [ ] CHK019 OpenAI API 연결 확인
- [ ] CHK020 FAISS 생성 완료
- [ ] CHK021 Tarot 문서 embedding 완료
- [ ] CHK022 RAG 검색 정상 동작
- [ ] CHK023 AI 해석 응답 정상 반환

---

## 5. Frontend

- [ ] CHK024 메인 페이지 구현
- [ ] CHK025 회원가입 페이지 구현
- [ ] CHK026 로그인 페이지 구현
- [ ] CHK027 고민 입력 UI 구현
- [ ] CHK028 카드 선택 UI 구현
- [ ] CHK029 결과 페이지 구현
- [ ] CHK030 마이페이지 구현

---

## 6. Validation

- [ ] CHK031 고민 내용 빈 값 방지
- [ ] CHK032 카드 3장 선택 검증
- [ ] CHK033 로그인 여부 검증
- [ ] CHK034 AI 서버 실패 처리
- [ ] CHK035 DB 저장 실패 처리

---

## 7. Test

- [ ] CHK036 Spring 단위 테스트 작성
- [ ] CHK037 Controller 테스트 작성
- [ ] CHK038 FastAPI 테스트 작성
- [ ] CHK039 RAG 검색 테스트 작성
- [ ] CHK040 프론트 전체 흐름 테스트

---

## 8. Deploy

- [ ] CHK041 application.yml 환경 분리
- [ ] CHK042 .env.example 작성
- [ ] CHK043 실제 secret GitHub 업로드 금지
- [ ] CHK044 Dockerfile 작성
- [ ] CHK045 GitHub Actions 설정
- [ ] CHK046 EC2 배포 확인