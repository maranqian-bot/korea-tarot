import StitchPageRenderer from "../components/common/StitchPageRenderer";
import tarotSelectionHtml from "../../specs/stitch/_4/code.html?raw";

export default function TarotStartPage() {
  // TODO: Dedicated /tarot/start stitch source is not available yet, so the current selection screen is reused to preserve UI.
  return <StitchPageRenderer html={tarotSelectionHtml} />;
}
