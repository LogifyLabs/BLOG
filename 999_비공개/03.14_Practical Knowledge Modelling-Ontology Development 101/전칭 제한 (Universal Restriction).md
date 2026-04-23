### 정의

**전칭 제한(Universal Restriction)**, 또는 **'only' 제한**은 [[OWL 제한 (Restrictions)]]의 한 유형입니다. 

이는 특정 [[클래스 (Classes)]]의 개체(Individual)가 특정 [[Object Properties]] `관계`를 가질 경우, 그 `관계`의 대상(object)이 **"오직(only)" 명시된 클래스(들)의 구성원이어야만 한다**고 제한하는 [[공리 (Axioms)]]입니다.

- **의미**: "only" (또는 `allValuesFrom`) 키워드를 사용합니다.
    
- **주의할 점**: 이 제한은 [[Existential Restriction (some)]]과 다릅니다. 'only' 제한은 해당 **`관계`**가 "적어도 하나 존재해야 한다"고 _요구하지 않습니다_. 단지, **"만약 그 `관계`가 존재한다면, 그 대상은 _반드시_ 이 목록 안에 있어야 한다"**는 '경계'를 설정합니다.
    
- **예시:** (p. 131)
    
    - `BicCristal` 클래스를 정의할 때 `hasComponent` **only** (`Ballpoint` or `Cap` or `InkReservoir` or `Body`) 라는 제한을 추가할 수 있습니다.
        
    - **해석**: "모든 `BicCristal` 펜은, `hasComponent` **`관계`**를 _가진다면_, 그 대상은 _오직_ `Ballpoint`, `Cap`, `InkReservoir`, `Body` 클래스 중 하나여야 한다."
        
    - 만약 어떤 `BicCristal` 펜이 이 목록에 없는 `Clip`을 `hasComponent`로 가진다고 정의되면, [[OWL 추론(Reasoning)]] 엔진은 이를 논리적 **모순(inconsistency)**으로 감지합니다.
        
- 'some'과 'only'는 종종 함께 사용됩니다. (e.g., "적어도 하나의 `Ballpoint`를 가져야 하며, 모든 부품은 `Ballpoint`, `Cap`... 중 하나여야 한다.")

---
**Tags:** #온톨로지 #OWL #제한 #only #전칭제한 #공식화 #Axioms #추론

**연결 노트:** [[OWL 제한 (Restrictions)]], [[Existential Restriction (some)]], [[공식화 (Formalization)]], [[Object Properties]], [[OWL 추론(Reasoning)]], [[클래스 (Classes)]], [[Practical Knowledge Modelling-Ontology Development 101]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)