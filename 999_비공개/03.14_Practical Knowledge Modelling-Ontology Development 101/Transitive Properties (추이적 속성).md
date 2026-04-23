### 정의

**추이적 속성(Transitive Properties)**은 [[Object Property 특성 (Axioms)]] 중 하나로, [[공식화 (Formalization)]] 단계에서 [[Object Properties]]에 부여하는 매우 유용한 논리적 규칙입니다. (p. 125)

이는 어떤 속성(관계) `P`에 대해, **"만약 A가 B와 `P` 관계이고, B가 C와 `P` 관계이면, A는 C와 `P` 관계이다"**라는 논리적 추이(transitivity)가 성립함을 정의합니다.

- **예시:**
    
    - `precedes` (…보다 앞에 오다) 속성을 'Transitive'로 정의할 수 있습니다.
        
    - **명시된 사실:**
        
        1. `SystemA` **precedes** `SystemB`
            
        2. `SystemB` **precedes** `SystemC`
            
    - **[[OWL 추론(Reasoning)]] 결과:** 추론기는 이 두 사실과 `precedes`가 'Transitive'라는 [[공리 (Axioms)]]를 바탕으로, 우리가 명시하지 않았음에도 불구하고 **`SystemA` precedes `SystemC`**라는 새로운 사실을 **자동으로 추론**해냅니다.
        
- 다른 예시로는 `partOf`(…의 일부이다), `ancestorOf`(…의 조상이다) 등이 있습니다.

---
**Tags:** #온톨로지 #OWL #속성 #공리 #추이적 #Transitive #공식화 #Axioms

**연결 노트:** [[Object Property 특성 (Axioms)]], [[Object Properties]], [[공식화 (Formalization)]], [[OWL 추론(Reasoning)]], [[공리 (Axioms)]], [[Practical Knowledge Modelling-Ontology Development 101]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)