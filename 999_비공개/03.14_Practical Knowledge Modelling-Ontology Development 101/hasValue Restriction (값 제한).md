### 정의

**값 제한(hasValue Restriction)**은 [[OWL 제한 (Restrictions)]]의 한 유형입니다. (p. 130)

이 제한은 특정 [[클래스 (Classes)]]의 개체(Individual)가 특정 속성([[Object Properties]] 또는 [[데이터 속성 (Datatype Properties)]])을 가질 때, 그 속성의 대상(object)이 **특정 클래스(Class)가 아닌, 반드시 '특정한 개체(Specific Individual)'**여야 함을 명시하는 [[공리 (Axioms)]]입니다.

- **차이점:** [[Existential Restriction (some)]]이나 [[Universal Restriction (only)]]가 "어떤 _클래스_의 구성원"(e.g., `BallPoint` 클래스)을 대상으로 하는 것과 달리, `hasValue`는 "이름이 명명된 _특정 개체_" 자체를 값으로 요구합니다.
    
- **예시:** (p. 130)
    
    - '리필 가능한 펜(RefillablePen)' 클래스를 정의할 때, `hasCharacteristic` **value** `Refillable` 이라는 제한을 추가할 수 있습니다.
        
    - **해석:** (여기서 `Refillable`은 '특성(Characteristic)' 클래스의 특정 **개체**라고 가정합니다.) "모든 'RefillablePen'은 `hasCharacteristic` 속성의 대상으로 _반드시 'Refillable'이라는 이름의 특정 개체_를 가져야 한다."
        
- **활용:** [[OWL 추론(Reasoning)]] 엔진은 이 제한을 사용하여, `Refillable` 특성을 가진 펜들을 자동으로 `RefillablePen` 클래스로 분류(classification)하는 데 사용할 수 있습니다 (e.g., [[필요충분조건 (Necessary & Sufficient Conditions)]]의 일부로 사용될 때).

---
**Tags:** #온톨로지 #OWL #제한 #hasValue #값제한 #공식화 #Axioms #개체

**연결 노트:** [[OWL 제한 (Restrictions)]], [[공식화 (Formalization)]], [[개체 (Individuals)]], [[공리 (Axioms)]], [[Existential Restriction (some)]], [[Universal Restriction (only)]], [[OWL 추론(Reasoning)]], [[Practical Knowledge Modelling-Ontology Development 101]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)