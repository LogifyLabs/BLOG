![[1.jpg]]


---

**제목:** Practical Knowledge Modelling: Ontology Development 101

**강사:** Tish Chungoora

**강의 링크:** https://www.udemy.com/course/practical-knowledge-modelling/

**Tags**: #온톨로지 #지식모델링 #Ontology #KnowledgeModelling #방법론 #OWL #Protégé #SemanticWeb

**작성일:** 25-10-24


---

> 이 문서는 'Practical Knowledge Modelling: Ontology Development 101' 과정의 핵심 내용을 정리한 MOC (Map of Contents)입니다.

---

## 0. [[과정 소개 (Introduction)]]

이 과정은 '실용적 지식 모델링'에 중점을 둡니다. 즉, 복잡한 철학이나 수학 이론보다는 실제 현업에서 어떻게 지식을 구조화하고 공유하는지에 초점을 맞춥니다.

온톨로지는 단순히 학문적인 개념이 아니라, **[[지식 경영 (Knowledge management)]]**, **[[비즈니스 분석 (Business analysis)]], **[[지식 공유 (Knowledge sharing)]]** 등 다양한 분야에서 실질적인 문제를 해결하는 데 사용됩니다. 우리는 이 과정을 통해 지식을 컴퓨터가 이해할 수 있는 언어인 **[[OWL (Web Ontology Language)]]**로 표현하고, 이를 다루는 도구인 **[[Protégé (프로테제 온톨로지 에디터)]]**의 사용법을 익히게 될 것입니다.

## 1. [[지식 모델링이란 무엇인가 (What is knowledge modelling)]]

이 챕터는 모든 것의 기본이 되는 '용어 정의'입니다.

- **지식이란 무엇인가?**: 우리는 흔히 [[DIKW 피라미드 (DIKW Pyramid)]]를 통해 지식을 이해합니다. 단순한 사실인 **[[데이터 (Data)]]**가 모여 맥락을 가지면 **[[정보 (Information)]]**가 되고, 이 정보가 경험과 결합하여 활용 가능한 상태가 되면 **[[지식 (Knowledge)]]**이 됩니다.
    
- **온톨로지 정의**: 지식 모델링의 핵심이 바로 '온톨로지'입니다. 가장 유명한 정의는 "개념화에 대한 명시적인 명세" 또는 "공유된 개념화에 대한 정형적이고 명시적인 명세"입니다.
    
    - 이 말을 쉽게 풀어보죠. '[[개념화 (Conceptualization)]]'는 우리가 특정 주제(e.g., '펜')에 대해 머릿속으로 생각하는 방식입니다.
        
    - '[[명시적 (Explicit)]]'이란, 그 생각을 애매하지 않게 글로 분명히 밝혀 적는 것입니다.
        
    - '[[정형적 (Formal)]]'이란, 사람이 아닌 '컴퓨터'(기계)가 읽고 처리할 수 있도록 약속된 형식으로 적는 것을 의미합니다.
        
    - '[[공유된 (Shared)]]'란, 혼자만 아는 것이 아니라 여러 사람이 동의하고 함께 사용하는 개념이라는 뜻입니다.
        
- **핵심 구성요소**: 온톨로지를 만들 때는 주로 4가지 요소를 사용합니다.
    
    - **[[클래스 (Classes)]]**: '펜', '사람', '국가'처럼 개념의 집합을 의미합니다. (e.g., 'Person', 'Country')
        
    - **[[관계 (Relations)]] (속성)**: 클래스 간의 연결 고리입니다. (e.g., 'Harry' **knows** 'Ron', 'Harry' **speaks** 'English') 
        
    - **[[개체 (Individuals)]]**: 클래스의 실제 사례(인스턴스)입니다. (e.g., 'Harry', 'Ron'은 'Person' 클래스의 개체)
        
    - **[[공리 (Axioms)]]**: "모든 사람은 적어도 하나의 언어를 말한다"처럼, 해당 영역에서 '반드시 참'이 되는 규칙이나 제약 조건입니다.
        
- **활용**: 이렇게 잘 만든 온톨로지는 시스템 간의 **[[시스템 상호운용성 (Systems interoperability)]]**을 높이고, 더 똑똑한 검색이나 **[[문제 해결 및 의사 결정 지원 (Problem Solving & Decision Support)]]**에 사용됩니다.
    

