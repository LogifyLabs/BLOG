### 정의

**개념 과부하 (Overloaded Concepts)**는 단일 **개념 (Concepts)**이 본래의 **개념의 목적 (Concept Purpose)**을 넘어서 너무 많은 기능적 책임이나 역할을 떠안게 될 때 발생하는 설계 결함입니다. 이는 **개념의 구체성 (Concept Specificity)** 원칙이 깨진 상태이며, 시스템에 **우발적 복잡성**을 추가하는 주범입니다.

**결과:**

1. **사용자 혼란:** 사용자가 하나의 개념을 통해 다양한 기능을 기대해야 하므로 **멘탈 모델 (Mental Models)**이 붕괴하고 직관성이 사라집니다. (예: '친구' 개념이 '팔로워', '메시지 수신자', '비밀 그룹 멤버'의 역할을 모두 하는 경우)
    
2. **설계 경직성:** 하나의 개념을 변경하면 시스템의 여러 다른 부분이 예상치 못한 영향을 받게 되어, 유지보수와 확장이 극도로 어려워집니다.
    
3. **불명확한 경계:** **개념의 상태 (State)**와 **개념의 액션 (Action)**의 정의가 모호해져 시스템 로직의 **일관성 (Consistency)**이 깨집니다.
    

**해결책:** 과부하된 개념을 목적에 따라 **원자적이고 독립적인 여러 개념**으로 분리하고 재정의합니다. (예: '친구'를 '팔로우 관계', '메시지 권한', '공유 그룹' 등으로 분리)

---

**Tags:** #MOC #개념기반설계 #소프트웨어설계 #복잡성관리 #설계결함 #개념의구체성

**연결 노트:** [[개념 (Concepts)]], [[개념의 구체성 (Concept Specificity)]], [[개념의 목적 (Concept Purpose)]], [[우발적 복잡성 (Accidental Complexity)]], [[관심사의 분리 (Separation of Concerns)]], [[MOC_콘셉트로 풀어내는 소프트웨어 디자인]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)