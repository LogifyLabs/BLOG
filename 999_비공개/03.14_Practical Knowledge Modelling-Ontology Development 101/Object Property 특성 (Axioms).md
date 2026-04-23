### 정의

**Object Property 특성(Axioms)**은 [[공식화 (Formalization)]] 단계에서 [[Object Properties]]에 부여하는 **특별한 논리적 규칙 또는 특성**들입니다. 

이는 [[공리 (Axioms)]]의 한 형태로, [[Object Properties]]가 어떻게 작동해야 하는지를 [[정형적 (Formal)]]으로 정의하여 [[OWL 추론(Reasoning)]] 엔진이 더 풍부한 지식을 도출하거나 모순을 찾아낼 수 있도록 돕습니다.

주요 특성들은 다음과 같습니다. 

- **[[Inverse Properties (역관계)]]**: 두 속성이 서로 반대 관계임을 정의합니다. (e.g., `precedes` / `follows`)
    
- **[[Functional Properties (함수적 속성)]]**: 관계의 대상(object)이 최대 1개여야 함을 정의합니다. (e.g., `hasBiologicalMother`)
    
- **[[Inverse Functional Properties (역함수적 속성)]]**: 관계의 주체(subject)가 최대 1개여야 함을 정의합니다. (e.g., `isBiologicalMotherOf`)
    
- **[[Transitive Properties (추이적 속성)]]**: 관계가 추이적임을 정의합니다. (e.g., A `precedes` B, B `precedes` C → A `precedes` C)
    
- **[[Symmetric Properties (대칭적 속성)]]**: 관계가 대칭적임을 정의합니다. (e.g., A `hasSynonym` B → B `hasSynonym` A)
    
- **기타**: `Asymmetric` (비대칭적), `Reflexive` (재귀적), `Irreflexive` (비재귀적) 특성 등이 있습니다. 

---
**Tags:** #온톨로지 #OWL #속성 #공리 #Axioms #ObjectProperties #공식화 #MOC

**연결 노트:** [[Object Properties]], [[공리 (Axioms)]], [[공식화 (Formalization)]], [[OWL 추론(Reasoning)]], [[Practical Knowledge Modelling-Ontology Development 101]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)