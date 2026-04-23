### 정의

**필요조건(Necessary Conditions)**은 [[클래스 (Classes)]]를 정의하는 가장 기본적인 [[공리 (Axioms)]]로, **"A이면 B이다"**라는 **단방향의 논리(one-way implication)**를 의미합니다.

- **Protégé의 기본값:** [[Protégé (프로테제 온톨로지 에디터)]]에서 어떤 클래스를 다른 클래스의 하위 클래스(e.g., `BallpointPen` **subclassOf** `Pen`)로 정의하면, 이는 기본적으로 '필요조건'으로 설정됩니다. (p.138)
    
- **의미:** "모든 `BallpointPen`은 _반드시_ `Pen`이어야 한다"는 필요조건을 명시합니다.
    
- **한계 (Sufficient하지 않음):** 하지만 그 역은 성립하지 않습니다. 즉, "어떤 것이 `Pen`이라고 해서 그것이 _반드시_ `BallpointPen`인 것은 아닙니다."
    
- **추론에 미치는 영향:**
    
    - [[OWL 추론(Reasoning)]] 엔진은 이 조건만으로는 자동 분류(automatic classification)를 수행할 수 없습니다. 어떤 개체(Individual)가 `Pen`의 속성을 모두 만족한다고 해서, 그것을 `BallpointPen`으로 자동 분류해주지 않습니다.
        
    - [[Asserted vs Inferred Hierarchy (주장된 vs 추론된 계층)]]에서, 개발자가 수동으로 정의하는 **'주장된 계층(Asserted Hierarchy)'**이 바로 이 필요조건에 기반한 계층입니다.
        
- **구분:** 이는 클래스의 '완전한 정의'를 의미하여 자동 분류를 가능하게 하는 **[[필요충분조건 (Necessary & Sufficient Conditions)]]**(Defined Class)과 명확히 구분됩니다.

---
**Tags:** #온톨로지 #OWL #논리 #필요조건 #PrimitiveClass #Axioms #Asserted

**연결 노트:** [[필요충분조건 (Necessary & Sufficient Conditions)]], [[OWL 추론(Reasoning)]], [[클래스 (Classes)]], [[Subsumption (상속)]], [[Asserted vs Inferred Hierarchy (주장된 vs 추론된 계층)]], [[공리 (Axioms)]], [[Practical Knowledge Modelling-Ontology Development 101]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)