### 정의

**Subsumption(상속)**은 온톨로지에서 **[[클래스 (Classes)]] 간의 계층 구조(hierarchy)를 정의하는 핵심적인 관계**입니다. 이는 "…은 …의 하위 분류이다" (is a subclass of) 또는 "…은 …이다" (is-a) 관계를 의미합니다.

- **예시:** `BallpointPen` **subclassOf** `Pen`.
    
    - 이는 'BallpointPen' 클래스가 'Pen' 클래스에 의해 **'포섭된다(subsumed)'**고 말합니다.
        
    - 논리적으로, "`BallpointPen` 클래스의 모든 [[개체 (Individuals)]]는 _반드시_ `Pen` 클래스의 [[개체 (Individuals)]]이기도 하다"라는 [[필요조건 (Necessary Conditions)]]을 의미합니다.
        
- **[[UML-온톨로지 매핑]]**: 이 관계는 UML의 '일반화(Generalisation)' 관계와 동일합니다.
    
- **[[OWL 추론(Reasoning)]]**: 추론기는 [[필요충분조건 (Necessary & Sufficient Conditions)]]과 같은 [[공리 (Axioms)]]를 바탕으로, 개발자가 명시적으로 정의하지 않은 새로운 Subsumption 관계(상속)를 자동으로 추론해낼 수 있습니다. (e.g., `DesignerPen`이 `Pen`의 하위 클래스임을 자동으로 추론)
    
- 이는 [[Asserted vs Inferred Hierarchy (주장된 vs 추론된 계층)]]를 구성하는 기본 논리입니다.

---
**Tags:** #온톨로지 #클래스 #계층 #상속 #Subsumption #is_a #TBox #OWL

**연결 노트:** [[클래스 (Classes)]], [[UML-온톨로지 매핑]], [[필요조건 (Necessary Conditions)]], [[OWL 추론(Reasoning)]], [[Asserted vs Inferred Hierarchy (주장된 vs 추론된 계층)]], [[Practical Knowledge Modelling-Ontology Development 101]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)