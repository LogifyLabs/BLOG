### 정의

**논리(Logic)는 지식과 추론을 표현하고 검증하기 위한 엄격하고 **형식적인 언어**이자 **수학적 도구**입니다.**

- **소프트웨어에서의 역할:** 모호한 자연어 대신 논리를 사용해 시스템의 **추상적인 속성**을 **명시(Specification)**하고, 이 명시가 만족되는지 **분석(Analysis)**하는 기반이 됩니다.
    
- 논리는 명제, 변수, 그리고 이들을 연결하는 규칙(예: AND, OR, $\forall, \exists$)으로 구성됩니다.
    

### 논리의 종류 (Software Abstractions 관련)

1. **일차 논리 (First-Order Logic, FOL):** 가장 기본적이고 널리 쓰이는 논리입니다.
    
    - **문제:** 일반적으로 **결정 불가능(undecidable)**하여, 컴퓨터가 모든 명제의 참/거짓을 항상 판단할 수 없습니다.
        
2. **관계형 논리 (Relational Logic):** Alloy에서 사용되는 논리로, **관계(Relation)**만을 유일한 기본 요소로 사용합니다.
    
    - **장점:** 복잡한 일차 논리를 단순화하고 통일성을 높이며, **유한 범위(finite scope)**라는 제약 하에서 효율적인 **분석 및 검증**을 가능하게 합니다.
        

### 결론

소프트웨어 추상화에서 논리는 우리가 모델에 부여하는 **제약 조건**이며, 논리적 제약을 충족하는 모델을 찾는 과정이 곧 **소프트웨어의 버그나 속성을 검증**하는 행위입니다.

---
**Tags:** #논리, #형식언어, #명시, #분석, #수학적기초

**연결 노트:** [[관계형 논리 (Relational Logic)]], [[명시 (Specification)]], [[분석 (Analysis)]], [[MOC_소프트웨어 추상화]]

**작성일:** 2025-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)