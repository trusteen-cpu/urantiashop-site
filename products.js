/* 유란시아 샵 상품 목록 — 여기만 고치면 첫 화면 카드가 바뀐다.
   price: 원 단위 숫자, 아직 정하지 않았으면 null("가격 준비 중")
   status: "ready"(자료 있음, 판매 준비) / "soon"(새로 준비 중)
   cover: 표지 색 [바탕, 무늬색]  · tag: 카드 위 작은 표시 */
window.CATEGORIES = [
  { id: "books",    name: "서적",           en: "BOOKS",      desc: "창작서와 번역서, 그리고 새 책" },
  { id: "lectures", name: "강의 동영상",     en: "LECTURES",   desc: "처음 시작부터 정규 과정까지 체계적인 영상 강의" },
  { id: "files",    name: "파일·학습자료",   en: "STUDY FILES",desc: "인쇄용 PDF와 편집용 파일, 도표와 인포그래픽" },
  { id: "audio",    name: "오디오·음악",     en: "AUDIO",      desc: "오디오북, 본문 낭독, 아침·취침 묵상" },
  { id: "images",   name: "사진·그림",       en: "IMAGES",     desc: "말씀 카드, 명상 이미지, 우주·상승여행 그림" },
  { id: "goods",    name: "물품",           en: "GOODS",      desc: "포스터, 카드·책갈피, 노트와 달력" },
  { id: "classes",  name: "온라인 수업·모임", en: "CLASSES",    desc: "함께 읽고 나누는 실시간 수업과 소그룹" },
  { id: "sets",     name: "학습 패키지",     en: "PACKAGES",   desc: "주제별로 묶은 알뜰한 공부 세트" }
];

