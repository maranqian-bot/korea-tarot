import { Route, Routes } from "react-router-dom";
import DailyFortunePage from "../pages/DailyFortunePage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MyPage from "../pages/MyPage";
import ReadingHistoryPage from "../pages/ReadingHistoryPage";
import SignupPage from "../pages/SignupPage";
import TarotResultPage from "../pages/TarotResultPage";
import TarotSelectionPage from "../pages/TarotSelectionPage";
import TarotStartPage from "../pages/TarotStartPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/daily" element={<DailyFortunePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/tarot/start" element={<TarotStartPage />} />
      <Route path="/tarot/select" element={<TarotSelectionPage />} />
      <Route path="/tarot/result" element={<TarotResultPage />} />
      <Route path="/tarot/result/:readingId" element={<TarotResultPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/readings" element={<ReadingHistoryPage />} />
      <Route path="/archive" element={<ReadingHistoryPage />} />
    </Routes>
  );
}
