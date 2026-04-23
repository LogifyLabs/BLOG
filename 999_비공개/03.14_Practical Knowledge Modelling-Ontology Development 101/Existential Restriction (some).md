### 정의

**존재 제한(Existential Restriction)**, 또는 **'some' 제한**은 [[OWL 제한 (Restrictions)]]의 한 유형입니다. 이는 특정 [[클래스 (Classes)]]의 개체(Individual)가 특정 [[Object Properties]]를 통해 **"적어도 하나(at least one)"**의 **관계**를 맺고 있음을 명시하는 [[공리 (Axioms)]]입니다.

- **의미**: "some" (또는 `someValuesFrom`) 키워드를 사용하여 표현하며, "…에 해당하는 **관계**가 적어도 하나는 _반드시 존재_해야 한다"는 필요조건을 정의합니다.
    
- **예시:** 
    
    - `BallpointPen` 클래스를 정의할 때 `hasComponent` **some** `BallPoint` 라는 제한을 추가할 수 있습니다.
        
    - **해석**: "모든 볼펜(BallpointPen)은, `BallPoint` 클래스에 속하는 어떤 개체를 `hasComponent` **관계**의 대상으로 _적어도 하나 이상_ 가져야 한다."
        
- 이는 [[Universal Restriction (only)]] ("…로만 구성되어야 한다")와는 다릅니다. 'some' 제한은 다른 부품이 _추가로_ 존재하는 것을 막지 않습니다.
    
- 이 제한은 [[OWL 추론(Reasoning)]] 엔진이 클래스를 분류(e.g., [[필요충분조건 (Necessary & Sufficient Conditions)]]의 일부로 사용될 때)하거나 데이터의 일관성을 검사하는 데 사용됩니다.

---
**Tags:** #온톨로지 #OWL #제한 #some #존재제한 #공식화 #추론

**연결 노트:** [[OWL 제한 (Restrictions)]], [[Universal Restriction (only)]], [[공식화 (Formalization)]], [[Object Properties]], [[OWL 추론(Reasoning)]], [[클래스 (Classes)]], [[필요충분조건 (Necessary & Sufficient Conditions)]], [[Practical Knowledge Modelling-Ontology Development 101]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)