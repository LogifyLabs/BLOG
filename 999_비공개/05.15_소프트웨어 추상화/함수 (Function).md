### 정의

**함수(Function)는 **특정 제약 조건**을 만족하는 **관계(Relation)**의 한 종류입니다.**

- 전통적인 수학 및 프로그래밍에서 함수는 '입력 값(Domain)에 대해 하나의 출력 값(Range)만을 매핑하는 규칙'을 의미합니다.
    
- **관계형 논리(Relational Logic)**에서는 함수가 별도의 기본 요소가 아니며, **애리티(Arity)** 2 이상의 관계에 **추가적인 제약 조건**을 부과하여 정의됩니다.
    

### 관계형 논리에서의 함수

Alloy에서 함수는 두 가지 핵심 속성을 갖는 **이항 관계(Binary Relation)**로 표현됩니다.

1. **단일 값 제약 (Totality/Mapping):**
    
    - **단일성(Singleness, Partial Function):** 각 **도메인(Domain)** 원소는 관계의 **이미지(Image)** 원소와 최대 **하나**만 연결됩니다. 즉, $A \rightarrow lone B$ 형태의 제약이 부과됩니다. (출력은 없거나 하나)
        
2. **정의 제약 (Totality/Definedness):**
    
    - **전역성(Totality, Total Function):** 도메인의 **모든** 원소가 반드시 관계의 이미지 원소와 최소 **하나** 연결됩니다. 즉, $A \rightarrow one B$ 또는 $A \rightarrow some B$ 형태의 제약이 부과됩니다. (출력은 반드시 하나 이상)
        

### 소프트웨어 추상화에서의 역할

- **명시의 간결성:** 함수는 **필드(Field)** 선언 시 **`one`** 또는 **`lone`**과 같은 카디널리티 키워드를 사용하여 간결하게 명시됩니다. 이는 모델의 **가독성**과 **명확성**을 높입니다.
    
- **조인 연산:** 전통적인 함수 적용 $f(x)$는 관계형 논리에서 **조인 연산자($\cdot$)**를 사용하여 $x.f$ 또는 이와 유사한 형태로 표현됩니다.
    

---

**결론:** Alloy에서 함수는 **관계**라는 통일된 기반 위에서 **제약 조건**을 통해 특별한 의미를 부여받은 **특수한 관계**이며, 시스템의 구조를 명확히 정의하는 데 중요한 역할을 합니다.

---
**Tags:** #함수, #관계, #부분함수, #전역함수, #관계형논리, #제약조건

**연결 노트:** [[관계 (Relation)]], [[관계형 논리 (Relational Logic)]], [[필드 (Field)]], [[조인 연산자 (Join Operator)]], [[MOC_소프트웨어 추상화]]

**작성일:** 2025-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)