### 정의

**OWL 제한(Restrictions)**은 [[OWL (Web Ontology Language)]]에서 [[클래스 (Classes)]]를 정의(define)하는 **매우 강력하고 핵심적인 방법**입니다. (p. 128)

이는 [[공리 (Axioms)]]의 한 형태로, 특정 클래스의 개체(Individuals)들이 **[[OWL 속성(Properties)]]을 어떻게 사용해야 하는지에 대한 제약 조건**을 명시합니다. 단순히 "이런 관계를 가질 수 있다"가 아니라, "이 관계를 _반드시_ 가지거나", "이 관계를 _특정 대상_하고만 가지거나", "이 관계를 _몇 개_ 가져야 한다"고 제한합니다.

이러한 제한은 [[필요충분조건 (Necessary & Sufficient Conditions)]]과 결합될 때 [[OWL 추론(Reasoning)]] 엔진이 자동으로 클래스를 분류(classification)하는 핵심 근거가 됩니다.

주요 제한 유형은 다음과 같습니다.

- **Quantifier Restrictions (수량 한정자):**
    
    - **[[Existential Restriction (some)]]**: 속성의 대상이 "적어도 하나 존재"해야 함을 명시합니다.
        
    - **[[Universal Restriction (only)]]**: 속성의 대상이 "오직 명시된 대상"으로만 구성되어야 함을 명시합니다.
        
- **Value Restriction (값 제한):**
    
    - **[[hasValue Restriction (값 제한)]]**: 속성의 대상이 "특정 개체(Individual)"여야 함을 명시합니다.
        
- **Cardinality Restriction (수량 제한):**
    
    - **[[Cardinality Restriction (수량 제한)]]**: 속성의 대상 개수를 "정확히(exactly), 최소(min), 또는 최대(max)"로 제한합니다.

---
**ags:** #온톨로지 #OWL #제한 #Restrictions #MOC #공식화 #추론 #Axioms

**연결 노트:** [[공식화 (Formalization)]], [[OWL (Web Ontology Language)]], [[공리 (Axioms)]], [[클래스 (Classes)]], [[OWL 추론(Reasoning)]], [[Object Properties]], [[데이터 속성 (Datatype Properties)]], [[Existential Restriction (some)]], [[Universal Restriction (only)]], [[Cardinality Restriction (수량 제한)]], [[hasValue Restriction (값 제한)]], [[Practical Knowledge Modelling-Ontology Development 101]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)