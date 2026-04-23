### 정의

**예약 개념 (Reservation Concept)**은 시스템 내에서 특정 **자원(Resource)** (예: 좌석, 객실, 시간 슬롯)을 특정 **시간과 사용자**에게 **미리 할당하고 확정**하는 행위 및 그 결과를 나타내는 **개념 (Concepts)**입니다. 이는 자원의 **배타적 사용 권한**을 확보하는 것이 **개념의 목적 (Concept Purpose)**입니다.

---

### 핵심 개념의 구조 (Concept Structure):

- **개념의 상태 (State)**가 핵심: **'대기 중(Pending)', '확정됨(Confirmed)', '취소됨(Cancelled)', '노쇼(No-show)', '완료됨(Completed)'** 등 **명확하게 분리된 상태** 정의가 비즈니스 로직의 근간입니다.     
    
- **개념의 작동 원리 (Operation)**의 복잡성: '결제 완료'라는 **개념의 액션 (Action)**이 '대기 중' 상태에서 '확정됨' 상태로의 변화를 유발하며, 이 변화는 '잔여 자원 수' 등의 **조건(Constraints)**에 의해 통제됩니다.     
    

---

### CBD와의 관계:

**예약 개념**은 **도메인 지식 (Domain Knowledge)**이 **본질적 복잡성 (Essential Complexity)**을 결정하는 대표적인 예시입니다. 이 개념의 **개념의 무결성 (Concept Integrity)**이 훼손될 경우('이중 예약' 등) 시스템의 신뢰성과 **데이터 무결성 (Data Integrity)**에 치명적인 영향을 미칩니다.

---

**Tags:** #MOC #개념기반설계 #핵심개념 #상태모델링 #도메인 #비즈니스모델

**연결 노트:** [[개념 (Concepts)]], [[개념의 상태 (State)]], [[개념의 작동 원리 (Operation)]], [[개념의 무결성 (Concept Integrity)]], [[본질적 복잡성 (Essential Complexity)]], [[MOC_콘셉트로 풀어내는 소프트웨어 디자인]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)