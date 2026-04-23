### 정의

**UML-온톨로지 매핑**은 [[초기 구조화 (Initial structuring)]] 단계에서 [[UML (Unified Modeling Language)]]을 사용하여 만든 시각적 모델(청사진)을 [[공식화 (Formalization)]] 단계에서 [[OWL (Web Ontology Language)]]의 [[정형적 (Formal)]] 구성요소로 **변환(translating)하는 규칙과 가이드라인**을 의미합니다.

이는 '스케치'를 '코드'로 옮기는 구체적인 번역 지침이며, [[일반적인 함정 (Common pitfalls)]] 중 하나가 바로 이 변환 과정을 잘못 이해하는 것입니다.

주요 매핑 규칙은 다음과 같습니다. 

- UML `Class` → OWL **[[클래스 (Classes)]]**
    
- UML `Generalisation` (일반화) → OWL **[[Subsumption (상속)]]** (`rdfs:subClassOf`)
    
- UML `Association` (연관 관계) → OWL **[[관계 (Relations)]]** (주로 **[[Object Properties]]**)
    
- UML `Object` → OWL **[[개체 (Individuals)]]**
    
- UML `Attribute` (속성) → OWL **[[데이터 속성 (Datatype Properties)]]**

---
**Tags:** #온톨로지 #방법론 #UML #매핑 #초기구조화 #공식화 #변환

**연결 노트:** [[UML (Unified Modeling Language)]], [[초기 구조화 (Initial structuring)]], [[공식화 (Formalization)]], [[클래스 (Classes)]], [[Subsumption (상속)]], [[관계 (Relations)]], [[Object Properties]], [[개체 (Individuals)]], [[Practical Knowledge Modelling-Ontology Development 101]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)