window.PRODUCTS = [
  /* ── 서적: 새 책 ── */
  { cat: "books", sub: "새 책", title: "유란시아서가 말하는 성경", by: "한종인 엮음", tag: "NEW",
    desc: "창조에서 요한계시록까지, 유란시아서가 성경에 대해 말하는 것을 168개 주제로 정리했습니다. 성경 구절·해설·유란시아서 본문을 한자리에.",
    formats: ["종이책", "전자책(PDF)"], price: null, status: "ready", cover: ["#14213D", "#B8925A"] },
  /* ── 서적: 창작서 ── */
  { cat: "books", sub: "창작서", title: "모든 것의 이야기", by: "한종인", desc: "우주와 생명과 인간의 이야기를 처음부터 끝까지 한 흐름으로 읽는 유란시아서 이야기책.",
    formats: ["종이책", "전자책"], price: null, status: "ready", cover: ["#2E4A6B", "#E2C98F"] },
  { cat: "books", sub: "창작서", title: "유란시아서 핵심", by: "한종인", desc: "유란시아서의 핵심 가르침을 주제별로 간추린 입문서.",
    formats: ["종이책", "전자책"], price: null, status: "ready", cover: ["#6B2E3A", "#E9C9A8"] },
  { cat: "books", sub: "창작서", title: "365일 영혼의 기도", by: "한종인", desc: "하루 한 편, 유란시아서 말씀에서 길어 올린 일 년의 기도.",
    formats: ["종이책", "전자책"], price: null, status: "ready", cover: ["#2F5D50", "#DCE8C8"] },
  { cat: "books", sub: "창작서", title: "하나님의 형상", by: "한종인", desc: "사람 안에 계신 하나님, 생각 조절자와 혼의 성장에 관한 묵상.",
    formats: ["종이책", "전자책"], price: null, status: "ready", cover: ["#4B3F8C", "#D9CFF0"] },
  { cat: "books", sub: "창작서", title: "간추린 유란시아서", by: "한종인", desc: "2,097쪽의 유란시아서를 한 권으로 간추린 요약본.",
    formats: ["종이책", "전자책"], price: null, status: "ready", cover: ["#7A4E2D", "#F0DDBF"] },
  { cat: "books", sub: "창작서", title: "청소년을 위한 유란시아서", by: "한종인", desc: "청소년의 눈높이로 풀어 쓴 유란시아서.",
    formats: ["종이책", "전자책"], price: null, status: "ready", cover: ["#2F6F8F", "#CFE7F0"] },
  /* ── 서적: 번역서 ── */
  ...[
    ["유란시아 계시", "말콤 록크"], ["제5계시 유란시아서", "켈리 엘스트롯"], ["유란시아 계시 탐구", "제임스 왓킨스"],
    ["유란시아 계시 개관", "데이비드 브래들리"], ["유란시아서 요약", "미셸 클리메시"], ["유란시아서의 빛", "제임스 왓킨스 외"],
    ["100 성경 업데이트", "워커 토마스"], ["예수의 체계적 가르침", "워커 토마스"], ["우주 상승 계획", "워커 토마스"],
    ["거주 우주", "사스키아 프람스마"], ["혼의 진화", "바이런 벨리토스"], ["소피아와의 대화", "올가 로페즈"],
    ["다가오는 개인적 종교의 시대", "폴 슈나이더"], ["영적 거듭남을 위한 21 단계", "해리 맥멀란"]
  ].map(([title, by], i) => ({ cat: "books", sub: "번역서", title, by: by + " 지음 · 한종인 옮김",
    desc: "세계의 유란시아서 독자가 쓴 책을 우리말로 옮겼습니다.", formats: ["종이책", "전자책"], price: null, status: "ready",
    cover: [["#24435C","#C9D9E6"],["#5C2433","#E6C9CF"],["#2F5C24","#D3E6C9"],["#5C4A24","#E6DBC9"]][i % 4] })),

  /* ── 강의 동영상 ── */
  { cat: "lectures", sub: "입문", title: "신규 독자 강의 10주", by: "슬라이드 200장 · 낭독 강의", tag: "입문",
    desc: "유란시아서를 처음 펼치는 분을 위한 10주 과정. 교안 PDF와 함께.", formats: ["동영상", "교안 PDF"], price: null, status: "ready", cover: ["#14213D", "#D9BF8C"] },
  { cat: "lectures", sub: "정규", title: "핵심 비디오 강의 52강", by: "52주 과정", desc: "한 해 동안 매주 한 강씩, 유란시아서 전체를 체계적으로.",
    formats: ["동영상", "강의안"], price: null, status: "ready", cover: ["#2E6F73", "#CDE6E3"] },
  { cat: "lectures", sub: "정규", title: "유란시아서 핵심 100강", by: "100강 과정", desc: "편별로 깊이 들어가는 핵심 강의. 강의마다 슬라이드와 스크립트 제공.",
    formats: ["동영상", "슬라이드", "스크립트"], price: null, status: "ready", cover: ["#8C2F39", "#F0CFD3"] },
  { cat: "lectures", sub: "주제별", title: "주제별 강의 20주", by: "20주 과정", desc: "최상 존재, 생각 조절자, 상승 여정 등 핵심 주제를 하나씩.",
    formats: ["동영상"], price: null, status: "ready", cover: ["#4B3F8C", "#DCD5F2"] },
  { cat: "lectures", sub: "도표", title: "유란시아서 도표 강의 20주", by: "도표로 보는 유란시아서", desc: "복잡한 우주 구조를 한눈에 보여 주는 도표 강의.",
    formats: ["동영상", "도표 PDF"], price: null, status: "ready", cover: ["#2F5D8C", "#D2E1F0"] },
  { cat: "lectures", sub: "영어", title: "유란시아서 영어 강의", by: "English", desc: "영어로 읽는 유란시아서 — 한영 대조와 함께.",
    formats: ["동영상"], price: null, status: "soon", cover: ["#3A3A3A", "#E5E5E5"] },

  /* ── 파일·학습자료 ── */
  { cat: "files", sub: "해설", title: "읽기 쉬운 해설판", by: "편별 해설", desc: "196편을 쉽게 풀어 쓴 해설 — 인쇄용 PDF.", formats: ["PDF"], price: null, status: "ready", cover: ["#7A4E2D", "#F2E2C8"] },
  { cat: "files", sub: "도표", title: "유란시아서 도표 모음", by: "도표·마인드맵", desc: "우주 구조, 상승 여정, 연대기를 고해상도 도표로.", formats: ["PDF", "고해상도 이미지"], price: null, status: "ready", cover: ["#2F5D8C", "#DCE7F3"] },
  { cat: "files", sub: "인포그래픽", title: "편별 인포그래픽", by: "196편", desc: "편마다 한 장으로 정리한 인포그래픽 묶음.", formats: ["PDF", "PNG"], price: null, status: "ready", cover: ["#2E6F73", "#D2EAE7"] },
  { cat: "files", sub: "강의자료", title: "강의자료 세트", by: "PPT·스크립트", desc: "직접 모임을 이끌 수 있도록 편집 가능한 강의안과 스크립트.", formats: ["PPTX", "DOCX"], price: null, status: "ready", cover: ["#8C2F39", "#F3D7DA"] },
  { cat: "files", sub: "연구", title: "주제별 연구·심층 연구", by: "연구 자료집", desc: "주제별 연구 100편과 심층 주제 연구를 한 권의 자료집으로.", formats: ["PDF"], price: null, status: "ready", cover: ["#4B3F8C", "#E0DAF3"] },
  { cat: "files", sub: "영어", title: "한영 대조 본문", by: "영어 학습자료", desc: "한국어와 영어를 나란히 놓은 대조 본문.", formats: ["PDF"], price: null, status: "ready", cover: ["#3A3A3A", "#E8E8E8"] },

  /* ── 오디오·음악 ── */
  { cat: "audio", sub: "오디오북", title: "핵심 교리 오디오북", by: "한국어", desc: "슬라이드와 함께 듣는 유란시아서 핵심 교리 오디오북.", formats: ["MP3"], price: null, status: "ready", cover: ["#14213D", "#B8925A"] },
  { cat: "audio", sub: "낭독", title: "예수의 생애와 가르침 낭독", by: "제4부 본문 낭독", desc: "유란시아서 제4부를 처음부터 끝까지 낭독으로.", formats: ["MP3"], price: null, status: "ready", cover: ["#6B2E3A", "#EBCDB5"] },
  { cat: "audio", sub: "묵상", title: "30일 아침 묵상", by: "노래와 기도가 있는 묵상", desc: "낭독·강론·노래·기도로 여는 서른 번의 아침.", formats: ["MP3", "MP4"], price: null, status: "ready", cover: ["#B5652B", "#F6E0C6"] },
  { cat: "audio", sub: "묵상", title: "30일 취침 묵상", by: "하루를 닫는 묵상", desc: "고요한 밤에 듣는 말씀과 기도.", formats: ["MP3", "MP4"], price: null, status: "ready", cover: ["#1F2E4F", "#C9D3EA"] },

  /* ── 사진·그림 / 물품 / 수업 (준비 중) ── */
  { cat: "images", sub: "말씀 이미지", title: "말씀 카드 이미지", by: "편:장.절이 들어간 카드", desc: "휴대폰 배경과 나눔용 말씀 카드.", formats: ["PNG"], price: null, status: "soon", cover: ["#2F6B45", "#DDEFD9"] },
  { cat: "images", sub: "우주·상승여행", title: "우주와 상승 여행 그림", by: "파라다이스에서 행성까지", desc: "파라다이스, 하보나, 지역 우주를 그린 고해상도 그림.", formats: ["PNG", "PDF"], price: null, status: "soon", cover: ["#14213D", "#8FB0E0"] },
  { cat: "goods", sub: "포스터", title: "우주 구성도 포스터", by: "A2 · A3", desc: "주 우주의 구조를 한 장에 담은 포스터.", formats: ["인쇄물"], price: null, status: "soon", cover: ["#2F5D8C", "#E1EAF4"] },
  { cat: "goods", sub: "카드·책갈피", title: "주제별 인용 책갈피", by: "10종 세트", desc: "주제별 인용에서 고른 말씀 책갈피.", formats: ["인쇄물"], price: null, status: "soon", cover: ["#8A5A2B", "#F3E6D3"] },
  { cat: "goods", sub: "노트·달력", title: "365일 말씀 달력", by: "탁상용", desc: "날마다 한 구절, 일 년의 말씀 달력.", formats: ["인쇄물"], price: null, status: "soon", cover: ["#2E6F73", "#D9EEEB"] },
  { cat: "classes", sub: "입문", title: "신규 독자 실시간 수업", by: "10주 · 온라인", desc: "10주 과정을 바탕으로 함께 읽고 묻고 나누는 실시간 수업.", formats: ["온라인 수업"], price: null, status: "soon", cover: ["#14213D", "#D9BF8C"] },
  { cat: "classes", sub: "세미나", title: "주제별 세미나", by: "월 1회", desc: "최상 존재, 혼과 조절자, 예수의 가르침 등 주제별 세미나.", formats: ["온라인 수업"], price: null, status: "soon", cover: ["#4B3F8C", "#E2DCF4"] },
  { cat: "classes", sub: "진행자", title: "공부 모임 진행자 교육", by: "모임 운영·질문 만들기", desc: "독자 모임을 이끌 진행자를 위한 과정.", formats: ["온라인 수업"], price: null, status: "soon", cover: ["#8C2F39", "#F3D9DC"] },

  /* ── 학습 패키지 ── */
  { cat: "sets", sub: "입문", title: "처음 만나는 유란시아서", by: "입문서 + 신규 독자 강의 + 용어집", desc: "처음 시작하는 분께 꼭 필요한 것만 모았습니다.", formats: ["세트"], price: null, status: "ready", cover: ["#14213D", "#D9BF8C"], tag: "추천" },
  { cat: "sets", sub: "정규", title: "52주 공부 세트", by: "52강 영상 + 주차별 학습자료 + 도표", desc: "한 해 동안 혼자서도 끝까지 공부할 수 있는 세트.", formats: ["세트"], price: null, status: "ready", cover: ["#2E6F73", "#CDE6E3"] },
  { cat: "sets", sub: "주제", title: "예수의 삶과 가르침 세트", by: "서적 + 강의 + 낭독", desc: "제4부를 중심으로 예수의 생애를 깊이 읽는 세트.", formats: ["세트"], price: null, status: "ready", cover: ["#6B2E3A", "#EBCDB5"] },
  { cat: "sets", sub: "묵상", title: "기도·묵상 세트", by: "365일 영혼의 기도 + 묵상 오디오", desc: "하루를 말씀과 기도로 여닫는 세트.", formats: ["세트"], price: null, status: "ready", cover: ["#2F5D50", "#DCE8C8"] }
];
