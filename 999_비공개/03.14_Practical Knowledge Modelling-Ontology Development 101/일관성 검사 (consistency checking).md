### 정의

**일관성 검사(Consistency Checking)**는 [[OWL 추론(Reasoning)]] 엔진(Reasoner)을 사용하여 온톨로지 내에 **논리적인 모순(contradiction)이 없는지 확인**하는 자동화된 프로세스입니다.

- 온톨로지가 '일관성 없다(inconsistent)'는 것은, 정의된 [[공리 (Axioms)]]와 [[OWL 제한 (Restrictions)]]으로 인해 논리적으로 단 하나의 [[개체 (Individuals)]]도 존재할 수 없음을 의미합니다.
    
- **예시:** `Cat` 클래스가 `Animal`의 하위 클래스(subclass)이면서, 동시에 `Animal`과 '상호 배타적(disjointWith)'이라고 정의된다면 이는 논리적 모순입니다. 추론기는 이러한 모순을 발견하고 경고합니다.
    
- 이 검사는 [[공식화 (Formalization)]] 단계에서 모델을 검증하고, [[평가 (Evaluation)]] 단계에서 [[핵심 평가 질문 (Key Evaluation Questions)]] 중 하나인 "일관성 검사 결과가 예상대로인가?"에 답하기 위해 필수적입니다.
    
- [[Protégé (프로테제 온톨로지 에디터)]]는 HermiT과 같은 내장 추론기를 통해 이 검사를 수행할 수 있습니다.

---
**Tags:** #온톨로지 #추론 #평가 #논리 #오류검출 #Protégé

**연결 노트:** [[평가 (Evaluation)]], [[핵심 평가 질문 (Key Evaluation Questions)]], [[OWL 추론(Reasoning)]], [[공리 (Axioms)]], [[OWL 제한 (Restrictions)]], [[Protégé (프로테제 온톨로지 에디터)]], [[Practical Knowledge Modelling-Ontology Development 101]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)