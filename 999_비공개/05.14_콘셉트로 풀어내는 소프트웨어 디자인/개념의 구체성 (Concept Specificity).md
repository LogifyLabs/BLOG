### 정의

**개념의 구체성 (Concept Specificity)**은 **개념 (Concepts)** 설계의 가장 중요하고 기본적인 원칙으로, **각 개념은 단 하나의 명확한 개념의 목적 (Concept Purpose)에만 집중**해야 함을 의미합니다. 이는 시스템의 논리적 순수성을 유지하고, **우발적 복잡성 (Accidental Complexity)**을 최소화하는 기초가 됩니다.

**핵심 원칙:**

- **단일 목적 집중:** 하나의 개념은 하나의 사용자 니즈(User Need)만을 해결해야 합니다.     
    
- **분할과 정복:** 만약 어떤 개념이 두 가지 이상의 목적을 수행하는 것처럼 보인다면, 이는 **개념 과부하 (Overloaded Concepts)** 상태일 가능성이 높으므로, 각 목적에 충실한 독립적인 개념들로 **분할**해야 합니다.     
    

**위반 시 발생하는 문제 (함정):**

- **개념 과부하 (Overloaded Concepts):** 하나의 개념이 너무 많은 책임을 져서 모호해지고 혼란을 야기합니다.     
    
- **개념 중복 (Redundant Concepts):** 유사한 목적을 가진 개념이 여러 개 존재하여 사용자와 설계자 모두에게 혼란을 줍니다.     
    
- **개념 없는 목적 (Goal Without Concept):** 사용자의 목적을 지원할 구체적인 개념이 없어 편법(Workaround)을 유발합니다.     
    

**실천적 이점:** 개념의 구체성은 **관심사의 분리 (Separation of Concerns)**를 개념 계층에서 실현하며, 명확하고 **모듈성 (Modularity)** 높은 시스템 아키텍처를 가능하게 합니다.

---

**Tags:** #MOC #개념기반설계 #소프트웨어설계 #설계원칙 #구체성 #복잡성관리 #관심사의분리

**연결 노트:** [[개념 (Concepts)]], [[개념의 목적 (Concept Purpose)]], [[개념 과부하 (Overloaded Concepts)]], [[개념 중복 (Redundant Concepts)]], [[관심사의 분리 (Separation of Concerns)]], [[MOC_콘셉트로 풀어내는 소프트웨어 디자인]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)