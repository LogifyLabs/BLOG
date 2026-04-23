![[Pasted image 20251024155419.png]]


---

**제목:** 콘셉트로 풀어내는 소프트웨어 디자인
(사용자 중심의 소프트웨어 디자인을 위한 실용 가이드)

**저자:** 다니엘 잭슨(MIT 컴퓨터과학과 교수)

**Tags:** #MOC #개념기반설계 #소프트웨어설계 #온톨로지 #시스템사고 #개념 #추상화 #복잡성 #멘탈모델 #사용성 #목적 #대니얼잭슨 #소프트웨어추상화 #알로이 #정형기법 

**작성일:** 25-10-24


---

## Concept-Based Design (개념 기반 설계)

**[[Concept-Based Design (CBD)]]**, 즉 '개념 기반 설계'는 소프트웨어나 복잡한 시스템을 설계하는 매우 강력하고 실용적인 접근 방식입니다. 우리는 시스템을 기능의 목록(feature list)이나 데이터 구조의 집합으로 바라보지 않습니다. 대신, 시스템을 사용자가 이해하고, 조작하며, 상호작용하는 핵심 **[[개념 (Concepts)]]** 들의 명확한 집합으로 정의합니다.

이 설계 방식의 궁극적인 목표는 [[복잡성 관리 (Complexity Management)]]입니다. 시스템이 본질적으로 가져야 할 [[본질적 복잡성 (Essential Complexity)]]은 명확하게 드러내고, 설계나 구현 과정에서 불필요하게 추가된 [[우발적 복잡성 (Accidental Complexity)]]은 제거하는 것입니다.

이는 시스템의 작동 방식을 사용자의 [[멘탈 모델 (Mental Models)]]과 일치시킴으로써 달성됩니다. 사용자가 '당연히 이렇게 작동하겠지'라고 기대하는 바와 시스템의 실제 동작이 일치할 때, 시스템은 비로소 직관적이고 강력해집니다.

추측과 모호함 대신, 명확하게 정의된 개념 (Concepts)을 통해 시스템의 논리(Logos)를 구축합니다.

---

## 1. 개념(Concepts)의 본질 : 무엇으로 정의되는가?

설계의 중심에는 '개념'이 있습니다. 이 추상적인 개념 (Concepts)을 구체적이고 명확하게 정의하는 것에서 모든 것이 시작됩니다. 모든 개념은 다음 5가지 요소로 명확하게 기술되어야 합니다.

- **[[개념의 구조 (Concept Structure)]]**
    
    - 모든 개념은 그 자체로 명확한 구조를 가집니다. 이는 마치 [[온톨로지 모델링 (Ontology Modeling)]]에서 개체(Entity)를 정의하는 것과 유사합니다. 이 구조는 다음 요소들로 분해됩니다.
        
    - **[[개념의 이름 (Name)]]**: 개념을 부르는 고유하고 명확한 이름입니다. 이는 [[도메인 주도 설계 (Domain-Driven Design)]]의 [[유비쿼터스 언어 (Ubiquitous Language)]]의 기반이 됩니다. (예: '메시지', '폴더', '예약')
        
    - **개념의 목적 (Concept Purpose)**: 아래 2번 항목에서 상세히 다룹니다.
        
    - **[[개념의 상태 (State)]]**: 개념이 가질 수 있는 모든 가능한 상태입니다. (예: '예약' 개념은 '대기 중', '확정됨', '취소됨' 상태를 가질 수 있습니다.) 이 상태 정의가 명확해야 시스템의 동작을 예측할 수 있습니다.
        
    - **[[개념의 액션 (Action)]]**: 해당 개념에 대해 사용자가 수행할 수 있는 행동입니다. (예: '예약' 개념에 대해 '신청하기', '취소하기', '변경하기')
        
    - **[[개념의 작동 원리 (Operation)]]**: 특정 개념의 액션이 일어났을 때 개념의 상태 (State)가 어떻게 변하는지를 정의하는 규칙입니다. 이것이 시스템의 핵심 로직입니다.
        
- **[[개념의 목적 (Concept Purpose)]]**
    
    - 개념이 존재하는 이유(Why)입니다. 이는 설계 과정 전체에서 우리가 길을 잃지 않도록 잡아주는 '북극성'과 같습니다. 이 개념 (Concepts)이 사용자의 어떤 [[사용자 니즈 (User Needs)]]를 충족시키나요? 이 목적이 불분명하면 [[목적 없는 개념 (Concept Without Purpose)]]이 탄생하고 시스템은 불필요하게 비대해집니다.
        
