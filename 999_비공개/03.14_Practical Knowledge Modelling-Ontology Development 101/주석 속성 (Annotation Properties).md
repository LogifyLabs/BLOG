### 정의

**Annotation Properties(주석 속성)**는 [[OWL 속성(Properties)]]의 세 가지 주요 유형 중 하나입니다.

이 속성의 유일한 목적은 온톨로지 요소(e.g., [[클래스 (Classes)]], [[Object Properties]])에 **인간이 읽을 수 있는(human-readable) 메타데이터(metadata)나 주석을 추가**하는 것입니다.

- **예시:**
    
    - `rdfs:label`: '이름'이나 '레이블'을 부여합니다. (e.g., `Person` 클래스에 "사람"이라는 한글 레이블을 추가)
        
    - `rdfs:comment`: '설명'이나 '주석'을 추가합니다. (e.g., `Person` 클래스에 "이 클래스는 살아있는 사람을 나타냅니다."라는 설명을 추가)
        
    - `dc:creator`: '작성자' 정보를 추가합니다.
        
- **중요한 차이점:** [[Object Properties]]나 [[데이터 속성 (Datatype Properties)]]와 달리, Annotation Properties는 온톨로지의 **논리적 의미(semantics)에 어떠한 영향도 미치지 않습니다.**
    
- 즉, [[OWL 추론(Reasoning)]] 엔진은 이 속성들을 완전히 무시합니다. 이 속성들은 오로지 [[Protégé (프로테제 온톨로지 에디터)]]와 같은 도구에서 개발자나 사용자의 이해를 돕기 위해 존재합니다.

---
**Tags:** #온톨로지 #OWL #속성 #주석 #메타데이터 #AnnotationProperties #공식화

**연결 노트:** [[OWL 속성(Properties)]], [[공식화 (Formalization)]], [[클래스 (Classes)]], [[Object Properties]], [[데이터 속성 (Datatype Properties)]], [[Practical Knowledge Modelling-Ontology Development 101]]

**작성일:** 25-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)