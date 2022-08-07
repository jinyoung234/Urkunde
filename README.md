# Urkunde - web page for self-check-test

<div align=center>
https://urkunde.netlify.app/
</div>

> Urkunde?

<div align=center>

<img width="700" alt="image" src="https://user-images.githubusercontent.com/87177577/183298850-02a61340-945b-4758-af6e-8f7184ec9d60.png">

</div>

<br/>

## 간단한 소개

- 시험 전이나, 개인적인 공부를 끝낸 후 가벼운 점검을 위한 웹 앱

-   문제 상황

    -   종이로 계속 점검하기에는 종이 사용량이 증가함

    -   손으로 계속 쓰다보면 손이 아플 수 있음

-   프로젝트 목표

<div align = center> 
누구나 사용할 수 있는 쉬운 사용법과 함께 공부한 것에 대한 점검을 할 수 있는 웹 앱을 만들자
</div>

<br/>

## 기술 스택
#### 1. 프로그래밍 언어 및 프레임워크
- `react`
- `typescript`

#### 2. 라이브러리
- `styled-component`
- `recoil`
- `react-query`
- `framer-motion`
- `recoil-persist`

#### 3. 배포
- `netlify`

<br/>

## Getting Started

**Execute**

```bash
# 0. clone
> git clone https://github.com/jinyoung234/Urkunde.git
> cd front-end
# 1. 설치하기
> npm install
# 2. 실행하기
> npm start
```

<br/>

## 기능

### NavBar

- 로고를 누르면 Home page로 이동합니다.
- 2가지 색상 모드를 지원합니다.
- 도움말을 제공합니다.

#### 1. 기본 모드

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183301522-7959267b-f86a-4b58-9dbe-ccc3257edb31.png">
</div>

#### 2. 변경된 모드

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183301537-c1000c87-a2e5-42ac-a89e-b2c1c81976fe.png">
</div>

### Information

- 서비스를 이용하는 유저에게 도움말을 제공합니다.

#### 1. 도움말

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183301576-9df7aefb-59ca-4c02-8e60-b559af975a15.png">
</div>


### Home page

- 날씨 API(openweathermap)를 활용하여 사용자가 처음 들어올 때 날씨를 확인 할 수 있습니다.

#### 1. 처음 페이지

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183298850-02a61340-945b-4758-af6e-8f7184ec9d60.png">
</div>

### Check page

- Today Result는 틀린 갯수, 맞는 갯수를 그래프로 시각화함으로써 오늘 유저가 풀었던 문제에 대해 확인할 수 있습니다.
- Weekly Check는 1주일 동안 유저가 점검을 완료했다면 체크를 할 수 있습니다. 
- Weekly Check는 1주일이 지나면 초기화되게 됩니다.

#### 1. 처음 Today Result를 확인하는 경우

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183299858-3f943aaf-4b8c-42e3-9511-8e763133af87.png">
</div>

#### 2. 문제를 다 풀고 난 후 Today Result 확인

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183299997-c16c76b4-a75a-4713-8996-aa0d3ac08140.png">
</div>

#### 3. 처음 Weekly Check

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183300189-6af8642e-8c46-4ebd-b805-15f5b94af01c.png">
</div>

#### 4. 체크 후 Weekly Check

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183300222-36bc9e1f-67a2-46a1-9925-eab2fefd1d4e.png">
</div>

### Create Question page

- 유저는 만들고 싶은 문제를 생성 할 수 있습니다.
- 문제를 잘못 만들었다면 문제 수정 페이지에서 삭제가 가능합니다.
- 문제 리셋 버튼을 통해 문제를 초기화할 수 있습니다.

#### 1. 빈 문제 or 답을 생성한 경우

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183300585-21b4cdc2-3877-4d24-b139-e757016d4e4c.png">
</div>

#### 2. 문제를 생성한 경우

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183300695-51cbfe7c-ce34-4d86-b9f5-fa3d2ee0a7d4.png">
</div>

#### 3. 문제를 초기화한 경우

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183301702-b31a1e7e-124a-4ddc-a73f-a75e817d9fb5.png">
</div>

### Modify Question page

- 만든 문제들을 확인 할 수 있습니다.
- 문제를 잘못 만든 경우 문제 삭제가 가능합니다.

#### 1. 문제를 확인 할 경우

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183300792-71b37d9c-a4c0-4669-8852-b787e72b32f6.png">
</div>

#### 2. 문제를 삭제 할 경우

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183300900-ad21c768-108b-4a76-ac1d-cd83a28dea31.png">
</div>

#### 3. 문제 생성을 하지 않은 경우

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183301290-b8798309-9643-4d78-8555-2f440d34e828.png">
</div>

### Self-Check page

- 전체 문제 수 중 현재 몇 번문제인지 확인 할 수 있습니다.
- 어떤 요일의 문제 점검인지 확인 할 수 있습니다.
- 자신이 만든 문제들을 풀어보며 점검할 수 있습니다.
- 정답 확인을 누를 경우 정답, 오답을 확인 할 수 있습니다.


#### 1. 문제를 확인 할 경우

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183300935-c5e21226-ee32-429d-9889-1b6cfde0805d.png">
</div>

#### 2. 정답인 경우

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183301034-e18b94ac-0436-488e-aaa2-b899fa1f940d.png">
</div>

#### 3. 오답인 경우

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183301060-ea88af97-e573-4bae-a232-15926bf2ff66.png">
</div>

#### 4. 마지막 문제인 경우

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183301114-b39dae95-4350-41bf-8fcf-831dc6ef5473.png">
</div>

#### 5. 문제 생성을 하지 않은 경우

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183301357-bb38857d-1785-4149-b24c-1a44552c737e.png">
</div>

### Result page

- 전체 문제 중 맞는 갯수와 전체 문제 수를 확인 할 수 있습니다.
- 체크 페이지로 이동 하여 맞는 갯수, 틀린 갯수를 확인 할 수 있습니다.

#### 1. 결과 화면

<div align=center>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/183301137-f6809b2d-3bee-4c9c-8b91-6ac30bcc29e3.png">
</div>

