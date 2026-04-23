### 정의

**역관계(Inverse Properties)**는 [[Object Property 특성 (Axioms)]] 중 하나로, [[공식화 (Formalization)]] 단계에서 **두 개의 [[Object Properties]]가 서로 반대 방향의 관계**임을 논리적으로 정의하는 [[공리 (Axioms)]]입니다. 

- **의미**: 만약 속성 `P1`이 속성 `P2`의 역관계(inverseOf)로 정의된다면, "A가 B와 `P1` 관계이다" (A `P1` B)라는 사실은 "B가 A와 `P2` 관계이다" (B `P2` A)라는 사실과 논리적으로 **동일(equivalent)**함을 의미합니다.
    
- **예시:** 
    
    - `precedes` (…보다 앞에 오다) 속성을 `follows` (…의 뒤에 오다) 속성의 **역관계(inverseOf)**로 정의할 수 있습니다.
        
    - **명시된 사실:**
        
        1. `SystemA` **precedes** `SystemB`
            
    - **[[OWL 추론(Reasoning)]] 결과:** 추론기는 이 사실과 역관계 [[공리 (Axioms)]]를 바탕으로, 우리가 명시하지 않았음에도 불구하고 **`SystemB` follows `SystemA`**라는 새로운 사실을 **자동으로 추론**해냅니다.
        
- 이는 데이터를 한쪽 방향으로만 입력해도, 추론을 통해 양방향의 지식을 모두 확보할 수 있게 하여 지식 베이스를 풍부하게 만듭니다.

---
**Tags:** #온톨로지 #OWL #속성 #공리 #역관계 #InverseProperties #공식화 #Axioms

**연결 노트:** [[Object Property 특성 (Axioms)]], [[Object Properties]], [[공식화 (Formalization)]], [[OWL 추론(Reasoning)]], [[공리 (Axioms)]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)