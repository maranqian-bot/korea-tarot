import { NavLink, Outlet, useLocation } from "react-router-dom";
import { navItems } from "../utils/siteContent";
import "./MainLayout.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="site-footer__brand">운세왕국</p>
        <p className="site-footer__copy">© 2024 Fortune Kingdom. All celestial rights reserved.</p>
      </div>
      <div className="site-footer__links">
        <a href="/">이용약관</a>
        <a href="/">개인정보처리방침</a>
        <a href="/">제휴문의</a>
      </div>
    </footer>
  );
}

export default function MainLayout() {
  const location = useLocation();
  const isCurrent = (to) => location.pathname === to;

  return (
    <div className="site-shell">
      <div className="site-shell__backdrop" />
      <header className="site-header">
        <NavLink className="site-logo" to="/">
          운세왕국
        </NavLink>
        <nav className="site-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className={isCurrent(item.to) ? "site-nav__link is-active" : "site-nav__link"}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="site-header__actions">
          <NavLink className="site-header__ghost" to="/login">
            로그인
          </NavLink>
          <NavLink className="site-header__pill" to="/signup">
            회원가입
          </NavLink>
        </div>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
