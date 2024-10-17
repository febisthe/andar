let lastScroll = 0; //함수 안에 넣으면 스크롤 할 때마다 0이 되기 때문에 꼭 밖으로 빼야한다.

// [헤더] 스크롤이벤트 (서브메뉴 내려오기)
$(window).scroll(function () {
  current = $(this).scrollTop();

  if (current > 0) {
    $('#header').addClass('fixed');

    if (current > lastScroll) {
      $('#quick').removeClass('show');
    } else {
      $('#quick').addClass('show');
    }
    lastScroll = current;
  } else {
    $('#header').removeClass('fixed');
    $('#quick').removeClass('show');
  }
});

$(window).trigger('scroll');

// 탑 버튼 눌렀을 때 위로 올라가기
$('.btn-top').click(function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// [헤더] 서브메뉴 전체선택
$('#gnb .group-menu .btn-more').click(function () {
  $('#gnb .group-menu').toggleClass('on');
  $('#gnb .group-all').stop().slideToggle();
});

// [헤더] 사이드메뉴 - 서브토글
$('#header .group-logo .btn-cate').click(function () {
  $('body').addClass('hidden');
  $('#sideNav ,.dimmed').addClass('on');
});

// [헤더] 사이드메뉴 - 클로즈버튼
$('#sideNav .btn-close ,.dimmed').click(function (e) {
  $('body').removeClass('hidden');
  $('#sideNav ,.dimmed').removeClass('on');
});

// [헤더] 검색박스
$('#header .util-area .btn-search').click(function () {
  $('.search-box').addClass('on');
  $('body').addClass('scroll');
});

$('#header .util-area .btn-back').click(function () {
  $('.search-box').removeClass('on');
  $('body').removeClass('scroll');
});

// [헤더] 사이드메뉴 - depth2
$('#sideNav .group-menu .depth1 .btn-area').click(function () {
  $(this).toggleClass('on').siblings('.depth2').stop().slideToggle();
});

// [섹션1] 비주얼 슬라이드
const visualSlide = new Swiper('.sc-visual .swiper', {
  effect: 'fade',
  autoplay: {
    delay: 7000,
  },
  loop: true,

  pagination: {
    el: '.pagination',
  },
});

// [섹션1] 비주얼 슬라이드 비동기처리
fetch('./assets/data/visual.json')
  .then((response) => response.json())
  .then((json) => {
    const visualData = json.visualData;

    let html = '';
    visualData.forEach((el) => {
      html += `
      <li class="swiper-slide">
        <a href="${el.url}">
          <div class="img-area">
            <img src="${el.img}" alt="${el.alt}"/>
          </div>
          <div class="txt-area">
            <p class="tit">${el.tit}</p>
            <p class="desc">${el.desc}</p>
          </div>
        </a>
      </li>
    `;
    });

    const dataList = document.querySelector('.sc-visual .swiper-wrapper');
    dataList.innerHTML = html;
  })
  .catch((error) => console.error('비주얼 통신 에러:', error));

// [섹션3] 베스트 상품
$('.sc-best .list-tab .tab-item').click(function (e) {
  e.preventDefault();
  tab = $(this).addClass('on').siblings('.tab-item').removeClass('on');
});

// [섹션6] 추천아이템
const recommendlSlide = new Swiper('.sc-recommend .swiper', {
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  spaceBetween: 10,
  pagination: {
    el: '.pagination',
  },
});

// [섹션8] 카테고리(브라탑, 세트, 레깅스)
const categorySlide = new Swiper('.sc-category .swiper', {
  slidesPerView: 2.2,
  spaceBetween: 10,
});

// [섹션8] 카테고리 레깅스 비동기통신
fetch('./assets/data/leg.json')
  .then((response) => response.json())
  .then((json) => {
    const legData = json.legData;

    let html = '';

    // icon imgs
    const newEl = `<img src="./assets/images/ico_new.png" alt></img>`;
    const iceEl = `<img src="./assets/images/ico_ice.png" alt></img>`;
    const rankEl = `<span class="name">애슬레저 1위</span>`;
    const waterEl = `<span class="name">워터 겸용</span>`;
    const seasonEl = `<span class="name2">썸머 시즌오프</span>`;

    legData.forEach((el) => {
      const isNew = el.new ? newEl : '';
      const isIce = el.ice ? iceEl : '';
      const isRank = el.rank ? rankEl : '';
      const isWater = el.water ? waterEl : '';
      const isSeason = el.season ? seasonEl : '';

      html += `
      <li class="swiper-slide">
        <div class="thumb">
          <img src="${el.img}" alt="${el.alt}" class="prd-img">
          <div class="icons">
            ${isIce}${isNew}
          </div>
        </div>
        <div class="text">
          <button class="review">${el.review}</button>
          <p class="tit">${el.tit}</p>
          <div class="price">
            <span class="percent">${el.percent}</span>
            <span class="current">${el.current}</span>
            <span class="ori">${el.ori}</span>
          </div>
          <div class="hashtag">
            ${isRank}${isWater}${isSeason}
          </div>
        </div>
        <a href="" class="link"></a>
      </li>
    `;
    });

    const legList = document.querySelector('.sc-category .swiper-wrapper.leg');
    legList.innerHTML = html;
  })
  .catch((error) => console.error('카테고리 레깅스 에러:', error));

// [어사이드1] 맨 위 상단 배너
const bannerSlide = new Swiper('.banner-top .swiper', {
  autoplay: {
    delay: 2000,
  },
  loop: true,
});

// [어사이드2] 중간 부분 쿠폰 배너
const couponSlide = new Swiper('.ad-coupon .swiper', {
  autoplay: {
    delay: 7000,
  },
  loop: true,

  pagination: {
    el: '.pagination',
    type: 'fraction',
  },
});
