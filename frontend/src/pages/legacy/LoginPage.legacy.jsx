import { Link } from "react-router-dom";
import "../../styles/LoginPage.css";

export default function LoginPage() {
  return (
    <div className="auth-page auth-page--login">
      <div className="auth-page__bg" />
      <main className="auth-card glass-panel">
        <p className="auth-card__eyebrow">ENTER THE KINGDOM</p>
        <h1>운세왕국 로그인</h1>
        <p className="auth-card__copy">신비로운 기록과 개인 맞춤 리딩에 다시 연결되는 입구입니다.</p>
        <form className="auth-form">
          <label>
            아이디
            <input placeholder="희망하는 아이디" type="text" />
          </label>
          <label>
            비밀번호
            <input placeholder="비밀번호를 입력하세요" type="password" />
          </label>
          <button type="submit">로그인</button>
        </form>
        <div className="auth-links">
          <span>처음 방문하셨나요?</span>
          <Link to="/signup">회원가입</Link>
        </div>
      </main>
    </div>
  );
}
