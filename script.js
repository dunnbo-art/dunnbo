/* =========================================================
   DUNNBO & MOORO — 互動腳本
   - hash router (多頁切換)
   - 行動選單
   - Gallery 分類篩選
   ========================================================= */

// 全部頁面
const PAGES = {
  'home': 'page-home',
  'characters': 'page-characters',
  'characters/dunnbo': 'page-dunnbo',
  'characters/mooro': 'page-mooro',
  'story': 'page-story',
  'gallery': 'page-gallery',
  'contact': 'page-contact',
};

// 顯示對應頁面
function showPage(hash) {
  // 解析 hash
  let key = (hash || '').replace(/^#/, '').trim();
  if (!key || !PAGES[key]) key = 'home';

  // 隱藏所有頁面
  document.querySelectorAll('.page').forEach(p => {
    p.hidden = true;
  });

  // 顯示目標頁面
  const target = document.getElementById(PAGES[key]);
  if (target) {
    target.hidden = false;
  }

  // 更新導覽 active 狀態（取主分類）
  const mainCat = key.split('/')[0];
  document.querySelectorAll('.nav-desktop a').forEach(a => {
    const linkKey = (a.getAttribute('href') || '').replace(/^#/, '').split('/')[0];
    a.classList.toggle('active', linkKey === mainCat);
  });

  // 更新 title
  const titles = {
    'home': 'DUNNBO & MOORO — 兩隻兔子的小世界',
    'characters': 'Characters — DUNNBO & MOORO',
    'characters/dunnbo': 'DUNNBO 白白兔 — Characters',
    'characters/mooro': 'MOORO 默默兔 — Characters',
    'story': 'Story — DUNNBO & MOORO',
    'gallery': 'Gallery — DUNNBO & MOORO',
    'contact': 'Contact — DUNNBO & MOORO',
  };
  document.title = titles[key] || titles['home'];

  // 滾到頂端
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });

  // 關閉行動選單
  closeMobileNav();
}

// hash 變更
window.addEventListener('hashchange', () => {
  showPage(location.hash);
});

// 初始載入
window.addEventListener('DOMContentLoaded', () => {
  showPage(location.hash);
  initMobileNav();
  initGalleryFilter();
});

// ============= 行動版選單 =============
const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');

function initMobileNav() {
  if (!hamburger || !navMobile) return;
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  // 點選單連結後關閉
  navMobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => closeMobileNav());
  });
}

function openMobileNav() {
  hamburger.setAttribute('aria-expanded', 'true');
  navMobile.classList.add('open');
  navMobile.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  if (!hamburger) return;
  hamburger.setAttribute('aria-expanded', 'false');
  navMobile && navMobile.classList.remove('open');
  navMobile && navMobile.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ============= Gallery 篩選 =============
function initGalleryFilter() {
  const buttons = document.querySelectorAll('.gf-btn');
  const items = document.querySelectorAll('.g-item');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // 更新按鈕 active
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // 篩選項目
      items.forEach(item => {
        const cat = item.getAttribute('data-cat');
        if (filter === 'all' || cat === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}
