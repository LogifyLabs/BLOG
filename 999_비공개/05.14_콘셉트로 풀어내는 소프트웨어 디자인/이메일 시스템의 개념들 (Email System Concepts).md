### 정의

**이메일 시스템의 개념들 (Email System Concepts)**은 사용자의 **팀 커뮤니케이션 (Team Communication)** 니즈를 충족시키기 위해 '메시지', '폴더', '라벨(태그)' 등 여러 **개념 (Concepts)**들이 복합적으로 **개념의 구성 (Concept Composition)**되어 작동하는 시스템의 논리적 핵심 요소들입니다.

---

### 주요 개념 및 결합 방식:

1. **메시지 (Message Concept):** 이메일 시스템의 **핵심 개념 (Core Concepts)**이며, 송신자, 수신자, 내용, **개념의 상태 (State)** (읽음/안 읽음) 등의 **개념의 구조 (Concept Structure)**를 가집니다.     
    
2. **폴더 (Folder Concept):** 메시지를 **배타적인** 공간에 **분류하고 저장**하는 개념입니다. 메시지는 동시에 여러 폴더에 속할 수 없습니다 (전통적인 데스크톱 은유).     
    
3. **라벨/태그 (Label/Tag Concept):** 메시지에 **부가적인 속성**을 부여하여 메시지 분류의 **유연성**을 높인 **확장 개념 (Satellite Concepts)**입니다. 메시지는 **자유 결합 (Freedom)** 방식으로 여러 라벨을 가질 수 있습니다.     
    

---

### 설계적 교훈:

Gmail은 **'폴더' 개념** 대신 **'라벨' 개념**을 채택함으로써, 메시지의 분류를 **자유 결합 (Freedom)** 방식으로 전환하고, 복잡한 계층 구조(우발적 복잡성)를 제거하여 **사용성 향상 (Improved Usability)**을 달성했습니다.

---

**Tags:** #MOC #개념기반설계 #핵심개념 #개념의구성 #자유결합 #확장개념

**연결 노트:** [[개념 (Concepts)]], [[개념의 구성 (Concept Composition)]], [[자유 결합 (Freedom)]], [[핵심 개념 (Core Concepts)]], [[개념의 친숙성 (Concept Familiarity)]], [[MOC_콘셉트로 풀어내는 소프트웨어 디자인]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)