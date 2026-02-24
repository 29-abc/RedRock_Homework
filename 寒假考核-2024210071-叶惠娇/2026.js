// 首页——轮番图
const track = document.getElementById('carousel_track');
const indicators = document.querySelectorAll('.indicator');
const itemsPerPage = 4;
const totalItems = document.querySelectorAll('.carousel_item').length;
const totalPages = Math.ceil(totalItems / itemsPerPage);    // 参考豆包

let currentPage = 0;

function updata_carousel() {
  const offset = -currentPage * 100;
  track.style.transform = `translateX(${offset}%)`;    // 参考豆包
  indicators.forEach((ind, i) => {
    ind.classList.toggle('active', i === currentPage);
  })
}

setInterval(() => {
  currentPage = (currentPage + 1) % totalPages;
  updata_carousel();
}, 4000);

indicators.forEach((ind) => {
  ind.addEventListener('click', () => {
    currentPage = parseInt(ind.dataset.index);
    updata_carousel();
  });
});

// 侧边导航栏
const lis = document.querySelectorAll('#sidebar li');

lis.forEach(item => {
  item.addEventListener('click', function () {
    lis.forEach(li => li.style.color = '');
    this.style.color = 'rgb(252, 61, 75)';
  });
});

// 歌单广场
const li_jingxvan = document.getElementById('li_jingxvan');
const li_tuijian = document.getElementById('li_tuijian');
const first_page = document.querySelector('.first_page');
const second_page = document.querySelector('.second_page');

li_jingxvan.addEventListener('click', () => {
  first_page.style.display = 'none';
  second_page.style.display = 'block';
});
li_tuijian.addEventListener('click', () => {
  first_page.style.display = 'block';
  second_page.style.display = 'none';
});