## 2. 지식 모델링 (Knowledge modeling)

온톨로지는 주먹구구식으로 만들지 않습니다. 체계적인 '프로세스' 즉, **[[온톨로지 개발 생명주기 (Ontology Development Lifecycle)]]**를 따릅니다. 

1. **[[목표 및 범위 정의 (Goal & Scope Definition)]]**: 왜 이 온톨로지를 만드는지, 어디까지 다룰 것인지 명확히 합니다. (e.g., "볼펜의 종류와 부품을 정의한다")
    
2. **[[정보 수집 및 도출(Information Gathering & Elicitation)]]**: 전문가 인터뷰, 문서 분석 등을 통해 필요한 정보를 모읍니다.
    
3. **[[초기 구조화 (Initial structuring)]]**: 수집된 정보를 바탕으로 클래스와 관계를 대략적으로 스케치합니다.
    
4. **[[공식화 (Formalization)]]**: 스케치를 Protégé 같은 도구를 이용해 OWL 코드로 변환합니다.
    
5. **[[배포 (Deployment)]]**: 완성된 온톨로지를 실제 시스템에 적용합니다.
    
6. **[[평가 (Evaluation)]]**: 온톨로지가 원래 목표에 맞게 잘 작동하는지 검증합니다.
    

이 모든 과정의 중심에는 **[[요구사항 관리 (Requirements Management)]]**가 있습니다. "우리 온톨로지가 어떤 질문에 답할 수 있어야 하는가?" (e.g., "리필 가능한 펜은 무엇이 있는가?")와 같은 **[[역량 질문 (Competency Questions)]]**을 정하고 관리하는 것이 핵심입니다.

## 3. [[초기 구조화 (Initial structuring)]]

이 단계는 '브레인스토밍과 스케치' 단계입니다. 아직 코딩(공식화)에 들어가기 전, 머릿속의 복잡한 정보를 눈에 보이는 **'경량(lightweight) 온톨로지'**로 만드는 과정입니다.

- **[[정보 수집 기법 (Information Gathering Techniques)]]**: [[친화도 다이어그램 (Affinity diagram)]] (e.g., 포스트잇 브레인스토밍)이나 기존 문서 분석 (e.g., "A ballpoint pen is a pen")을 통해 키워드와 관계를 뽑아냅니다.
    
- **[[구조화 기법 (Structuring Techniques)]]**: 이 정보를 [[UML (Unified Modeling Language)]] 다이어그램이나 [[IDEF5]] 같은 시각적 도구로 그립니다.
    
- **[[UML-온톨로지 매핑]]**: 예를 들어, UML의 'Class'는 온톨로지의 **[[클래스 (Classes)]]**가 되고, 'Generalisation'(일반화) 관계는 **[[Subsumption (상속)]]** (e.g., 'BallpointPen'은 'Pen'의 하위 클래스)이 됩니다.
    

이 단계의 산출물(시각적 다이어그램)은 코딩 전문가가 아니더라도 누구나 보고 이해하며 의견을 나눌 수 있다는 장점이 있습니다.

## 4. [[공식화 (Formalization)]]

이제 '스케치'를 '코딩'으로 옮기는, 가장 기술적이고 중요한 단계입니다. 우리는 **[[Protégé (프로테제 온톨로지 에디터)]]**라는 편집기를 사용해 우리의 지식 모델을 **[[OWL (Web Ontology Language)]]**이라는 정형 언어로 인코딩(작성)합니다.

- **[[OWL 속성(Properties)]]**: OWL에서 '관계'는 크게 두 가지로 나뉩니다.
    
    - **[[Object Properties]]**: 클래스와 클래스(개체와 개체)를 연결합니다. (e.g., `hasComponent`, 'BallpointPen' **hasComponent** 'BallPoint')
        
    - **[[데이터 속성 (Datatype Properties)]]**: 클래스(개체)를 데이터 값(숫자, 문자열)과 연결합니다. (e.g., `hasAge`, 'Harry' **hasAge** 17)
        
- **[[Object Property 특성 (Axioms)]]**: 관계에 '규칙'을 부여합니다.
    
    - **[[Transitive Properties (추이적 속성)]]**: (A가 B 앞에, B가 C 앞에 -> A는 C 앞에)
        
    - **[[Functional Properties (함수적 속성)]]**: 대상(목적어)이 최대 1개여야 함. (e.g., 'Person' **locatedIn** 'City'. 한 사람은 동시에 두 도시에 있을 수 없음)
        
