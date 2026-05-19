import { useState } from "react";
import { featuredStats, timelineEntries } from "../../utils/siteContent";
import "../../styles/ArchivePage.css";

export default function ArchivePage() {
  const [selected, setSelected] = useState(timelineEntries[0]);

  return (
    <div className="archive-page">
      <section className="archive-page__header">
        <h1 className="section-title">운명 기록소</h1>
        <p className="section-copy">스티치의 타임라인 화면을 React 상태 기반으로 옮겨, 클릭 시 상세 해석이 바뀌는 구조로 정리했습니다.</p>
      </section>

      <section className="archive-timeline">
        <div className="archive-timeline__list">
          {timelineEntries.map((entry) => (
            <button
              key={entry.date}
              className={selected.date === entry.date ? "archive-timeline__item glass-panel is-active" : "archive-timeline__item glass-panel"}
              type="button"
              onClick={() => setSelected(entry)}
            >
              <p className={`accent-${entry.accent}`}>{entry.date}</p>
              <h2>{entry.title}</h2>
              <span>{entry.summary}</span>
            </button>
          ))}
        </div>
        <aside className="archive-detail glass-panel">
          <p className="archive-detail__date">{selected.date}</p>
          <h2>{selected.title}</h2>
          <p>{selected.detail}</p>
        </aside>
      </section>

      <section className="archive-stats">
        {featuredStats.map((stat) => (
          <article key={stat.label} className="archive-stat glass-panel">
            <p>{stat.label}</p>
            <h3>{stat.value}</h3>
            <span>{stat.note}</span>
          </article>
        ))}
      </section>
    </div>
  );
}
