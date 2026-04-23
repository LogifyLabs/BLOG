### 정의

**필요충분조건(Necessary & Sufficient Conditions)**은 [[클래스 (Classes)]]를 정의하는 강력한 [[공리 (Axioms)]]입니다. 이는 "A이면 B이고, B이면 A이다" (if and only if, iff)라는 양방향의 논리적 정의를 의미합니다.

- **필요조건 (Necessary):** (Primitive Class)
    
    - 클래스의 '최소한의 조건'을 의미합니다. (e.g., "모든 `BallpointPen`은 _반드시_ `BallPoint`를 **some** `hasComponent`로 가진다.")
        
    - 이것만으로는 `BallPoint`를 가졌다고 해서 `BallpointPen`이라고 단정할 수 없습니다. (단방향 함의)
        
    - Protégé에서 단순 하위 클래스(subclass) 정의는 기본적으로 필요조건입니다.
        
- **필요충분조건 (Necessary & Sufficient):** (Defined Class)
    
    - 클래스가 되기 위한 '유일하고 완전한 정의'를 의미합니다.
        
    - **(필요)** `DesignerPen`은 _반드시_ `Refillable`하고 `Expensive`하다.
        
    - **(충분)** _만약_ 어떤 펜이 `Refillable`하고 `Expensive`하다면, 그것은 _반드시_ `DesignerPen`이다.
        
    - **핵심 역할:** 이것이 바로 **[[OWL 추론(Reasoning)]]** 엔진이 **자동 분류(automatic classification)**를 수행할 수 있게 하는 논리적 기반입니다. (p. 138-141)
        
    - 추론기는 이 정의(충분조건)를 보고, 'Refillable'하고 'Expensive'한 특징을 가진 어떤 개체(Individual) `MyPen`을 우리가 명시적으로 말하지 않았음에도 불구하고 `DesignerPen` 클래스의 멤버로 _자동 추론_해냅니다.

---
**Tags:** #온톨로지 #OWL #추론 #논리 #정의된클래스 #공식화 #Axioms

**연결 노트:** [[OWL 추론(Reasoning)]], [[공리 (Axioms)]], [[공식화 (Formalization)]], [[OWL 제한 (Restrictions)]], [[클래스 (Classes)]], [[Practical Knowledge Modelling-Ontology Development 101]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)