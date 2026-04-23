### 정의

**알로이 언어(Alloy Language)는 소프트웨어 구조와 속성을 **추상적**으로 명시(Specification)하고 분석하기 위해 설계된 **선언적(Declarative)** 모델링 언어입니다.**

- 이는 **관계형 논리(Relational Logic)**를 기반으로 하며, 모든 개념을 **관계(Relation)**를 통해 표현하는 통일된 문법을 제공합니다.
    
- Alloy는 일종의 **소프트웨어 설계용 DSL(Domain-Specific Language)**로 볼 수 있습니다.
    

### 핵심 특징 및 구성 요소

1. **관계 중심 (Relational Centricity):**
    
    - Alloy의 문법은 집합, 함수, 술어 같은 전통적인 개념을 모두 **관계**로 환원하여 표현합니다. 이는 언어의 **단순성(Simplicity)**과 **통일성**을 극대화합니다.
        
2. **선언적 명시 (Declarative Specification):**
    
    - 개발자는 시스템이 **어떤 상태여야 하는지**(**무엇을**) 정의하는 데 집중하고, **어떻게** 그 상태에 도달하는지는 **알로이 분석기(Alloy Analyzer)**에 맡깁니다.
        
3. **구조화 요소:**
    
    - **시그니처(`sig`):** 아톰(Atom)의 집합과 기본 관계(필드)를 정의하여 시스템의 타입을 구성합니다.
        
    - **사실(`fact`):** 모델이 항상 만족해야 할 기본적인 구조적 제약 조건(불변성)을 명시합니다.
        
    - **술어(`pred`):** 재사용 가능한 논리 블록이나 시스템의 행위(Operation)를 정의합니다.
        
    - **단언(`assert`):** 검증하고자 하는 핵심 속성을 명시하며, 분석기의 주요 목표가 됩니다.
        
4. **분석 명령어:**
    
    - **`run`** 및 **`check`** 명령을 통해 **스코프(Scope)**를 지정하고 모델의 유효한 **사례(Example)**를 찾거나 **단언**의 유효성을 검증합니다.
        

---

**의의:** Alloy는 복잡한 소프트웨어 설계 문제를 **컴퓨터 과학적 추론(Computation)**을 통해 해결할 수 있도록 변환해주는 다리 역할을 합니다.

---
**Tags:** #Alloy언어, #관계형논리, #모델링, #명시, #자동화, #DSL

**연결 노트:** [[관계형 논리 (Relational Logic)]], [[알로이 분석기 (Alloy Analyzer)]], [[모델 (Model)]], [[명시 (Specification)]], [[MOC_소프트웨어 추상화]]

**작성일:** 2025-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)