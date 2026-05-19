# Implementation Plan: Korea Tarot

**Branch**: `001-tarot-reading`  
**Feature**: AI 타로 상담 기능

---

## Summary

Korea Tarot은 사용자가 고민을 입력하고 타로 카드 3장을 선택하면 AI가 RAG 기반으로 해석을 생성하는 서비스이다.

핵심 기술 접근:

- React 기반 카드 선택 UI
- Spring Boot 기반 회원/상담 API
- FastAPI 기반 AI 해석 서버
- LangChain + FAISS 기반 RAG 검색
- MySQL 기반 상담 기록 저장

---

## Technical Context

Language/Version:
- Java 21
- Spring Boot 3.x
- Python 3.11+
- React + Vite

Primary Dependencies:
- Spring Web
- Spring Data JPA
- Spring Security JWT
- Validation
- Lombok
- FastAPI
- LangChain
- FAISS
- OpenAI API
- MySQL

Storage:
- MySQL
- FAISS Vector Store

Testing:
- JUnit5
- SpringBootTest
- WebMvcTest
- FastAPI pytest
- Postman / Swagger

Target Platform:
- AWS EC2
- GitHub Actions CI/CD

---

## Architecture

```text
React Frontend
→ Spring Boot API Server
→ FastAPI AI Server
→ LangChain Retriever
→ FAISS Vector Store
→ OpenAI API