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

## 3. 3. API 통신

### 백엔드 API 살펴보기

curl명령에서 json 데이터를 이쁘게 보려면 아래 프로그램?필요. ex) curl localhost:3000/health -v | jq

https://stedolan.github.io/jq/
