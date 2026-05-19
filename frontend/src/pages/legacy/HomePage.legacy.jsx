import { Link } from "react-router-dom";
import { categoryCards } from "../../utils/siteContent";
import "../../styles/HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__copy">
          <span className="home-hero__eyebrow">COSMIC ORACLE IS OPEN</span>
          <h1 className="section-title">
            신비로운 운명의
            <br />
            문이 열리는 순간
          </h1>
          <p className="section-copy">
            별이 들려주는 메시지를 데일리 운세, 타로 리딩, 기록소 경험으로 나누어 React 구조에 맞게 다시
            정리했습니다.
          </p>
          <div className="home-hero__actions">
            <Link className="home-hero__cta" to="/daily">
              오늘의 운세 보기
            </Link>
            <Link className="home-hero__ghost" to="/tarot/select">
              카드 선택하기
            </Link>
          </div>
        </div>
        <div className="home-hero__orb glass-panel">
          <div className="home-hero__orb-core" />
          <p>빛의 결정구 안에서 오늘의 흐름을 읽어보세요.</p>
        </div>
      </section>

      <section className="home-grid">
        {categoryCards.map((card) => (
          <Link key={card.title} className="home-card glass-panel" to={card.to}>
            <p className={`home-card__label accent-${card.accent}`}>{card.cta}</p>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </Link>
        ))}
      </section>

      <section className="home-trust glass-panel">
        <div>
          <p className="home-trust__eyebrow">Design Migration</p>
          <h2 className="section-title">stitch 시안을 React 페이지로 분리</h2>
        </div>
        <div className="home-trust__stats">
          <div>
            <strong>8</strong>
            <span>Screen Variants</span>
          </div>
          <div>
            <strong>7+1</strong>
            <span>Stitch HTML + 복원 페이지</span>
          </div>
          <div>
            <strong>React</strong>
            <span>Component Driven</span>
          </div>
          <div>
            <strong>CSS</strong>
            <span>Page Scoped Files</span>
          </div>
        </div>
      </section>
    </div>
  );
}
