# 완료

- React + Vite 설치
- Axios 설치
- koyeb(배포) 설정 완료

# 예정

## 단계 1: 프로젝트 구조 설계

사용자 규칙(모듈화, prop 최소화)을 고려한 구조:

```
src/
  ├── components/
  │   ├── GameList/          # 게임 목록 모듈 (UI + 로직 포함)
  │   │   ├── GameList.jsx
  │   │   └── GameList.module.css
  │   ├── GameCard/          # 게임 카드 모듈
  │   │   ├── GameCard.jsx
  │   │   └── GameCard.module.css
  │   ├── SearchBar/         # 검색바 모듈
  │   │   ├── SearchBar.jsx
  │   │   └── SearchBar.module.css
  │   └── Layout/            # 레이아웃 (children 사용)
  │       └── Layout.jsx
  ├── services/
  │   └── gameApi.js         # API 호출 로직 분리
  ├── App.jsx
  └── main.jsx
```

## 단계 2: MUI 설정 (규칙 반영)

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material  # 아이콘 필요시
```

- MUI v7 문법 사용
- Grid 우선 사용

## 단계 3: API 서비스 모듈화

- `services/gameApi.js`에서 CheapShark/Steam API 호출 로직 분리
- axios 인스턴스 설정 (baseURL, timeout 등)
- 에러 처리 및 재시도 로직 포함

## 단계 4: 컴포넌트 개발 순서

1. Layout 컴포넌트 (children 기반)
2. GameCard 컴포넌트 (단일 게임 표시, 내부 로직 포함)
3. GameList 컴포넌트 (목록 표시 + 필터링 로직 포함)
4. SearchBar 컴포넌트 (검색 로직 포함)

## 단계 5: 기능 확장 아이디어

- 로딩 상태 표시
- 에러 처리 UI
- 가격 알림 설정
- 즐겨찾기/북마크
- 가격 히스토리 차트
- 다크모드

## 단계 6: 반응형 디자인

- MUI Grid로 모바일/태블릿/데스크톱 대응
- breakpoints 활용

## 추가 고려사항

- **상태 관리**: 간단하면 useState/useContext, 복잡해지면 Zustand/Redux
- **API 선택**: CheapShark(다양한 스토어), Steam(Steam 전용)
- **성능**: React.memo, useMemo, useCallback 활용
- **타입 안정성**: TypeScript 도입 검토
