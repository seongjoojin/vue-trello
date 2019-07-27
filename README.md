# vue-trello

트렐로 개발을 통한 Vuejs, Vuex, Vue-Router 프론트엔드 실전 기술 강의 정리

## 1. 시작하기

### 강의 소개

요구사항 -> 기술조사 -> 기능구현

### 요구사항 분석

- 인증 : 로그인, 로그아웃
- 보드작업

| &nbsp; | 생성 | 조회 | 수정             | 이동 | 삭제 |
| ------ | ---- | ---- | ---------------- | ---- | ---- |
| 보드   | O    | O    | O (타이틀, 색상) | X    | O    |
| 리스트 | O    | X    | O (타이틀)       | O    | O    |
| 카드   | O    | O    | O (타이틀, 설명) | O    | O    |

### 코드 스캐폴딩

`npm i -g vue-cli` or `yarn global add vue-cli`

## 2. 라우팅

### 라우터의 필요성

- 서버 라우팅 : 네이버, 구글
- 브라우져 라우팅 : 구글메일, 트렐로

## 3. API 통신

### 백엔드 API 살펴보기

curl명령에서 json 데이터를 이쁘게 보려면 아래 프로그램?필요. ex) curl localhost:3000/health -v | jq

https://stedolan.github.io/jq/

### Ajax - HttpXMLRequst 객체

https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest

### Axios 실전에서 사용하기

axios를 호출하는 모듈을 별도로 만들어주는것이 좋음

## 4. 인증

### 인증 API

실무에서는 token에 대한 만료시간도 대응해야함

### 네비게이션 가드

vue router에는 네비게이션 가드가 존재함.

해당 기능은 라우팅 되기전에 로직을 추가할 수 있음.

## 6. 상태 관리

### Vuex

- 모든 컴포넌트에 대한 중앙 저장소 역할

### 상태 (State)

`yarn add vuex`

### 스토어 개선

https://vuex.vuejs.org/kr/guide/structure.html

## 7. 기본 플로우 구현

### 카드 이동 1 - 로직분석

https://github.com/bevacqua/dragula

### 카드 이동 2 - 구현

`yarn add dragula`