- **[[개념의 구성 (Concept Composition)]]**
    
    - 시스템은 단 하나의 개념 (Concepts)으로 이루어지지 않습니다. 여러 개념들이 어떻게 결합되어 더 큰 시스템을 형성하는지 이해해야 합니다. 개념들은 세 가지 방식으로 결합됩니다.
        
    - **[[자유 결합 (Freedom)]]**: 두 개념이 서로의 존재를 몰라도 독립적으로 작동하며 결합됩니다. (예: 이메일의 '메시지' 개념과 '라벨' 개념)
        
    - **[[협업 (Cooperation)]]**: 두 개념이 서로의 존재를 인지하고 정보를 교환하며 작동합니다. (예: '항공편' 개념과 '좌석' 개념)
        
    - **[[시너지 (Synergy)]]**: 두 개념이 결합하여 완전히 새로운 가치나 기능을 창출합니다. (예: '문서' 개념과 '실시간 공동 편집' 개념)
        
- **[[개념의 의존성 (Concept Dependencies)]]**
    
    - 앱 내에서 개념 (Concepts)들은 서로 다른 역할과 위계를 가집니다. 어떤 개념이 시스템의 기반이 되는 [[핵심 개념 (Core Concepts)]]인지, 어떤 개념이 부가 기능을 제공하는 [[확장 개념 (Satellite Concepts)]]인지 파악하는 것은 [[시스템 아키텍처 (System Architecture)]] 설계에 매우 중요합니다.
        
- **[[개념의 매핑 (Concept Mapping)]]**
    
    - 우리가 정의한 추상적인 개념 (Concepts)이 [[사용자 인터페이스 (UI)]]에서 어떻게 구체화되는지를 명확히 연결해야 합니다. (예: '휴지통' 개념은 '휴지통 아이콘'으로 매핑됩니다.) 사용자는 이 사용자 인터페이스 (UI)라는 매개체를 통해 개념 (Concepts)을 인지하고 조작합니다. 이 매핑이 잘못되면 [[사용자 경험 (UX)]]이 저하됩니다.
        

---

## 2. 좋은 개념 설계의 3대 원칙

효과적이고 견고하며 사용하기 쉬운 설계를 위한 세 가지 핵심 원칙입니다.

- **[[개념의 구체성 (Concept Specificity)]]**
    
    - 가장 중요하고도 기본적인 원칙입니다. **각 개념 (Concepts)은 단 하나의 명확한 개념의 목적 (Concept Purpose)에만 집중해야 합니다.** 이 원칙이 깨질 때 시스템은 급격히 복잡해지고 사용자는 혼란에 빠집니다.
        
    - 피해야 할 함정들:
        
        - [[개념 과부하 (Overloaded Concepts)]]: 하나의 개념 (Concepts)이 너무 많은 목적과 기능을 떠안는 경우입니다. (예: '친구' 개념이 '팔로워', '구독자', '메시지 수신자' 역할을 모두 하는 경우)
            
        - 목적 없는 개념 (Concept Without Purpose): 시스템에는 존재하지만, 사용자의 어떤 사용자 니즈 (User Needs)도 해결해주지 못하는 개념 (Concepts)입니다.
            
        - [[개념 없는 목적 (Goal Without Concept)]]: 사용자는 분명히 원하는 목적이 있는데, 이를 지원하는 명확한 개념 (Concepts)이 없는 경우입니다. 사용자는 편법(workaround)을 사용해야 합니다.
            
        - [[개념 중복 (Redundant Concepts)]]: 동일하거나 매우 유사한 개념의 목적 (Concept Purpose)을 가진 개념 (Concepts)이 여러 개 존재하는 경우입니다. (예: '태그'와 '카테고리'와 '라벨'이 혼용되는 경우)
            
- **[[개념의 친숙성 (Concept Familiarity)]]**
    
    - 가능하다면, 사용자가 이미 현실 세계나 다른 소프트웨어에서 경험해 본 익숙한 개념을 활용하는 것이 좋습니다. 이는 사용자의 기존 멘탈 모델 (Mental Models)을 활용하여 학습 곡선을 극적으로 낮춥니다.
        
    - (예: [[휴지통 개념 (Trash Can Concept)]], [[장바구니 개념 (Shopping Cart Concept)]], [[파일-폴더 개념 (File-Folder Concept)]])
        
    - 이는 '새로운 바퀴를 발명하지 않는다(Don't reinvent the wheel)'는 [[소프트웨어 공학 (Software Engineering)]]의 원칙과도 통합니다.
        
