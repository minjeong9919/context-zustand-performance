# context-zustand-performance

> react의 내장 기능 **contextAPI**와 전역 상태 라이브러리 **zustand**의 성능 비교 테스트입니다. <br/>
> 배포 URL: https://context-zustand-performance.vercel.app/

<br/>

## 프로젝트 실행
```
// 1️⃣ 저장소 클론
git clone https://github.com/minjeong9919/context-zustand-performance.git

// 2️⃣ 패키지 설치
npm install

// 3️⃣ 개발 서버 실행
npm run dev
```
<br/>

## 프로젝트 소개

- 해당 사이트는 contextAPI와 zustand의 성능 테스트를 위해 구현한 사이트입니다.
- 렌더링 또는 재렌더링이 일어나는 컴포넌트는 0.5초 동안 빨간 테두리가 생깁니다.
- 플레이어의 + 혹은 - 버튼을 클릭해 점수를 추가/감소하면서 렌더링되는 컴포넌트를 확인해주세요.
