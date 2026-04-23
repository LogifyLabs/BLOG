### 정의

**역함수적 속성(Inverse Functional Properties)**은 [[Object Property 특성 (Axioms)]] 중 하나로, [[공식화 (Formalization)]] 단계에서 [[Object Properties]]에 부여하는 논리적 규칙입니다. 

이는 어떤 속성(관계)에 대해, 그 관계의 대상(object)이 주어졌을 때 그 관계의 **주체(subject)가 "최대 1개(at most one)"**임을 정의합니다.

- 이는 [[Functional Properties (함수적 속성)]](대상이 최대 1개)와는 반대 방향의 제약입니다.
    
- **예시:** `isBiologicalMotherOf` (…의 생물학적 어머니다) 속성을 'Inverse Functional'로 정의할 수 있습니다. 
    
    - **해석:** "모든 개체(e.g., `Person`)는 `isBiologicalMotherOf` 관계의 *대상(object)*이 되었을 때, 그 관계의 *주체(subject)*를 최대 1개만 가질 수 있다."
        
    - 즉, "어떤 사람(e.g., `Bob`)의 생물학적 어머니는 최대 1명이다."
        
- **활용:** [[OWL 추론(Reasoning)]] 엔진은 이 규칙을 사용합니다. 만약 `Alice` **isBiologicalMotherOf** `Bob` 이고 `Eve` **isBiologicalMotherOf** `Bob` 라는 두 개의 사실이 입력되면, 추론기는 `Alice`와 `Eve`가 논리적으로 동일한 개체(Individual)여야 한다고 추론하거나, 동일하지 않다면 모순(inconsistency)으로 감지합니다.
    
- 이 속성은 `isIDOf`와 같이 고유 식별자(Unique Identifier)를 정의할 때 매우 유용합니다. (e.g., "특정 ID 번호(`object`)는 오직 한 사람(`subject`)에게만 부여되어야 한다.")

---
**Tags:** #온톨로지 #OWL #속성 #공리 #역함수적 #InverseFunctional #공식화 #Axioms

**연결 노트:** [[Object Property 특성 (Axioms)]], [[Object Properties]], [[Functional Properties (함수적 속성)]], [[공식화 (Formalization)]], [[OWL 추론(Reasoning)]], [[공리 (Axioms)]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)