- **[[개념의 무결성 (Concept Integrity)]]**
    
    - 여러 개념이 개념의 구성 (Concept Composition) 원리에 따라 함께 작동할 때, 각 개념의 본질적인 속성(개념의 구조 (Concept Structure)와 개념의 작동 원리 (Operation))이 훼손되거나 복잡하게 얽혀서는 안 됩니다.
        
    - 각 개념은 자신의 목적에 충실하며 [[일관성 (Consistency)]]과 독립성을 유지해야 합니다. 이는 [[관심사의 분리 (Separation of Concerns)]]라는 중요한 설계 원칙과도 직결됩니다.
        

---

## 3. 개념 기반 설계의 이점 및 활용

왜 우리는 기능 목록이 아닌 개념 (Concepts)의 관점에서 설계를 시작해야 할까요?

- **[[명확성 증진 (Increased Clarity)]]**
    
    - 설계자 본인의 [[설계자의 사고 (Designer's Thought)]] 과정을 명료하게 정리해 주며, 기획자, 디자이너, 개발자 간의 [[팀 커뮤니케이션 (Team Communication)]]에서 오해를 극적으로 줄여줍니다. 개념 (Concepts)은 모두가 공유하는 [[공유 어휘 (Shared Vocabulary)]]가 됩니다.
        
- **[[사용성 향상 (Improved Usability)]]**
    
    - [[사용성 (Usability)]] 문제의 근본 원인은 대부분 사용자의 멘탈 모델 (Mental Models)과 시스템의 실제 동작 사이의 불일치입니다. CBD는 이 간극을 원천적으로 메워주어, 사용법을 따로 배우지 않아도 [[직관적 사용 (Intuitive Use)]]이 가능한 시스템을 만듭니다.
        
- **[[복잡성 관리 (Complexity Management)]]**
    
    - 앞서 언급했듯, 본질적 복잡성 (Essential Complexity)은 명확히 드러내고 우발적 복잡성 (Accidental Complexity)은 제거합니다. 시스템이 커져도 관리 가능한 수준의 복잡성을 유지할 수 있게 해줍니다.
        
- **[[재사용성 및 모듈성 (Reusability and Modularity)]]**
    
    - 명확하게 정의된 개념 (Concepts)(자신의 개념의 목적, 개념의 상태, 개념의 액션을 가진)은 그 자체로 완벽하게 [[모듈 (Module)]]화된 구성 요소입니다. 따라서 다른 맥락이나 다른 시스템에서도 [[재사용 (Reusability)]]하기 용이합니다.
        
- **[[견고한 설계 (Robust Design)]]**
    
    - 단순한 사용성 (Usability) 문제를 넘어, [[안전성 (Safety)]]과 [[보안성 (Security)]] 같은 치명적인 문제를 개념 수준에서 식별하고 대응할 수 있게 합니다.
        
    - (예: '소유권' 개념이나 '접근 권한' 개념이 모호하게 정의되면, 이는 반드시 [[보안 취약점 (Security Vulnerability)]]으로 이어집니다.)
        
- **[[효과적인 비평 (Effective Critique)]]**
    
    - "이 버튼 색깔이 별로예요" 같은 표면적인 비평이 아니라, "이 '공유' 개념 (Concepts)의 개념의 작동 원리 (Operation)가 모호해서 사용자가 혼란스러워합니다"처럼, 설계의 근본적인 결정을 개념이라는 공유 어휘 (Shared Vocabulary)를 통해 논리적으로 비평하고 개선할 수 있게 합니다.
        

---

## 4. Logify 및 관련 주제와의 연결 (Connections)

이 Concept-Based Design (CBD) 원칙은 Logify-Lab에서 다루는 다른 핵심 주제들과 매우 강력하게 연결됩니다.

- **[[MOC_제텔카스텐]]**
    
    - CBD와 제텔카스텐은 철학적으로 동일한 기반을 공유합니다.
        
    - **"하나의 개념 (Concepts)은 완벽한 하나의 '제텔(Zettel)'입니다."**
        
    - 제텔카스텐이 개별 아이디어나 정보 조각을 원자적인 [[원자적 노트 (Atomic Note)]] 단위로 만들듯, CBD는 시스템의 개별 개념을 명확히 정의합니다.
        
    - 그리고 제텔카스텐이 링크를 통해 노트들을 연결하듯, CBD는 개념의 구성 (Concept Composition)과 개념의 의존성 (Concept Dependencies)을 통해 개념 (Concepts) 간의 관계를 설정합니다. 이 MOC 노트 자체가 MOC_제텔카스텐과 정확히 일치하는 작업입니다.
        
- **[[온톨로지 모델링(Ontology Modeling)]]**
    
    - 이 둘은 거의 동일한 작업의 다른 이름일 수 있습니다. 온톨로지 모델링(Ontology Modeling)이 특정 [[도메인 (Domain)]]의 핵심 용어(개체, 클래스)와 그 속성(개념의 상태 (State)), 그리고 그 관계(개념의 구성 (Concept Composition))를 명확히 정의하여 [[지식의 뼈대 (Skeleton of Knowledge)]]를 만드는 작업이라면,
        
    - CBD는 '소프트웨어 시스템'이라는 특정 도메인 (Domain)의 핵심 개념 (Concepts)과 그 관계를 정의하여 [[시스템의 뼈대 (System Skeleton)]]를 만드는 일입니다. 둘 다 [[도메인 지식 (Domain Knowledge)]]을 명확하게 시스템화하는 것을 목표로 합니다.
        
- **[[시스템 사고 (Systems Thinking)]]**
    
    - CBD는 시스템 사고 (Systems Thinking)를 실천하는 구체적인 방법론입니다. 시스템을 개별 기능의 단순한 합(List)으로 보지 않고, 서로 영향을 주고받는 개념 (Concepts)들의 유기적인 네트워크(Graph)로 바라봅니다. 이를 통해 [[창발적 행동 (Emergent Behavior)]]을 예측하고 제어할 수 있게 됩니다.
        
- **[[도메인 주도 설계 (Domain-Driven Design)]]**
    
    - CBD는 도메인 주도 설계 (Domain-Driven Design)와 밀접하게 연결됩니다. DDD의 핵심인 유비쿼터스 언어 (Ubiquitous Language)는 바로 도메인 (Domain)의 핵심 개념 (Core Concepts)들을 명확히 정의하고 모두가 동일한 용어를 사용하는 것에서 출발합니다. CBD는 이 핵심 개념 (Core Concepts)을 발견하고 정의하는 구체적인 방법을 제공합니다.
        

---

## 5. 주요 예시 (Key Examples)

- [[휴지통 개념 (Trash Can Concept)]]
    
    - 개념의 친숙성 (Concept Familiarity)을 활용한 가장 고전적이고 위대한 개념 (Concepts) 설계의 예시입니다. '삭제'라는 파괴적인 개념의 액션 (Action)에 '임시 보관'과 '복구'라는 개념의 작동 원리 (Operation)를 더해 안전성 (Safety)을 확보했습니다.
        
- [[스타일 개념 (Style Concept)]]
    
    - 워드프로세서의 '스타일'(예: '제목 1', '본문') 개념 (Concepts)입니다. 이는 '글꼴', '크기', '색상' 등 수많은 서식 속성들을 '스타일'이라는 단일 개념으로 추상화하여, 일관성 (Consistency)과 재사용성 (Reusability)을 극대화한 예시입니다.
        
- [[예약 개념 (Reservation Concept)]]
    
    - 항공권, 호텔, 식당 예약 시스템의 핵심 개념 (Core Concepts)입니다. 이 개념은 '대기 중', '확정됨', '취소됨', '노쇼(No-show)' 같은 명확한 개념의 상태 (State) 정의가 비즈니스 로직의 핵심이 되는 예시입니다.
        
- [[이메일 시스템의 개념들 (Email System Concepts)]]
    
    - '메시지', '폴더', '라벨(태그)' 개념 (Concepts)들이 어떻게 자유 결합 (Freedom)하거나 협업 (Cooperation)하는지 보여주는 좋은 예시입니다. (예: Gmail은 '폴더' 개념 (Concepts) 대신 '라벨' 개념을 채택하여 유연성을 높였습니다.)

---

## 6. 더 알아보기

- [다니엘 잭슨 (Daniel Jackson)](https://people.csail.mit.edu/dnj/)
    
- [[MOC_소프트웨어 추상화]]
    

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)