import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      className="site-navbar py-1 fixed-header"
      role="banner"
      style={{ height: "90px" }}
    >
      <div className="container">
        <div className="d-flex align-items-center">
          <div className="site-logo">
            {/* 로고 클릭 시 메인 페이지로 이동 */}
            <Link to="/">
              <img src="/images/kfootballLogo.png" style={{width:150, marginTop:5}} />
            </Link>
          </div>
          <div className="ml-auto">
            <nav
              className="site-navigation position-relative text-right"
              role="navigation"
            >
              <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                <li className="active">
                  <Link to="/" className="nav-link">
                    홈
                  </Link>
                </li>
                <li>
                  <Link to="/game" className="nav-link">
                    경기
                  </Link>
                </li>
                <li>
                  <Link to="/player" className="nav-link">
                    선수
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="nav-link">
                    쇼핑
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="nav-link">
                    로그인
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
