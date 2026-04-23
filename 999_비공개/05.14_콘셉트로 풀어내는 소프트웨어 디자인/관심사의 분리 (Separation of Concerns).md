### 정의

**관심사의 분리 (Separation of Concerns)**는 복잡한 소프트웨어 시스템을 서로 **겹치지 않는(non-overlapping)** 기능적 영역이나 **개념 (Concepts)**들로 나누어, 각 영역이 **단 하나의 특정 책임(Concern)**만을 담당하도록 구조화하는 가장 기본적인 설계 원칙입니다.

---

### 핵심 목표:

- **응집도(Cohesion) 향상:** 각 모듈(또는 개념) 내의 요소들은 그들의 단일 책임에 집중되어 **강하게 연결**됩니다.     
    
- **결합도(Coupling) 최소화:** 모듈 간의 의존성(Dependency)은 최소화되어, 하나의 관심사를 변경해도 다른 관심사에는 영향이 적도록 만듭니다.     
    

---

### CBD와의 관계:

**Concept-Based Design (CBD)**는 이 원칙을 가장 추상적인 **개념 계층**에서 실현합니다.

- **개념의 구체성 (Concept Specificity)** 원칙을 통해 각 **개념 (Concepts)**이 단 하나의 **개념의 목적 (Concept Purpose)**에만 집중하게 함으로써 개념 수준의 관심사 분리를 달성합니다.     
    
- 이로 인해 개념들은 **자유 결합 (Freedom)**과 같은 높은 **모듈성 (Modularity)**을 갖는 **개념의 구성 (Concept Composition)**이 가능해집니다.     
    

---

### 결과:

관심사가 잘 분리된 시스템은 **유지보수성 (Maintainability)**과 **재사용성 및 모듈성 (Reusability and Modularity)**이 극대화되며, **복잡성 관리 (Complexity Management)**가 용이해집니다.

---

**Tags:** #MOC #소프트웨어설계 #설계원칙 #모듈성 #응집도 #결합도 #복잡성관리

**연결 노트:** [[개념 (Concepts)]], [[Concept-Based Design (CBD)]], [[개념의 구체성 (Concept Specificity)]], [[개념의 무결성 (Concept Integrity)]], [[재사용성 및 모듈성 (Reusability and Modularity)]], [[MOC_콘셉트로 풀어내는 소프트웨어 디자인]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)