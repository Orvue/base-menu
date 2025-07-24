
document.addEventListener("DOMContentLoaded", function () {
  const navHTML = `
    <style>
      html, body {
        margin: 0;
        height: 100%;
      }

      body {
        background-color: #f2f2f2;
        font-family: 'Noto Sans KR', sans-serif;
        background-size: cover;
        background-position: center top;
        background-repeat: no-repeat;
      }

      .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 300%;
        background-size: cover;
        background-position: center top;
        background-repeat: no-repeat;
        z-index: -1;
      }

      nav {
        padding: 0px;
        min-width: 500px;
        max-width: 840px;
        overflow: visible;
        position: relative;
        background-color: white;
        border-radius: 20px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
        transform-origin: center;
      }

      ul.menu-list {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 2px;
        gap: 6px;
        padding-right: 10px;
      }

      ul.menu-list > li {
        display: flex;
        align-items: center;
        position: relative;
      }

      .main-menu {
        padding: 0px 6px;
        line-height: 1.1;
        text-decoration: none;
        color: #333;
        white-space: nowrap;
      }

      .menu-box {
        display: flex;
        align-items: center;
        border-radius: 15px;
        padding: 0 8px;
      }

      .sub-menu .sub-item:last-child {
        margin-right: 8px;
      }

      .menu-container:hover .menu-box {
        background-color: #869482;
        border-radius: 20px;
      }

      .menu-container {
        margin-right: 1px;
        margin-left: 0;
      }

      .menu-box > a.main-menu {
        padding-left: 10px;
        font-weight: 400;
        display: inline-block;
      }

      .sub-menu {
        display: flex;
        flex-direction: row;
        padding: 4px 0px;
        margin: 1px 0;
        gap: 4px;
        background-color: transparent;
        border-radius: 10px;
        white-space: nowrap;
        overflow: hidden;
        max-width: 0;
        opacity: 0;
        transition: max-width 1.1s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.1s ease;
      }

      .menu-container:hover .sub-menu {
        max-width: 900px;
        opacity: 1;
      }

      .sub-menu .sub-item {
        transform: translateY(10px);
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        padding: 2px 2px;
        margin-left: 8px;
        font-size: 13px;
        color: white;
        text-decoration: none;
      }

      .menu-container:hover .sub-item {
        transform: translateY(0);
        opacity: 1;
      }

      .menu-container:hover .main-menu,
      .menu-container:hover .sub-item {
        color: white;
        transition: all 0.5s ease;
      }

      .cate-box {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: flex-start;
      }

      .cate-box > a {
        padding: 6px 8px;
        text-decoration: none;
        color: #333;
        font-weight: 400;
        display: inline-block;
      }

      .category {
        position: absolute;
        pointer-events: auto;
        top: calc(100% + 3px);
        left: 0;
        background: #869482;
        padding: 10px 0;
        border-radius: 10px;
        list-style: none;
        opacity: 0;
        visibility: hidden;
        transform: translateY(10px);
        transition: all 0.3s ease;
        z-index: 999;
        min-width: 140px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
      }

      .cate-box:hover .category {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      .category li {
        margin: 0;
        padding: 0px 10px;
      }

      .category li a {
        display: block;
        padding: 0px 10px;
        color: white;
        font-size: 14px;
        text-decoration: none;
        transition: background 0.2s ease;
      }

      .highlight {
        color: #dadada;
      }
    </style>

    <div class="background"></div>

    <div style="position: fixed; top: 30px; left: 0; right: 0; padding: 4px 0; z-index: 1000; display: flex; justify-content: center;">
      <nav>
        <ul class="menu-list">
          <li class="menu-container">
            <div class="menu-box">
              <a href="https://baseskin.co.kr/base-main" class="main-menu">BASE</a>
              <div class="sub-menu">
                <a href="https://baseskin.co.kr/base-dermatology-clinic" class="sub-item">베이스피부과</a>
                <a href="https://baseskin.co.kr/dermatologist" class="sub-item">의료진소개</a>
              </div>
            </div>
          </li>

          <li class="cate-menu">
            <div class="cate-box">
              <a href="#">BASE 시그니처</a>
              <ul class="category">
                <li><a href="https://baseskin.co.kr/ulthera">BASE 울쎄라</a></li>
                <li><a href="https://baseskin.co.kr/thermage">BASE 써마지</a></li>
                <li><a href="https://baseskin.co.kr/tuneface">BASE 튠페이스</a></li>
                <li><a href="https://baseskin.co.kr/stem-cells">BASE 줄기세포</a></li>
              </ul>
            </div>
          </li>

          <li class="cate-menu">
            <div class="cate-box">
              <a href="https://baseskin.co.kr/49">라인</a>
              <ul class="category">
                <li><a href="https://baseskin.co.kr/50">볼륨</a></li>
                <li><a href="https://baseskin.co.kr/53">턱라인</a></li>
                <li><a href="https://baseskin.co.kr/55">목주름</a></li>
                <li><a href="https://baseskin.co.kr/56">바디리프팅</a></li>
              </ul>
            </div>
          </li>

          <li class="cate-menu">
            <div class="cate-box">
              <a href="https://baseskin.co.kr/51">결</a>
              <ul class="category">
                <li><a href="https://baseskin.co.kr/59">스킨부스터</a></li>
                <li><a href="https://baseskin.co.kr/60">주름</a></li>
                <li><a href="https://baseskin.co.kr/61">건조·예민</a></li>
                <li><a href="https://baseskin.co.kr/62">모공·흉터</a></li>
              </ul>
            </div>
          </li>

          <li class="cate-menu">
            <div class="cate-box">
              <a href="https://baseskin.co.kr/52">톤</a>
              <ul class="category">
                <li><a href="#">기미·잡티·색소</a></li>
                <li><a href="#">홍조·주사·여드름</a></li>
                <li><a href="#">여드름</a></li>
                <li><a href="#">문신 제거</a></li>
                <li><a href="#">제모</a></li>
              </ul>
            </div>
          </li>

          <li class="cate-menu">
            <div class="cate-box">
              <a href="#">커뮤니티</a>
              <ul class="category">
                <li><a href="https://baseskin.co.kr/before-after">시술후기</a></li>
                <li><a href="#">프로모션</a></li>
                <li><a href="https://baseskin.co.kr/notice">공지사항</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  `;
  const nav = document.createElement("div");
  nav.innerHTML = navHTML;
  document.body.prepend(nav);
});