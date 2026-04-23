### 정의

**시그니처(Signature)는 모델링 언어인 Alloy에서 **아톰(Atom)**들의 **집합(Set)**을 정의하고 이름을 붙이는 구문이자, 시스템의 기본적인 **타입(Type)** 시스템을 구성하는 요소입니다.**

- 시그니처는 **시스템에 존재하는 객체(entities)**의 종류를 선언하고, 이 객체들 간의 **기본 관계(fields)**를 명시적으로 정의합니다.
    

### 구성 요소 및 역할

1. **아톰의 집합 정의:**
    
    - 시그니처는 고유하며 불변인 **아톰(Atom)**들의 집합을 나타냅니다. (예: `sig User {}`는 모든 사용자 아톰의 집합을 정의합니다.)
        
    - 이는 모델의 **상태 공간(State Space)**을 구성하는 기본 개체들을 정의하는 가장 기본적인 단위입니다.
        
2. **관계(Relation)의 선언:**
    
    - 시그니처 내부에 **필드(field)**를 선언하여 해당 타입의 아톰들이 다른 아톰들과 맺는 **관계(Relation)**를 정의합니다.
        
    - _예시:_ `sig User { knows: set User }`는 `User` 집합의 아톰이 `knows`라는 이름의 관계를 통해 다른 `User` 아톰 집합과 연결됨을 선언합니다.
        
3. **계층 구조 (Hierarchy):**
    
    - 시그니처는 **확장(extends)** 또는 **포함(in)** 구문을 사용하여 계층적 관계를 형성할 수 있습니다. (예: `sig Admin extends User {}`)
        
    - 이는 객체 지향의 **상속(inheritance)** 개념과 유사하게, 타입 간의 부분집합 관계와 속성 공유를 가능하게 합니다.
        
4. **스코프와 연결:**
    
    - **스코프(Scope)**는 시그니처별로 해당 타입의 아톰을 최대 몇 개까지 고려할지 제한하는 역할을 합니다.
        

---

**결론:** 시그니처는 Alloy 모델의 **정적인 골격(static skeleton)**을 구축하며, 모든 논리적 명시(Specification)와 행위적 분석이 이루어질 **기본적인 객체 유형**을 제공합니다.

---
**Tags:** #시그니처, #집합, #타입, #아톰, #관계, #Alloy

**연결 노트:** [[아톰 (Atom)]], [[관계 (Relation)]], [[스코프 (Scope)]], [[모델 (Model)]], [[MOC_소프트웨어 추상화]]

**작성일:** 2025-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)