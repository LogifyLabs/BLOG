### 정의

**수량 제한(Cardinality Restriction)**은 [[OWL 제한 (Restrictions)]]의 한 유형으로, 특정 [[클래스 (Classes)]]의 개체(Individual)가 특정 [[OWL 속성(Properties)]](https://www.google.com/search?q=%EA%B4%80%EA%B3%84)을 **"몇 개나"** 가질 수 있는지를 **정확히(exactly), 최소(min), 또는 최대(max)로** 제한하는 [[공리 (Axioms)]]입니다.

- 이는 [[공식화 (Formalization)]] 단계에서 도메인 지식을 매우 구체적으로 표현할 수 있게 해줍니다.
    
- **예시:** 
    
    - **최소 (min)**: '다색 볼펜(MultiColourBallpointPen)'은 `hasComponent`라는 [[Object Properties]]를 `BallPoint` 클래스와 **최소 2개(min 2)** 가져야 한다.
        
    - **최대 (max)**: '사람(Person)'은 `hasBiologicalMother`를 **최대 1개(max 1)**만 가질 수 있다.
        
    - **정확히 (exactly)**: '자전거(Bicycle)'는 `hasComponent`를 `Wheel` 클래스와 **정확히 2개(exactly 2)** 가져야 한다.
        
- [[OWL 추론(Reasoning)]] 엔진은 이 수량 제한을 사용하여, 예를 들어 `Wheel`을 3개 가진 개체를 `Bicycle` 클래스로 분류하지 않거나, 이미 2개의 `Wheel`을 가진 `Bicycle`에 또 다른 `Wheel`을 추가하려고 하면 논리적 모순(inconsistency)을 경고합니다.

---
**Tags:** #온톨로지 #OWL #제한 #수량제한 #Cardinality #추론 #공식화

**연결 노트:** [[OWL 제한 (Restrictions)]], [[공식화 (Formalization)]], [[Object Properties]], [[데이터 속성 (Datatype Properties)]], [[OWL 추론(Reasoning)]], [[Practical Knowledge Modelling-Ontology Development 101]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)