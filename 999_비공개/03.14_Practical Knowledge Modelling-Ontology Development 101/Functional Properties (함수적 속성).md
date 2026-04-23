### 정의

**함수적 속성(Functional Properties)**은 [[Object Property 특성 (Axioms)]] 중 하나로, [[공식화 (Formalization)]] 단계에서 [[Object Properties]]에 부여하는 논리적 규칙입니다. 

이는 어떤 개체(subject)가 이 속성(관계)을 가질 때, 그 관계의 대상(object)이 **"최대 1개(at most one)"**임을 정의합니다.

- **예시:** `hasBiologicalMother` (생물학적 어머니) 속성을 'Functional'로 정의할 수 있습니다.
    
    - **해석:** "모든 개체(e.g., `Person`)는 `hasBiologicalMother` 관계를 최대 1개만 가질 수 있다."
        
- **활용:** [[OWL 추론(Reasoning)]] 엔진은 이 규칙을 사용합니다. 만약 어떤 개체 `Harry`가 2명의 `hasBiologicalMother` 관계를 가진다고 입력되면, 추론기는 이를 **논리적 모순(inconsistency)**으로 감지합니다.
    
- **참고:** 이는 해당 속성이 사용되는 _모든 곳_에 적용되는 '전역(global) 규칙'입니다. 특정 [[클래스 (Classes)]]에만 `max 1` 제한을 거는 [[Cardinality Restriction (수량 제한)]]과 유사하지만, 적용 범위가 다릅니다. (Functional Property는 `max 1 Cardinality`의 전역 단축키와 같습니다.)

---
**Tags:** #온톨로지 #OWL #속성 #공리 #함수적 #공식화 #Axioms

**연결 노트:** [[Object Property 특성 (Axioms)]], [[Object Properties]], [[공식화 (Formalization)]], [[OWL 추론(Reasoning)]], [[Cardinality Restriction (수량 제한)]], [[Practical Knowledge Modelling-Ontology Development 101]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)