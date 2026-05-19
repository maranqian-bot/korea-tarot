import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tarotDeck } from "../../utils/siteContent";
import "../../styles/TarotSelectionPage.css";

export default function TarotSelectionPage() {
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="tarot-select-page">
      <section className="tarot-select-page__intro">
        <h1 className="section-title">당신의 운명을 선택하세요</h1>
        <p className="section-copy">가장 먼저 시선이 머무는 카드를 눌러 지금의 질문과 가까운 상징을 골라보세요.</p>
      </section>

      <section className="tarot-fan glass-panel">
        <div className="tarot-fan__deck">
          {tarotDeck.map((card, index) => (
            <button
              key={card.id}
              className={selectedId === card.id ? "tarot-fan__card is-selected" : "tarot-fan__card"}
              style={{
                transform: `translateX(${index * 36 - 72}px) rotate(${card.angle})`,
                zIndex: selectedId === card.id ? 10 : index + 1,
              }}
              type="button"
              onClick={() => setSelectedId(card.id)}
            >
              <span className="tarot-fan__ornament" />
              <span className="tarot-fan__name">{card.name}</span>
            </button>
          ))}
        </div>
        <div className="tarot-fan__actions">
          <p>{selectedId ? "카드가 선택되었습니다. 결과 리딩으로 이동할 수 있어요." : "카드를 하나 선택해 주세요."}</p>
          <button
            className="tarot-fan__cta"
            type="button"
            disabled={!selectedId}
            onClick={() => navigate("/tarot/result")}
          >
            리딩 열기
          </button>
        </div>
      </section>
    </div>
  );
}
