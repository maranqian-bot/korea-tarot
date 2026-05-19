import { tarotSpread } from "../../utils/siteContent";
import "../../styles/TarotResultPage.css";

export default function TarotResultPage() {
  return (
    <div className="tarot-result-page">
      <section className="tarot-result-page__header">
        <h1 className="section-title">당신의 운명, 세 가지 진실</h1>
        <p className="section-copy">과거, 현재, 미래에 놓인 카드의 메시지를 한 화면에서 읽을 수 있도록 결과 페이지를 분리했습니다.</p>
      </section>
      <section className="tarot-result-grid">
        {tarotSpread.map((item) => (
          <article key={item.phase} className="tarot-result-card glass-panel">
            <p className="tarot-result-card__phase">{item.phase}</p>
            <div className="tarot-result-card__art" />
            <h2>{item.card}</h2>
            <p className="tarot-result-card__subtitle">{item.subtitle}</p>
            <p className="tarot-result-card__body">{item.text}</p>
          </article>
        ))}
      </section>
      <section className="tarot-result-summary glass-panel">
        <h2>성좌가 전하는 종합 메시지</h2>
        <p>
          감정은 더 부드럽게 흐르고, 선택은 더 또렷해집니다. 과거의 고요함이 현재의 균형을 만들었고, 그 균형은
          미래의 희망으로 연결됩니다.
        </p>
      </section>
    </div>
  );
}