- **[[OWL 제한 (Restrictions)]]**: 클래스를 정의하는 강력한 도구입니다. 이것이 온톨로지를 특별하게 만듭니다.
    
    - **[[Existential Restriction (some)]]**: "적어도 하나 존재해야 함". (e.g., 'BallpointPen'은 `hasComponent` **some** 'BallPoint' - 볼펜은 _적어도 하나의_ 볼포인트를 부품으로 가져야 한다.)
        
    - **[[Universal Restriction (only)]]**: "오직 ~로만 구성됨". (e.g., 'BicCristal'은 `hasComponent` **only** ('BallPoint' or 'Cap' or 'InkReservoir'...) - 빅크리스탈 펜은 _오직_ 명시된 부품들_만_ 가져야 한다.)
        
    - **[[Cardinality Restriction (수량 제한)]]**: 개수를 제한함. (e.g., 'MultiColourBallpointPen'은 `hasComponent` **min** 2 'BallPoint' - 다색펜은 _최소 2개_의 볼포인트를 갖는다.)
        
- **[[OWL 추론(Reasoning)]]**: 이것이 온톨로지의 '꽃'입니다. 우리가 정의한 규칙(Axioms)과 제한(Restrictions)을 바탕으로, 컴퓨터(추론기)가 우리가 _명시하지 않은_ 새로운 지식을 자동으로 _추론_해냅니다.
    
    - 예: 우리가 'DesignerBallpointPen'을 "Refillable(리필 가능)"하고 "Expensive(비쌈)" 특징을 _모두_ 가진 펜이라고 **[[필요충분조건 (Necessary & Sufficient Conditions)]]** 으로 정의했다고 합시다.
        
    - 만약 어떤 펜 'MyPen'이 'Refillable'하고 'Expensive'하다고 나중에 밝혀지면, 우리는 'MyPen'이 'DesignerBallpointPen'이라고 말한 적이 없음에도 추론기가 자동으로 'MyPen'을 'DesignerBallpointPen' 클래스로 분류(classification)해줍니다.
        

## 5. [[배포 (Deployment)]]

온톨로지는 지식 아키텍트의 컴퓨터에만 머무르지 않습니다. 완성된 `.owl` 파일은 서버 등에 **[[배포 (Deployment)]]**되어, 최종 사용자가 사용하는 **[[Front-end application (최종 사용자 애플리케이션)]]** (e.g., 회사 인트라넷, 검색 엔진)이 온톨로지(지식 모델)를 참조하여 더 똑똑한 서비스를 제공하게 됩니다. 이 과정에는 개발자(Systems developer)의 역할이 중요합니다.

## 6. [[평가 (Evaluation)]]

온톨로지를 다 만들고 배포한 후에는, "우리가 이걸 잘 만들었나?"를 확인해야 합니다.

- **[[핵심 평가 질문 (Key Evaluation Questions)]]**:
    
    - "[[역량 질문 (Competency Questions)]]에 모두 답할 수 있는가?" (가장 중요!)
        
    - "[[일관성 검사 (consistency checking)]] 결과가 예상대로인가?" (논리적 오류가 없는가?)
        
    - "원래의 명세서(specifications)가 얼마나 잘 충족되었는가?" 
        

이 평가는 기술적인 검증일 수도 있고, 실제 비즈니스 질문에 답해보는 것일 수도 있습니다.

## 7. [[과정 마무리 (Course wrap-up)]]

마지막으로, 프로젝트를 통해 배운 **[[주요 교훈 (Lessons learnt)]]**과 개발 과정에서 겪기 쉬운 **[[일반적인 함정 (Common pitfalls)]]**을 되짚어봅니다.

- **주요 함정**:
    
    - 체계적인 [[온톨로지 개발 생명주기 (Ontology Development Lifecycle)]]을 사용하지 않는 것.
        
    - 시각적 모델(UML)과 정형 모델(OWL) 간의 변환을 잘못 이해하는 것.
        
    - [[명명 규칙 (Naming Conventions)]]을 일관되게 적용하지 않는 것.
        

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)