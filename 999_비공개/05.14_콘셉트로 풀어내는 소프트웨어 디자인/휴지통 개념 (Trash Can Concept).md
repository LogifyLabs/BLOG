### 정의

**휴지통 개념 (Trash Can Concept)**은 파일 시스템이나 이메일 클라이언트 등에서 **파괴적인 개념의 액션 (Action)**인 '삭제(Delete)' 행위에 대해 **'임시 보관 및 복구(Temporary Storage and Recovery)'**라는 **안전 장치(Safety Mechanism)**를 결합하여 설계된 **개념 (Concepts)**입니다. 이는 현실 세계의 '휴지통'이라는 익숙한 은유를 차용한 것입니다.

---

### 핵심 역할:

1. **안전성 (Safety)** 확보: 사용자의 **실수**로 인한 데이터의 영구적 손실을 방지하고, **데이터 복구 가능성**이라는 목적을 달성합니다.     
    
2. **개념의 친숙성 (Concept Familiarity)** 극대화: 사용자의 **멘탈 모델 (Mental Models)**에 이미 존재하는 개념을 활용하여, '삭제'가 곧 '영구 삭제'가 아니라는 **개념의 작동 원리 (Operation)**를 **직관적으로** 이해하게 합니다.     
    
3. **개념의 상태 (State)** 전환: 파일의 **개념의 상태 (State)**를 '접근 가능'에서 '휴지통에 버려짐(trashed)'으로 변화시키고, '복원(Restore)' 액션에 의해 다시 '접근 가능' 상태로 되돌립니다.     
    

---

### 설계적 교훈:

휴지통 개념은 단순한 기능이 아니라, **인간의 실수**라는 도메인의 **본질적 복잡성 (Essential Complexity)**에 대응하여 **사용자 경험 (UX)**을 근본적으로 개선한 **견고한 설계 (Robust Design)**의 대표적인 사례입니다.

---

**Tags:** #MOC #개념기반설계 #핵심개념 #은유 #안전성 #UX #개념의친숙성

**연결 노트:** [[개념 (Concepts)]], [[개념의 친숙성 (Concept Familiarity)]], [[안전성 (Safety)]], [[멘탈 모델 (Mental Models)]], [[견고한 설계 (Robust Design)]], [[MOC_콘셉트로 풀어내는 소프트웨어 디자인]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)