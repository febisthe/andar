let lastScroll = 0;  //함수 안에 넣으면 스크롤 할 때마다 0이 되기 때문에 꼭 밖으로 빼야한다.

// [헤더] 스크롤이벤트 (서브메뉴 내려오기)
$(window).scroll(function(){
  current = $(this).scrollTop();

  if(current > 0){
    $('#header').addClass('fixed')

    if (current > lastScroll) {
      $('#quick').removeClass('show');
    } else {
      $('#quick').addClass('show');
    }
    lastScroll = current;

  } else {
    $('#header').removeClass('fixed')
    $('#quick').removeClass('show');
  }
})

$(window).trigger('scroll'); 

// 탑 버튼 눌렀을 때 위로 올라가기
$('.btn-top').click(function(){
  window.scrollTo({top:0, behavior:"smooth"})
})

// [헤더] 서브메뉴 전체선택
$('#gnb .group-menu .btn-more').click(function(){
  $('#gnb .group-menu').toggleClass('on');
  $('#gnb .group-all').stop().slideToggle();
})

// [헤더] 사이드메뉴 - 서브토글
$('#header .group-logo .btn-cate').click(function(){
  $('body').addClass('hidden');
  $('#sideNav ,.dimmed').addClass('on');
})

// [헤더] 사이드메뉴 - 클로즈버튼
$('#sideNav .btn-close ,.dimmed').click(function(e){
  $('body').removeClass('hidden');
  $('#sideNav ,.dimmed').removeClass('on');
})

// [헤더] 검색박스
$('#header .util-area .btn-search').click(function(){
  $('.search-box').addClass('on');
  $('body').addClass('scroll');
})

$('#header .util-area .btn-back').click(function(){
  $('.search-box').removeClass('on');
  $('body').removeClass('scroll');
})

// [헤더] 사이드메뉴 - depth2
$('#sideNav .group-menu .depth1 .btn-area').click(function(){
  $(this).toggleClass('on').siblings('.depth2').stop().slideToggle();
})

// [섹션1] 비주얼 슬라이드
const visualSlide = new Swiper('.sc-visual .swiper',{
  effect:"fade",
  autoplay:{
    delay:7000,
  },
  loop:true,
  
  pagination:{
    el:".pagination",
  }
})

// [섹션3] 베스트 상품
$('.sc-best .list-tab .tab-item').click(function(e){
  e.preventDefault();
  tab = $(this).addClass('on').siblings('.tab-item').removeClass('on');
})

// [섹션6] 추천아이템
const recommendlSlide = new Swiper('.sc-recommend .swiper',{
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  spaceBetween: 10,
  pagination: {
    el: ".pagination",
  },
})


// [섹션8] 카테고리(브라탑, 세트, 레깅스)
const categorySlide = new Swiper('.sc-category .swiper',{
  slidesPerView: 2.2,
  spaceBetween : 10,
})


// [어사이드1] 맨 위 상단 배너
const bannerSlide = new Swiper('.banner-top .swiper',{
  autoplay:{
    delay:2000,
  },
  loop:true,
})

// [어사이드2] 중간 부분 쿠폰 배너
const couponSlide = new Swiper('.ad-coupon .swiper',{
  autoplay:{
    delay:7000,
  },
  loop:true,
  
  pagination:{
    el:".pagination",
    type:"fraction" 
  }
})

