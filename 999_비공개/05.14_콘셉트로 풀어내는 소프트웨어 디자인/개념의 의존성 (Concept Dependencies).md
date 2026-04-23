### 정의

**개념의 의존성 (Concept Dependencies)**은 시스템을 구성하는 여러 **개념 (Concepts)**들이 서로 영향을 주고받으며, 특정 개념이 존재하거나 작동하기 위해 다른 개념이 선행되어야 하는 **논리적 관계와 위계**를 정의하는 것입니다. 이는 시스템의 **시스템 아키텍처 (System Architecture)**를 설계하는 기초가 됩니다.

---

### 핵심 구분:

개념은 의존성 및 중요도에 따라 다음과 같이 구분됩니다.

1. **핵심 개념 (Core Concepts):**
    
    - 시스템의 **개념의 목적 (Concept Purpose)**을 달성하는 데 필수적이며, 다른 많은 개념들이 이 핵심 개념에 의존합니다.
        
    - _예시:_ 이메일 시스템의 '메시지', 금융 시스템의 '계좌'.
        
    - 이 개념의 변경은 시스템 전체에 광범위한 영향을 미치므로, 가장 신중하게 설계되고 **개념의 무결성 (Concept Integrity)**이 보장되어야 합니다.
        
2. **확장 개념 (Satellite Concepts):**
    
    - 핵심 개념을 보조하거나 부가적인 기능 및 유연성을 제공합니다.
        
    - 핵심 개념에 의존하지만, 핵심 개념은 이 확장 개념의 존재 여부와 관계없이 작동할 수 있습니다.
        
    - _예시:_ 이메일 시스템의 '라벨(태그)', '필터', '스팸 처리 규칙'.
        

---

### 의존성 분석의 중요성:

- **복잡성 관리:** 의존성이 복잡하게 얽혀 있는 개념(특히 **순환 의존성**)은 **복잡성 관리 (Complexity Management)**를 어렵게 만들며 **우발적 복잡성 (Accidental Complexity)**을 야기합니다.
    
- **모듈화 및 확장:** 의존성을 명확히 파악하면 **재사용성 및 모듈성 (Reusability and Modularity)**을 높일 수 있습니다. 확장 개념을 분리하여 핵심 개념을 건드리지 않고도 기능을 추가할 수 있습니다.
    
- **테스트 용이성:** 의존성이 낮고 명확한 개념은 단위 테스트 및 통합 테스트가 용이하여 **견고한 설계 (Robust Design)**에 기여합니다.
    

---

**Tags:** #MOC #개념기반설계 #소프트웨어설계 #시스템아키텍처 #모듈성 #핵심개념 #의존성

**연결 노트:** [[개념 (Concepts)]], [[개념의 구성 (Concept Composition)]], [[시스템 아키텍처 (System Architecture)]], [[재사용성 및 모듈성 (Reusability and Modularity)]], [[관심사의 분리 (Separation of Concerns)]], [[MOC_콘셉트로 풀어내는 소프트웨어 디자인]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)