### 정의

**복잡성(Complexity)은 시스템이나 모델의 구조가 **이해하거나 분석하기 어려울** 정도로 많은 요소와 관계를 포함하고 있는 상태입니다.**

- 이는 모델링을 방해하는 주요 요소이며, **단순성(Simplicity)**의 대척점에 있습니다.
    
- 복잡성은 시스템 자체의 **본질적인 복잡성(inherent complexity)**과, 시스템을 표현하는 모델의 **우발적인 복잡성(accidental complexity)**으로 나눌 수 있습니다.
    

### 소프트웨어 추상화에서의 복잡성 문제

1. **이해의 어려움:** 복잡한 모델은 많은 **관계(Relation)**와 **제약 조건(Constraints)**을 포함하므로, 사람이 그 전체 구조와 의미를 한눈에 파악하고 오류를 찾는 것이 어려워집니다.
    
2. **분석의 비효율성 (Intractability):** 복잡성은 형식적 분석 도구(예: Alloy Analyzer)의 **성능**을 저하시킵니다.
    
    - 제약 조건이 너무 많거나 복잡하면, 분석기가 유효한 **인스턴스**나 **반례(Counterexample)**를 찾는 데 걸리는 시간이 기하급수적으로 늘어나거나 아예 불가능해집니다.
        
    - 특히 **전이 폐포($^*$)**나 **곱하기($\times$)**와 같은 복잡한 연산이 많을 때 분석이 어려워집니다.
        
3. **우발적 복잡성 최소화:** Software Abstractions의 주요 목표는 복잡한 시스템을 **단순한(Simple) 관계형 논리**로 모델링하여, **우발적인 복잡성**을 최소화하고 본질적인 문제에만 집중할 수 있도록 하는 것입니다.
    

---

**해결 전략:** 복잡성에 대응하기 위해 **추상화(Abstraction)**를 사용하여 불필요한 세부 사항을 제거하고, **모듈 시스템(Module System)**을 사용하여 전체 모델을 관리 가능한 독립적인 단위로 분할합니다.



---
**Tags:** #복잡성, #단순성, #추상화, #모델링, #분석

**연결 노트:** [[단순한 (Simple)]], [[추상화 (Abstraction)]], [[분석 (Analysis)]], [[관계형 논리 (Relational Logic)]], [[MOC_소프트웨어 추상화]]

**작성일:** 2025-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)