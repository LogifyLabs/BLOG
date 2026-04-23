### 정의

**'지식 모델(Knowledge Model)'**과 **'지식 베이스(Knowledge Base)'**는 [[지식 모델링 방법론 (A methodology for knowledge modelling)]]에서 구분되는 핵심 개념입니다.

1. **지식 모델 (Knowledge Model) / TBox (Terminological Box):**
    
    - 이는 **'온톨로지'** 자체이며, 지식의 **'청사진(blueprint)', '스키마(schema)', 또는 '구조'**에 해당합니다.
        
    - [[클래스 (Classes)]], [[관계 (Relations)]], 클래스 간의 계층 구조(e.g., [[Subsumption (상속)]]), 그리고 [[공리 (Axioms)]]와 같은 **'개념'과 '규칙'**의 집합입니다.
        
    - 예: "모든 `Person`은 `Human`이다", "`Person`은 `knows`라는 관계를 가질 수 있다."
        
2. **지식 베이스 (Knowledge Base) / ABox (Assertional Box):**
    
    - 이는 지식 모델(온톨로지)이라는 '규칙'을 따르는 **'실제 데이터(data)' 또는 '사실(facts)'**의 집합입니다.
        
    - [[개체 (Individuals)]]와 그 개체들 간의 구체적인 [[관계 (Relations)]] 명제(assertions)들을 저장합니다.
        
    - 예: "`Harry`는 `Person` 클래스의 개체이다", "`Harry` **knows** `Ron`."
        

쉽게 비유하자면, '지식 모델'은 데이터베이스의 **'스키마(테이블 구조)'**이고, '지식 베이스'는 그 스키마에 따라 채워진 **'실제 데이터(테이블의 행)'**입니다. 온톨로지 프로젝트는 이 두 가지를 모두 구축하며, 지식 베이스는 [[지식 베이스 (Knowledge Base)]]의 형태로 구현될 수 있습니다.

---
**Tags:** #온톨로지 #지식베이스 #TBox #ABox #모델 #데이터 #구조 #사실

**연결 노트:** [[지식 모델링 방법론 (A methodology for knowledge modelling)]], [[온톨로지의 핵심 구성요소 (Core Components of Ontology)]], [[클래스 (Classes)]], [[관계 (Relations)]], [[개체 (Individuals)]], [[지식 베이스 (Knowledge Base)]], [[Practical Knowledge Modelling-Ontology Development 101]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)