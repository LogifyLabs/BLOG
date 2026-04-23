### 정의

**개념의 구성 (Concept Composition)**은 개별적으로 정의된 **개념 (Concepts)**들이 서로 관계를 맺고 결합하여 더 크고 완전한 소프트웨어 시스템을 형성하는 방식과 원리를 정의하는 설계 활동입니다. 이 과정은 시스템이 단순한 기능의 합(List)이 아닌, 유기적인 상호작용 네트워크(Graph)인 **시스템 사고 (Systems Thinking)**를 실현하는 핵심입니다.

**세 가지 주요 결합 방식:**

1. **자유 결합 (Freedom):** 두 개념이 서로의 존재를 **인지하지 않아도** 독립적으로 작동하며 결합됩니다. 이는 **관심사의 분리 (Separation of Concerns)**가 가장 잘 이루어진 상태로, 높은 **모듈성 (Modularity)**과 **재사용성 (Reusability)**을 보장합니다.
    
    - _예시:_ 이메일의 '메시지'와 '라벨' 개념. 라벨이 없어도 메시지는 존재하며, 그 반대도 마찬가지입니다.
        
2. **협업 (Cooperation):** 두 개념이 서로의 존재를 **인지하고 정보를 교환**하며 공통의 목적을 위해 함께 작동합니다. 상호작용을 통해 상태를 공유하거나 변경합니다.
    
    - _예시:_ '항공편' 개념과 '좌석' 개념. 좌석의 예약 상태가 항공편의 잔여 좌석 수에 영향을 미칩니다.
        
3. **시너지 (Synergy):** 두 개념이 결합하여 각 개별 개념이 혼자서는 달성할 수 없었던 **완전히 새로운 가치나 기능**을 창출합니다. 이는 창발적 행위(Emergent Behavior)의 대표적인 형태입니다.
    
    - _예시:_ '문서' 개념과 '실시간 공동 편집' 개념의 결합.
        

**설계 시 중요성:** 개념들이 어떻게 구성되고 상호작용하는지를 명확히 이해하는 것은, 시스템의 **창발적 행동 (Emergent Behavior)**을 예측하고, **견고한 설계 (Robust Design)**를 달성하는 데 필수적입니다.

---

**Tags:** #MOC #개념기반설계 #소프트웨어설계 #시스템사고 #모듈성 #아키텍처 #재사용성

**연결 노트:** [[개념 (Concepts)]], [[시스템 사고 (Systems Thinking)]], [[개념의 의존성 (Concept Dependencies)]], [[관심사의 분리 (Separation of Concerns)]], [[재사용성 및 모듈성 (Reusability and Modularity)]], [[MOC_콘셉트로 풀어내는 소프트웨어 디자인]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)