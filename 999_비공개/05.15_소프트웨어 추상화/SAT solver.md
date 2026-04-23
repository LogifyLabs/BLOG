### 정의

**SAT 솔버(Satisfiability Solver)는 주어진 **부울 논리식(Boolean Formula)**을 **만족시키는(Satisfy)** 변수들의 값 할당(Assignment)이 존재하는지 여부를 판별하고, 존재한다면 그 할당을 찾아내는 **자동화된 컴퓨터 프로그램(알고리즘)**입니다.**

- SAT는 **만족성 문제(Satisfiability Problem)**의 약자이며, 컴퓨터 과학에서 가장 근본적인 **NP-완전(NP-Complete)** 문제 중 하나입니다.
    

### 소프트웨어 추상화(Alloy)에서의 역할

1. **분석의 엔진:**
    
    - SAT 솔버는 **알로이 분석기(Alloy Analyzer)**의 **핵심 엔진**입니다. Alloy 모델의 모든 **관계형 논리(Relational Logic)** 제약 조건(Fact, Predicate, Assertion)은 내부적으로 **유한 범위(Scope)** 내에서 거대한 **부울 논리식**으로 변환됩니다.
        
2. **인스턴스 찾기:**
    
    - **인스턴스 찾기(Instance Finding)** 문제는 이 변환된 부울 논리식을 SAT 솔버가 풀어 해(Solution)를 찾는 과정과 동일합니다.
        
    - 솔버가 **해(Solution)**를 찾으면, 그것은 모델의 제약 조건을 만족하는 **유효한 인스턴스(Instance)**가 되며, 솔버가 해를 찾지 못하면 모델은 **불만족(Unsatisfiable)** 상태로 간주됩니다.
        
3. **반례 발견:**
    
    - **단언(Assertion)**을 검증할 때, 분석기는 **'모델은 참이지만 단언은 거짓인'** 부울 논리식을 생성합니다. SAT 솔버가 이 식을 만족시키는 해를 찾으면, 그 해가 곧 **반례(Counterexample)**가 됩니다.
        

---

**의의:** SAT 솔버의 발전 덕분에, 원래 복잡했던 **일차 논리** 기반의 검증 문제가 **고도로 최적화된** 알고리즘을 통해 효율적으로 해결될 수 있게 되었습니다. 이는 **완전 자동화된 분석**을 실용화하는 결정적인 기술입니다.


---
**Tags:** #SAT솔버, #부울논리, #자동화분석, #알로이분석기, #NP완전, #문제해결

**연결 노트:** [[알로이 분석기 (Alloy Analyzer)]], [[인스턴스 찾기 (Instance Finding)]], [[완전 자동화된 분석 (Fully Automatic Analysis)]], [[논리 (Logic)]], [[MOC_소프트웨어 추상화]]

**작성일:** 2025-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)