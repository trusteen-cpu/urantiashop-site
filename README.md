# 유란시아 샵 (urantiashop.kr)

유란시아 독자회가 운영하는 유란시아서 자료 상점. 수익금의 50%는 유란시아 독자회 기금.

- `index.html` — 첫 화면(대분류 머리글 → 상품 카드 → 상세 창). `OPEN = false` 이면 "판매 준비 중".
- `products.js` — 대분류(CATEGORIES)와 상품(PRODUCTS). 상품 추가·가격 입력은 여기서.
- `wrangler.jsonc` — Cloudflare Workers(정적 자산) 설정, urantiashop.kr · www 연결.

판매를 열 때 할 일: 판매자 정보·계좌 입력, 주문 처리(worker + KV), 정회원 로그인, Vimeo 강의 연결.
