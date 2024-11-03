![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=Code%20Diary&fontSize=80)

<h2 align="center">삼성 리마인더 스타일의 할 일 관리 서비스</h2>

<p align="center">
  할 일, 알림 날짜, 카테고리 설정 기능을 제공하는 깔끔하고 직관적인 할 일 관리 서비스입니다.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-active-brightgreen" alt="Project Status">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License">
  <img src="https://img.shields.io/github/languages/top/yourusername/clean-reminder" alt="Top Language">
</p>

## 📋 목차

- [💡 프로젝트 소개](#-프로젝트-소개)
- [✨ 주요 기능](#-주요-기능)
- [💻 기술 스택](#-기술-스택)
- [⚙️ 설치 및 실행 방법](#️-설치-및-실행-방법)
- [📱 사용법](#-사용법)
- [🤝 기여 방법](#-기여-방법)
- [📄 라이선스](#-라이선스)

## 💡 프로젝트 소개

**Clean Reminder**는 사용자가 쉽게 할 일(Task)을 작성하고 관리할 수 있도록 돕는 서비스입니다. 할 일의 수행 날짜와 알림 날짜를 설정할 수 있으며, 카테고리를 지정하여 할 일을 효과적으로 분류할 수 있습니다. 사용자 친화적인 UI로 직관적인 사용 경험을 제공합니다.

## ✨ 주요 기능

- **할 일 추가**: 할 일을 간단하게 추가하고 할 일의 날짜와 알림 날짜를 설정할 수 있습니다.
- **카테고리 설정**: 할 일을 여러 카테고리로 분류하여 관리할 수 있습니다. 예를 들어, '개인', '업무', '가족' 등의 카테고리를 생성할 수 있습니다.
- **알림 기능**: 설정한 알림 날짜에 알림을 제공하여 중요한 할 일을 놓치지 않도록 도와줍니다.
- **할 일 완료 처리**: 완료된 할 일을 간단히 완료 처리할 수 있어, 남은 할 일과 완료된 할 일을 쉽게 구분할 수 있습니다.

## 💻 기술 스택

- **Frontend**: React-Native
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **CI/CD**: GitHub

## ⚙️ 설치 및 실행 방법

**클론 및 의존성 설치**  
이 저장소를 클론하고, 백엔드와 프론트엔드 각각의 의존성을 설치합니다.

```bash
   git clone https://github.com/yourusername/clean-reminder.git
   cd clean-reminder

   # 백엔드 설치
   cd backend
   npm install

   # 프론트엔드 설치
   cd ../frontend
   npm install
```

**환경 변수 설정**
.env 파일을 생성하고 필요한 환경 변수를 설정합니다.

```env
# 백엔드 환경 변수
MONGO_URI=your_mongodb_uri
PORT=5000
JWT_SECRET=your_jwt_secret

# 프론트엔드 환경 변수
REACT_APP_API_URL=http://localhost:5000
```

**서버 및 클라이언트 실행**
백엔드 서버와 프론트엔드 클라이언트를 각각 실행한 후 브라우저에서 http://localhost:3000으로 접속합니다.

```
# 백엔드 서버 실행
cd backend
npm start

# 프론트엔드 클라이언트 실행
cd ../frontend
npm start
```


---

## 📱 사용법

**할 일 추가**  
'할 일' 버튼을 클릭하여 할 일과 수행 날짜, 알림 날짜를 설정합니다.

**카테고리 지정**  
할 일 추가 시 원하는 카테고리를 선택하여 할 일을 분류할 수 있습니다.

**알림 설정**  
할 일의 알림 날짜를 지정하면, 설정된 날짜에 맞춰 알림이 제공됩니다.

**할 일 관리**  
할 일을 완료 처리하고, 완료된 할 일과 남은 할 일을 쉽게 관리할 수 있습니다.

## 🤝 기여 방법

**이슈 확인**  
기여할 작업을 선택하기 위해 GitHub 이슈 탭에서 이슈를 확인합니다.

**브랜치 생성**  
기능 추가나 버그 수정을 위해 새로운 브랜치를 생성합니다.

```bash
   git checkout -b feature/새기능
```

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.  
자세한 내용은 [LICENSE](./LICENSE) 파일을 참조하세요.

<p align="center">
  Made with ❤️ by the Clean Reminder Team
</p>

