import StitchPageRenderer from "../components/common/StitchPageRenderer";
import myPageHtml from "../../specs/stitch/_2/code.html?raw";

export default function MyPage() {
  return <StitchPageRenderer html={myPageHtml} />;
}
