### 정의

**모듈 (Module)**은 소프트웨어 시스템의 특정 부분(Concern)을 캡슐화하는 **자율적인(self-contained)** 구성 요소입니다. 이는 명확하게 정의된 **경계**와 **인터페이스(Interface)**를 가지며, 외부에는 제한적인 기능만을 공개하고 내부 구현은 숨깁니다 (**정보 은닉**).

---

### CBD와의 관계:

- **개념의 구현:** 잘 정의된 **개념 (Concepts)**은 그 자체로 완벽하게 **모듈화된** 구성 요소의 청사진이 됩니다. 각 모듈은 하나의 **핵심 개념**의 논리적 책임을 구현합니다.     
    
- **개념의 구성 (Concept Composition)** 원리를 따름: 모듈 간의 상호작용은 **자유 결합 (Freedom)**이나 **협업 (Cooperation)**과 같은 개념적 관계를 코드 레벨에서 실현합니다.     
    

---

### 핵심 이점:

1. **재사용성 및 모듈성 (Reusability and Modularity)** 극대화: 단일 책임을 갖고 의존성이 낮은 모듈은 다른 시스템이나 맥락에서 쉽게 **재사용**될 수 있습니다.     
    
2. **관심사의 분리 (Separation of Concerns)** 달성: 모듈은 하나의 관심사에 집중하여 **응집도(Cohesion)**를 높이고 모듈 간 **결합도(Coupling)**를 낮춥니다.     
    
3. **복잡성 관리 (Complexity Management)**: 시스템의 복잡성을 관리 가능한 작은 단위로 나누어, 유지보수와 확장을 용이하게 합니다.


---

**Tags:** #MOC #소프트웨어설계 #모듈성 #아키텍처 #정보은닉 #응집도 #결합도

**연결 노트:** [[개념 (Concepts)]], [[개념의 구성 (Concept Composition)]], [[관심사의 분리 (Separation of Concerns)]], [[재사용성 및 모듈성 (Reusability and Modularity)]], [[복잡성 관리 (Complexity Management)]], [[MOC_콘셉트로 풀어내는 소프트웨어 디자인]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)