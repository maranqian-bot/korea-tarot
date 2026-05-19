import StitchPageRenderer from "../components/common/StitchPageRenderer";
import dailyHtml from "../../../specs/stitch/_3/code.html?raw";

export default function DailyFortunePage() {
  return <StitchPageRenderer html={dailyHtml} />;
}
