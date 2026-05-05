# DUNNBO & MOORO 形象網站

兩隻兔子 DUNNBO（白白兔）和 MOORO（默默兔）的角色形象網站。
參考 dinotaeng 的世界觀式品牌站做法，米色紙質風格 + 圓潤手作感。

## 檔案結構
```
dunnbo-site/
├── index.html      主檔案（含 7 個頁面區塊）
├── style.css       全部樣式 + RWD（斷點：1024px / 720px）
├── script.js       Hash 路由 + 行動選單 + Gallery 篩選
└── images/         35 張角色素材切圖
```

## 頁面（透過 hash 路由切換）
- `#home`                  首頁
- `#characters`            角色列表
- `#characters/dunnbo`     DUNNBO 角色頁
- `#characters/mooro`      MOORO 角色頁
- `#story`                 故事
- `#gallery`               小劇場圖庫（可篩選 DUNNBO / MOORO）
- `#contact`               聯絡頁

## 本機預覽
直接打開 `index.html` 即可。或啟動本地 server：
```
cd dunnbo-site
python3 -m http.server 8000
# 開啟 http://localhost:8000
```

## 部署
靜態網站可直接部署到任何靜態主機：
- Netlify / Vercel：拖曳整個資料夾即可
- GitHub Pages：push 到 repo 後啟用 Pages
- Cloudflare Pages：connect git 或直接上傳

## 自訂
- 換色：在 `style.css` 開頭的 `:root` 區段改 CSS 變數
- 改文案：直接編輯 `index.html`
- 加圖：丟進 `images/` 並在 HTML 中引用
- 改字體：在 `index.html` <head> 換掉 Google Fonts URL，再改 `style.css` 的 `--font-display` / `--font-body` / `--font-script`

## 用到的字體
- Fredoka（顯示英文，圓潤）
- Caveat（手寫感點綴）
- Zen Maru Gothic / Noto Sans TC（中文）

