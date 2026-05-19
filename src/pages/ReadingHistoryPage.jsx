import StitchPageRenderer from "../components/common/StitchPageRenderer";
import archiveHtml from "../../specs/stitch/_1/code.html?raw";

export default function ReadingHistoryPage() {
  return <StitchPageRenderer html={archiveHtml} />;
}
