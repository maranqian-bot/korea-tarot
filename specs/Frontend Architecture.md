# Frontend Architecture

## Stack

- React
- Vite
- React Router
- Zustand
- TanStack Query
- TailwindCSS
- Framer Motion

---

## Folder Structure

frontend/
 ├── src/
 │    ├── api/
 │    ├── components/
 │    ├── pages/
 │    ├── layouts/
 │    ├── hooks/
 │    ├── store/
 │    ├── types/
 │    ├── utils/
 │    ├── styles/
 │    └── router/

---

## Routing

/
/login
/signup
/tarot/start
/tarot/select
/tarot/result/:readingId
/mypage
/mypage/readings

---

## State Management

Global State:
- auth user
- selected cards
- tarot question
- loading state

Server State:
- tarot result
- reading history
- auth session

---

## API Layer

authApi.ts
tarotApi.ts
userApi.ts

모든 API는 axios instance를 공유한다.
JWT interceptor를 사용한다.