### 정의

관계 (Relation)는 아톰들을 서로 연결하는 구조이다.

- **정의:** 튜플(tuple)들의 집합으로 구성된다.
    
    - 각 튜플은 아톰(atom)들의 순서 있는 시퀀스(sequence)이다.
        
- **표현:** 테이블(table)로 생각할 수 있으며, 각 행(row)이 하나의 튜플에 해당한다.
    
- **특징:**
    
    - **크기 (Size):** 튜플의 개수로, 0을 포함한 모든 크기가 가능하다.
        
    - **애리티 (Arity):** 튜플 내 아톰의 개수, 즉 관계의 열(column) 개수이며 1 이상이어야 한다.
        
        - 애리티가 1이면 **단항 관계(unary relation)**, 즉 아톰들의 집합(set)을 나타낸다.
            
        - 애리티가 2이면 **이항 관계(binary relation)**이다.
            
        - 애리티가 3 이상이면 **다중 관계(multirelation)**라고 한다.
            
- **특별한 경우:**
    
    - **빈 관계 (Empty Relation):** 튜플이 하나도 없는 관계이다.
        
    - **스칼라 (Scalar):** 단 하나의 튜플을 포함하는 단항 관계이며, **싱글톤(singleton) 집합**으로 표현된다.
        
    - **옵션 (Option):** 튜플이 없거나(empty) 스칼라(singleton)인 단항 관계이다.
        

**소프트웨어 추상화에서의 역할:**

- **모든 값은 관계이다(All values are relations):** Alloy에서는 스칼라, 튜플, 집합 모두 관계(relation)로 표현되어 통일성을 제공한다.
    
- **구조 표현:** 아톰의 불변성(immutable)과 관계의 평면성(flat, first-order)이라는 제약에도 불구하고, 관계를 이용해 합성 객체(composite object), 변이(mutation), 시간의 흐름에 따른 구조 등 복잡한 소프트웨어 추상화를 표현할 수 있다.

---
**Tags:** #관계 #아톰 #튜플 #애리티 #관계형모델

**연결 노트:** [[아톰 (Atom)]], [[애리티 (Arity)]], [[조인 연산자 (Join Operator)]], [[MOC_소프트웨어 추상화]]

**작성일:** 2025-10-24

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)에 따라 이용할 수 있습니다.

[hyeyum.people@gmail.com](mailto:hyeyum.people@gmail.com)