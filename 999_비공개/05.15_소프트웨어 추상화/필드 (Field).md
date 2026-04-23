### 정의

**필드(Field)는 Alloy 모델링 언어에서 **특정 시그니처(Signature)** 내부에 선언되어, 해당 시그니처의 **아톰(Atom)**들이 다른 아톰들과 맺는 **관계(Relation)**를 나타내는 명명된(named) 선언입니다.**

- 필드는 본질적으로 **이름이 부여된 관계(Named Relation)**이며, 특히 그 관계의 **첫 번째 열(Column)**이 필드가 선언된 시그니처의 아톰들로 구성됨을 의미합니다.
    
- 필드는 시스템의 **구조적 속성(Structural Properties)**을 정의하는 주요 수단입니다.
    

### 핵심 특징 및 용법

1. **관계의 선언:**
    
    - 필드는 일반적으로 **이항 관계(Binary Relation)**로 선언되지만, 더 높은 **애리티(Arity)**를 가질 수도 있습니다.
        
    - _예시:_ `sig User { files: set File }` 에서 **`files`**는 필드입니다. 이는 `User` 아톰과 `File` 아톰 간의 이항 관계를 정의합니다.
        
2. **도메인과 이미지:**
    
    - 필드의 **도메인(Domain)**은 필드가 선언된 시그니처(예: 위의 예시에서 `User`)이며, 필드의 **이미지(Image)**는 관계의 도착 지점(예: `File`)을 나타냅니다.
        
3. **조인 연산의 기반:**
    
    - 필드는 **조인 연산자($\cdot$)**의 대상이 되어 시스템 구조를 탐색하는 데 사용됩니다.
        
    - _예시:_ `u.files`는 특정 사용자 `u`가 소유한 파일의 집합을 찾아냅니다. 여기서 `files`는 `User` 집합에서 시작하는 관계(필드)로 사용됩니다.
        
4. **카디널리티 제한:**
    
    - 필드를 선언할 때 **`one`, `lone`, `some`, `set`**과 같은 **정량화(Quantification)** 키워드를 사용하여 관계의 **개수(Cardinality)**에 대한 제약을 직접 명시할 수 있습니다. (예: `manager: one User`는 각 부서가 오직 한 명의 매니저를 가진다는 제약을 정의합니다.)
        

---

**결론:** 필드는 **관계형 논리**를 객체 지향적인 방식으로 표현하게 해주는 Alloy의 문법적 설탕(Syntactic Sugar)이며, 시스템의 **데이터 구조**와 **연결 관계**를 정의하는 데 필수적입니다.

---
**Tags:** #필드, #관계, #시그니처, #속성, #이항관계, #관계형논리

**연결 노트:** [[시그니처 (Signature)]], [[관계 (Relation)]], [[애리티 (Arity)]], [[조인 연산자 (Join Operator)]], [[MOC_소프트웨어 추상화]]

**작성일:** 2025-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)