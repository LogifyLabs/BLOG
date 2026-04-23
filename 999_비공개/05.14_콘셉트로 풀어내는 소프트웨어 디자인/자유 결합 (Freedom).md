### 정의

**자유 결합 (Freedom)**은 두 개 이상의 **개념 (Concepts)**이 서로의 **존재를 몰라도** 독립적으로 작동할 수 있으며, 시스템 내에서 **개념의 구성 (Concept Composition)**이 이루어지는 가장 느슨하고 이상적인 방식입니다. 이는 두 개념이 서로에게 **직접적인 개념의 의존성 (Concept Dependencies)**을 갖지 않음을 의미합니다.

---

### 핵심 특징:

1. **독립성:** 각 개념은 자체적인 **개념의 목적 (Concept Purpose)**을 완수하며, 다른 개념의 부재가 자신의 작동 원리에 영향을 주지 않습니다.     
    
2. **관심사의 분리 (Separation of Concerns)** 극대화: 이 결합 방식은 **모듈성 (Modularity)**을 극대화하고, 모듈 간의 **결합도(Coupling)**를 최소화합니다.     
    

---

### 실제 예시:

Gmail의 **'메시지' 개념**과 **'라벨(태그)' 개념**의 결합 방식입니다. 메시지는 라벨의 존재 여부와 관계없이 존재하며, 라벨을 제거해도 메시지의 본질적인 상태는 유지됩니다.

---

### 설계적 이점:

자유 결합은 시스템의 변경 및 확장이 용이하여 **유지보수성 (Maintainability)**과 **재사용성 및 모듈성 (Reusability and Modularity)**을 획기적으로 높이고, **우발적 복잡성 (Accidental Complexity)**을 방지합니다.

---

**Tags:** #MOC #개념기반설계 #개념의구성 #모듈성 #관심사의분리 #재사용성 #결합도

**연결 노트:** [[개념 (Concepts)]], [[개념의 구성 (Concept Composition)]], [[개념의 의존성 (Concept Dependencies)]], [[관심사의 분리 (Separation of Concerns)]], [[협업 (Cooperation)]], [[MOC_콘셉트로 풀어내는 소프트웨어 디자인]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)