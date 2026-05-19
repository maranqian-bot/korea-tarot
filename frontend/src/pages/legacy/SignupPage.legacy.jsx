import { Link } from "react-router-dom";
import "../../styles/SignupPage.css";

export default function SignupPage() {
  return (
    <div className="auth-page auth-page--signup">
      <div className="auth-page__bg" />
      <main className="auth-card glass-panel">
        <p className="auth-card__eyebrow">JOIN THE KINGDOM</p>
        <h1>운세왕국 회원가입</h1>
        <p className="auth-card__copy">`stitch/_6`는 HTML 없이 이미지 한 장만 있어서, 화면을 보고 React 가입 페이지로 복원했습니다.</p>
        <form className="signup-form">
          <div className="signup-form__grid">
            <label>
              이름
              <input placeholder="성함을 입력하세요" type="text" />
            </label>
            <label>
              아이디
              <input placeholder="희망하는 아이디" type="text" />
            </label>
            <label>
              비밀번호
              <input placeholder="영문, 숫자 포함 8자" type="password" />
            </label>
            <label>
              비밀번호 확인
              <input placeholder="비밀번호를 다시 입력하기" type="password" />
            </label>
          </div>
          <div className="signup-form__row">
            <label>
              이메일
              <input placeholder="example@destiny.com" type="email" />
            </label>
            <button type="button">인증번호 전송</button>
          </div>
          <label>
            이메일 인증번호
            <input placeholder="6자리 인증코드를 입력하세요" type="text" />
          </label>
          <label className="signup-form__check">
            <input type="checkbox" />
            <span>이용약관 및 개인정보처리방침에 동의합니다.</span>
          </label>
          <button className="signup-form__submit" type="submit">
            회원가입
          </button>
        </form>
        <div className="auth-links">
          <span>이미 연결된 운명이 있나요?</span>
          <Link to="/login">로그인</Link>
        </div>
      </main>
    </div>
  );
}
