### 정의

**단언(Assertion)은 모델링된 시스템이 항상 만족해야 한다고 우리가 **주장(assert)**하는 논리적 명제(logical statement)입니다.**

- 이는 모델의 기본 **제약 조건(constraints)** 외에, 시스템이 올바르게 동작함을 보장하기 위해 사용자가 추가로 확인하고자 하는 **핵심 속성(key properties)**을 나타냅니다.
    
- 즉, **모델이 참이라고 믿는 내용**을 명시적으로 표현한 것입니다.
    

### 소프트웨어 추상화(Alloy)에서의 역할

1. **검증 대상:** Alloy에서는 모델의 기본 제약 조건이 주어지면, **단언**을 사용하여 해당 제약 조건을 충족하는 모든 인스턴스(instances)에서 이 명제가 참인지 거짓인지를 **분석(Analysis)**합니다.
    
2. **불변성(Invariant) 검증:** 단언은 주로 시스템의 **불변성**이나 **안전 속성(safety properties)**을 표현하는 데 사용됩니다. 예를 들어, "이메일 시스템의 모든 메시지는 반드시 발신자와 수신자를 가져야 한다"와 같은 속성을 단언으로 명시합니다.
    
3. **반례 찾기 (Counterexample Finding):** 분석 도구(Alloy Analyzer)는 단언이 거짓이 되는 시스템의 상태, 즉 **반례(counterexample)**를 찾으려고 시도합니다.
    
    - **결과:** 반례를 찾으면, 그것은 모델이나 단언 자체에 **버그**가 있음을 의미합니다. 반례를 찾지 못하면(주어진 범위 내에서), 단언이 모델에 대해 **유효하다**고 간주됩니다.
        

---

**차이점:** 일반적인 **제약 조건(Constraints)**은 모델 자체의 구조를 정의하는 반면, **단언(Assertion)**은 **정의된 모델이 우리가 원하는 속성을 실제로 가지고 있는지 확인**하기 위한 테스트 명제입니다.


---
**Tags:** #단언, #명시, #검증, #속성, #불변성, #Alloy

**연결 노트:** [[명시 (Specification)]], [[논리 (Logic)]], [[분석 (Analysis)]], [[불변성 (Invariant)]], [[MOC_소프트웨어 추상화]]

**작성일:** 2025-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)