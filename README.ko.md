[English](README.md) | [日本語](README.ja.md) | [Español](README.es.md) | [Français](README.fr.md) | [中文](README.zh.md) | [Deutsch](README.de.md) | [Português](README.pt.md) | [Italiano](README.it.md)

# NuModeX Ext Maker

![License: BSL 1.1](https://img.shields.io/badge/License-BSL%201.1-blue.svg) ![Change License: Apache 2.0](https://img.shields.io/badge/Change%20License-Apache%202.0%20(2030)-green.svg) ![Chrome](https://img.shields.io/badge/Chrome-Supported-brightgreen?logo=googlechrome&logoColor=white) ![Edge](https://img.shields.io/badge/Edge-Supported-brightgreen?logo=microsoftedge&logoColor=white) ![Firefox](https://img.shields.io/badge/Firefox-Supported-brightgreen?logo=firefox&logoColor=white) ![Whale](https://img.shields.io/badge/Whale-Supported-brightgreen?logo=naver&logoColor=white) ![Opera](https://img.shields.io/badge/Opera-Supported-brightgreen?logo=opera&logoColor=white) ![Safari](https://img.shields.io/badge/Safari-Supported-brightgreen?logo=safari&logoColor=white) ![Languages](https://img.shields.io/badge/Languages-9-blueviolet)

AI로 Manifest V3 브라우저 확장 프로그램과 정적 웹사이트를 빌드하세요.

SoraVantia GK의 Manifest V3 브라우저 확장 프로그램 및 정적 웹사이트 빌더. 로그인 불필요, 구독 불필요, 백엔드 없음. 클라우드 AI 제공업체, 온디바이스 모델 또는 자체 로컬/원격 AI 서버를 사용할 수 있습니다.

**웹사이트:** https://numodex.com/numodexextmaker

**Firefox Add-ons:** https://addons.mozilla.org/firefox/addon/numodex-ext-maker/

**Edge Add-ons:** https://microsoftedge.microsoft.com/addons/detail/jkdimfdgngcachpaggijnegdmmokdhkc

## 기능

- AI 기반 브라우저 확장 프로그램 생성 (Manifest V3)
- 멀티 프로바이더 지원. Google, OpenAI 또는 Anthropic의 자체 API 키 사용
- 온디바이스 AI 모델. API 키 없이 브라우저 제공 AI 사용
- 사용자 정의 모델 지원. /v1/chat/completions API를 지원하는 로컬 또는 원격 AI 서버에 연결
- 전체 대화 기록이 포함된 대화형 채팅 인터페이스
- 텍스트 및 이미지 프롬프트 지원
- AI 기반 편집. 개별 파일 편집, 새 파일 추가 또는 단일 프롬프트로 전체 확장 프로그램 개선
- 인라인 에디터로 수동 코드 편집
- AI 편집 실행 취소 지원
- 변경 사항 보기. 통합 뷰 또는 나란히 보기에서 전후 차이 비교
- 라이브 미리보기. 샌드박스 iframe에서 생성된 확장 프로그램의 시각적 미리보기 확인
- 원클릭으로 파일 내용을 클립보드에 복사
- 구문 강조 코드 뷰어 및 파일 트리 내장
- 원클릭으로 생성된 확장 프로그램 ZIP 다운로드
- ZIP에서 가져오기. 기존 브라우저 확장 프로그램이나 웹사이트를 ZIP 파일에서 불러와 AI로 보기 및 편집
- 다중 프로젝트 지원. 프로젝트 생성, 이름 변경, 전환 및 삭제
- 자동 이름 지정. 생성된 확장 프로그램의 manifest에서 프로젝트 이름 자동 설정
- 프로젝트 영속성. 작업이 자동 저장되고 다시 열 때 복원
- 키보드 단축키. Enter로 전송, Shift+Enter로 줄바꿈, Ctrl/Cmd+Enter로 확장 프로그램 빌드, Ctrl/Cmd+Shift+Enter로 웹사이트 빌드
- 시스템 다크 모드 감지. 첫 실행 시 OS 설정에 자동으로 맞춤
- 수동 전환을 위한 다크 모드 토글
- 멀티 브라우저 지원. Chrome, Edge, Firefox용 빌드
- 9개 언어: 영어, 일본어, 스페인어, 프랑스어, 한국어, 중국어, 독일어, 포르투갈어, 이탈리아어
- 내장 도움말 가이드 및 앱 내 이용약관
- 계정 불필요. 브라우저에서 완전히 실행
- AI로 정적 웹사이트(HTML/CSS/JS) 빌드 - 동일한 채팅 기반 워크플로, 다른 출력
- 개인 및 상업적 사용 가능

![Extension Builder](assets/extension-builder/numodex-ext-maker-extension-builder-ko.png)

## 데이터 흐름

```mermaid
graph LR
    A[사용자 브라우저] --> B[NuModeX Ext Maker]
    B --> C[로컬 저장소<br/>IndexedDB + 확장 프로그램 저장소]
    B --> D[샌드박스 미리보기<br/>iframe]
    B --> E[클라우드 AI 제공업체<br/>사용자 API 키]
    B --> F[온디바이스 AI<br/>사용자 디바이스에서 처리]
    B --> G[사용자 정의 로컬 서버<br/>구성된 엔드포인트]
    B --> H[사용자 정의 원격 서버<br/>구성된 엔드포인트]

    style A fill:#6b7280,color:#fff,stroke:#4b5563
    style B fill:#f97316,color:#fff,stroke:#ea580c
    style C fill:#f97316,color:#fff,stroke:#ea580c
    style D fill:#f97316,color:#fff,stroke:#ea580c
    style E fill:#169cef,color:#fff,stroke:#1280c4
    style F fill:#f97316,color:#fff,stroke:#ea580c
    style G fill:#f97316,color:#fff,stroke:#ea580c
    style H fill:#169cef,color:#fff,stroke:#1280c4
```

> 🟠 주황 = 디바이스에 유지 | 🔵 파랑 = API 키를 사용하여 전송 | SoraVantia GK는 데이터 경로에 포함되지 않습니다.

## 시작하기

1. 이용약관에 동의 (첫 실행 시).
2. 설정에서 클라우드 AI 제공업체의 API 키를 입력.
3. 모델을 선택하고, 빌드하려는 내용을 설명한 후 "확장 프로그램 빌드" 또는 "웹사이트 빌드"를 클릭.
4. 생성된 파일을 ZIP으로 다운로드하고 브라우저에 로드.

자세한 설정 방법, 온디바이스 AI 구성, 문제 해결 및 팁은 [시작 가이드](getting-started-ko-3-26-2026.md)를 참조하세요.

## API 키

이 확장 프로그램을 사용하려면 자체 API 키가 필요합니다. 클라우드 제공업체에서 받으세요. API 키는 브라우저에 로컬로 저장되며 SoraVantia GK나 제3자에게 전송되지 않습니다.

## 언어

영어, 일본어, 스페인어, 프랑스어, 한국어, 중국어, 독일어, 포르투갈어, 이탈리아어

## 라이선스

NuModeX Ext Maker는 소스 공개이며 Business Source License 1.1(BSL 1.1)에 따라 라이선스됩니다. 소스 코드는 프로젝트 저장소에서 공개적으로 이용할 수 있습니다.

**Business Source License 1.1** 소스 코드는 BSL 1.1에 따라 이용 가능합니다. 개인 또는 내부 비즈니스 목적으로 사용, 수정 및 파생 저작물 생성이 가능합니다. 2030년 3월 23일에 라이선스는 자동으로 Apache License, Version 2.0으로 전환됩니다. 전문은 [LICENSE](LICENSE)를 참조하세요.

**추가 사용 허가** 라이선스 대상 저작물(또는 파생 저작물)을 브라우저 확장 프로그램 마켓플레이스에 재배포하는 것을 포함하지 않는 한, 프로덕션 사용이 가능합니다.

### 할 수 있는 것

- 개인 또는 내부 비즈니스 목적으로 확장 프로그램 사용
- 저장소를 클론하여 확장 프로그램을 직접 빌드 또는 사이드로드
- 마켓플레이스 외 용도로 소스 코드 수정 및 파생 저작물 생성
- 브라우저 확장 프로그램 마켓플레이스 외의 채널을 통한 배포
- 소스 코드 연구, 학습 및 참조
- 사용자에게 직접 사이드로드 또는 배포 (예: 기업 배포)
- Issues를 통한 버그 보고, 기능 요청 및 제안 전송
- 원본 프로젝트에 기여

### 허가가 필요한 것

- Chrome Web Store, Firefox Add-ons, Edge Add-ons, Safari Extensions, Naver Whale Store 또는 기타 브라우저 확장 프로그램 마켓플레이스에 게시

### 변경일

2030년 3월 23일에 라이선스 대상 저작물은 자동으로 Apache License, Version 2.0에 따라 이용 가능해집니다.

마켓플레이스 라이선스 또는 비즈니스 문의: numodex@soravantia.com

## 법적 사항

NuModeX Ext Maker를 설치하거나 사용함으로써 [최종 사용자 라이선스 계약](eula-ko-v2.5.md) 및 [개인정보 보호정책](privacy-policy-ko-v2.5.md)에 동의하는 것으로 간주됩니다.
본 프로젝트는 현재 풀 리퀘스트를 받지 않습니다. 버그 보고 및 기능 요청에는 Issues를 사용해 주세요. 이는 향후 변경될 수 있습니다.

## 제3자 관련 통지

NuModeX Ext Maker는 제3자 AI 서비스와 통합됩니다. SoraVantia GK는 어떤 제3자 AI 제공업체와도 제휴, 추천 또는 공식적인 관계를 맺고 있지 않습니다. 모든 제품명, 상표 및 등록 상표는 해당 소유자의 재산입니다. 본 프로젝트에서의 이러한 언급은 식별 목적으로만 사용됩니다. SoraVantia GK는 AI 제공업체 및 모델에 대한 지원을 언제든지 추가, 제거 또는 변경할 수 있습니다.

## 제3자 라이선스

자세한 내용은 [THIRD-PARTY-LICENSES](THIRD-PARTY-LICENSES)를 참조하세요.

## 저작권

Copyright 2026 SoraVantia GK. All rights reserved.
