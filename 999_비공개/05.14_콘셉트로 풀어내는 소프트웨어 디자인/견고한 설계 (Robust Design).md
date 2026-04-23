### 정의

**견고한 설계 (Robust Design)**는 시스템이 **예기치 않은 입력, 오류 조건, 또는 변경되는 환경** 속에서도 **개념 (Concepts)**의 본질적인 **개념의 목적 (Concept Purpose)**을 달성하며, **안정적이고 일관되게** 작동하는 능력을 의미합니다. 이는 단순한 버그 없는 구현을 넘어, 설계 자체가 실패에 내재적으로 강하도록 만드는 접근 방식입니다.

---

### 핵심 원칙:

1. **방어적 개념 정의:** **개념의 작동 원리 (Operation)**를 정의할 때, 유효하지 않은 상태 변화나 금지된 **개념의 액션 (Action)**이 발생하지 않도록 **사전 조건과 사후 조건**을 명확히 설정합니다.     
    
2. **개념의 무결성 (Concept Integrity)** 보장: 여러 **개념의 구성 (Concept Composition)** 과정에서 각 개념의 본질적인 속성이 훼손되거나 복잡하게 얽히지 않도록 합니다.     
    
3. **오류 복구 개념:** 실패가 발생했을 때 시스템이 '우아하게 실패(Fail Gracefully)'하고, 사용자에게 명확한 피드백을 주며, 복구 가능한 상태로 돌아갈 수 있는 **복구 개념**을 포함해야 합니다. (예: 휴지통 개념 (Trash Can Concept)을 통한 삭제 복구)     
    

---

### CBD와의 관계:

개념 기반 설계는 복잡성을 개념 수준에서 통제하여 **우발적 복잡성 (Accidental Complexity)**을 제거하고, 핵심 개념의 동작을 **정형 기법 (Formal Methods)**으로 검증할 수 있는 토대를 마련함으로써 견고함을 설계 단계부터 내재화합니다.

---

**Tags:** #MOC #개념기반설계 #소프트웨어설계 #안전성 #안정성 #정형기법 #견고성

**연결 노트:** [[개념 (Concepts)]], [[개념의 작동 원리 (Operation)]], [[개념의 무결성 (Concept Integrity)]], [[복잡성 관리 (Complexity Management)]], [[안전성 (Safety)]], [[MOC_콘셉트로 풀어내는 소프트웨어 디자인]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)