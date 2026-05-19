import { historyItems, profileTags } from "../../utils/siteContent";
import "../../styles/MyPage.css";

export default function MyPage() {
  return (
    <div className="mypage">
      <section className="mypage-profile glass-panel">
        <div className="mypage-profile__avatar" />
        <div className="mypage-profile__content">
          <h1 className="section-title">신비로운 여행자</h1>
          <p className="section-copy">별이 흐르는 리듬 속에서 자신의 기록을 차곡차곡 수집하는 사용자 프로필 화면입니다.</p>
          <div className="mypage-profile__tags">
            {profileTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mypage-grid">
        <aside className="mypage-menu glass-panel">
          <h2>나의 영혼 기록</h2>
          <button type="button">최근 리딩 내역</button>
          <button type="button">개인정보 설정</button>
          <button type="button">로그아웃</button>
        </aside>
        <div className="mypage-history">
          <h2>최근의 예언</h2>
          {historyItems.map((item) => (
            <article key={`${item.date}-${item.title}`} className="mypage-history__item glass-panel">
              <p>{item.date}</p>
              <h3>
                {item.type}: {item.title}
              </h3>
              <span>{item.summary}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
