### 정의

**Asserted Hierarchy(주장된 계층)**와 **Inferred Hierarchy(추론된 계층)**는 [[Protégé (프로테제 온톨로지 에디터)]]에서 [[OWL 추론(Reasoning)]]의 결과를 시각적으로 비교하고 검증하는 핵심 기능입니다.

1. **Asserted Hierarchy (주장된 계층):**
    
    - 온톨로지 개발자가 **수동으로(manually) 정의하고 주장(assert)한** [[클래스 (Classes)]] 계층 구조입니다.
        
    - 이는 [[Subsumption (상속)]] 관계(e.g., `BallpointPen` is a subclass of `Pen`)를 사용자가 직접 명시한 결과입니다.
        
    - 이는 주로 클래스의 [[필요조건 (Necessary Conditions)]](Primitive Class) 정의에 기반합니다.
        
2. **Inferred Hierarchy (추론된 계층):**
    
    - 추론기(Reasoner)가 **논리적 정의([[공리 (Axioms)]], [[OWL 제한 (Restrictions)]])를 바탕으로 자동으로 계산(compute)해낸** [[클래스 (Classes)]] 계층 구조입니다.
        
    - 특히 [[필요충분조건 (Necessary & Sufficient Conditions)]](Defined Class)으로 정의된 클래스들을 분석하여, 사용자가 명시하지 않았더라도 논리적으로 [[Subsumption (상속)]] 관계가 성립하는 클래스들을 찾아내어 재배치합니다. (e.g., 특정 조건을 만족하는 `GoldPlatedPen`을 `DesignerPen`의 하위 클래스로 자동 배치)
        

**활용:** 개발자는 이 두 계층을 비교함으로써, 자신이 [[공식화 (Formalization)]] 단계에서 정의한 논리 규칙들이 의도대로 작동하는지 **검증(verify)**하고 [[평가 (Evaluation)]]할 수 있습니다. (p. 138) 만약 '추론된 계층'이 개발자의 의도와 다르다면, 논리 정의([[공리 (Axioms)]])에 오류가 있음을 의미합니다.

---
**Tags:** #온톨로지 #OWL #추론 #계층 #Protégé #검증 #Asserted #Inferred #Axioms

**연결 노트:** [[OWL 추론(Reasoning)]], [[Protégé (프로테제 온톨로지 에디터)]], [[필요충분조건 (Necessary & Sufficient Conditions)]], [[필요조건 (Necessary Conditions)]], [[클래스 (Classes)]], [[Subsumption (상속)]], [[평가 (Evaluation)]], [[Practical Knowledge Modelling-Ontology Development 101]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)