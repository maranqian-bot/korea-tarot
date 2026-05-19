import { fortuneScores, luckyGuides } from "../../utils/siteContent";
import "../../styles/DailyFortunePage.css";

export default function DailyFortunePage() {
  return (
    <div className="daily-page">
      <section className="daily-hero">
        <p className="daily-hero__date">2024년 5월 20일의 별자리 브리핑</p>
        <h1 className="section-title">오늘의 천운</h1>
        <p className="section-copy">전체 흐름은 밝고 선명합니다. 지금의 결정을 밀어줄 바람이 충분히 불고 있습니다.</p>
        <div className="daily-score glass-panel">
          <div className="daily-score__ring">
            <span>89</span>
          </div>
          <div>
            <p className="daily-score__label">종합 점수</p>
            <p className="daily-score__copy">매우 길함</p>
          </div>
        </div>
      </section>

      <section className="daily-bars">
        {fortuneScores.map((item) => (
          <article key={item.label} className="daily-bar glass-panel">
            <header>
              <h2>{item.label}</h2>
              <strong className={`accent-${item.accent}`}>{item.score}</strong>
            </header>
            <div className="daily-bar__track">
              <div className={`daily-bar__fill is-${item.accent}`} style={{ width: `${item.score}%` }} />
            </div>
          </article>
        ))}
      </section>

      <section className="daily-guides">
        {luckyGuides.map((guide) => (
          <article key={guide.title} className="daily-guide glass-panel">
            <h2>{guide.title}</h2>
            <p>{guide.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
