# 🧠 MOC: Mathematical Foundations for AI

> [!abstract] **Knowledge Base Overview**
> 
> - **목적:** 인공지능 엔지니어링을 위한 수학적 제반 지식(Mathematical Prerequisites)의 체계적 정리 및 구현.
>     
> - **방법론:**
>     
>     1. **Logic (Why):** [Ted Sundstrom](https://www.tedsundstrom.com/)의 수리 논리학을 통한 알고리듬 타당성 검증.
>         
>     2. **Code (How):** Python(`numpy`, `torch`)을 활용한 수리적 개념의 실전 구현.
> - Tags: #math #AI #MachineLearning 
>    
>> [!tip] Editor's Note
>> 이 문서는 지속적으로 업데이트되는 Living Document입니다. 이론적 증명(Logic)과 코드 구현(Implementation)이 상호 참조(Cross-referenced)되어 있습니다.

## 🔗 Reference Materials (Source MOCs)

> _본 지식 베이스를 구축하기 위해 참조한 원천 소스입니다._

- 📕 **Mathematical Reasoning:** [[MOC_Mathematical Reasoning (AI Engineer Edition)]]
    
    - _Source:_ _Mathematical Reasoning: Writing and Proof (Version 3)_ by Ted Sundstrom
        
- 🟦 **Linear Algebra for Machine Learning:** [[MOC_Linear Algebra (freeCodeCamp)]]
    
    - _Source:_ freeCodeCamp Linear Algebra Course (Python)
        
- 🟥 **Calculus for Machine Learning:** [[MOC_College Calculus – Full Course with Python Code]]
    
    - _Source:_ freeCodeCamp College Calculus
---

## 🏗️ Knowledge Structure (Topic Integration)

### 1. 논리와 데이터의 정의 (Logic & Set Theory)

> _Abstract: 데이터의 유효성을 정의하고, 조건 논리를 통해 알고리듬의 흐름을 제어합니다._

- **Prepositional Logic (명제 논리)**
    
    - [[1.1 Statements and Conditional Statements]] : 제어 흐름(`Control Flow`)과 불리언 대수(`Boolean Algebra`).
        
    - [[2.4 Quantifiers and Negations]] : 손실 함수의 전제 조건($\forall$ vs $\exists$) 및 예외 처리 로직.
        
- **Set Theory (집합론)**
    
    - [[5.1 Sets and Operations on Sets]] : 관계형 데이터베이스(SQL)의 Join 연산 및 필터링 원리.
        
    - [[5.5 Indexed Families of Sets]] : **(Core)** 텐서(Tensor) 연산과 배치(Batch) 데이터의 수학적 표기법 $\{x_i\}_{i \in I}$.
        
- **Implementation Notes**
    
    - (예: [[Python Set을 활용한 데이터 중복 제거와 교집합 연산]])
        

### 2. 벡터 공간과 선형 변환 (Linear Algebra)

> _Abstract: 데이터를 고차원 벡터 공간에 매핑하고, 선형 변환을 통해 특징(Feature)을 추출합니다._

- **Vector Space & Operations (벡터 공간과 연산)**
    
    - [[Vector & Matrix Operations]] : `numpy.dot`, `Broadcasting`의 기하학적 의미.
        
    - [[7.2 Equivalence Relations]] : 벡터의 차원(Dimension) 일치와 데이터의 동치 관계.
        
- **Linear Mapping (선형 사상)**
    
    - [[Linear Transformations]] : 행렬 곱셈을 통한 공간의 회전, 확대, 축소.
        
    - [[6.1 Introduction to Functions]] : 행렬을 '벡터를 입력받아 벡터를 출력하는 함수'로 해석.
        
- **Implementation Notes**
    
    - (예: [[이미지 데이터의 행렬 변환과 차원 축소]])
        

### 3. 최적화와 학습 알고리듬 (Calculus & Optimization)

> _Abstract: 손실 함수(Loss Function)의 변화율을 분석하여 모델 파라미터를 최적화합니다._

- **Differentiation (미분)**
    
    - [[Derivative & Gradient]] : 다변수 함수의 기울기(Gradient) 벡터와 학습의 방향성.
        
    - [[3.1 Direct Proofs]] : 임계점(Critical Point)에서의 미분계수가 0이 되는 원리 증명.
        
- **Optimization Algorithms (최적화 알고리듬)**
    
    - [[Gradient Descent (경사하강법)]] : 파라미터 업데이트 규칙($\theta := \theta - \alpha \nabla J$)의 구현.
        
    - [[4.1 The Principle of Mathematical Induction]] : 반복적(Iterative) 알고리듬의 수렴성(Convergence) 보장.
        
- **Implementation Notes**
    
    - (예: [[Autograd를 이용한 자동 미분 구현]])
        

### 4. 신경망의 함수적 구조 (Functional Architecture)

> _Abstract: 복잡한 비선형 관계를 모델링하기 위해 함수를 계층적(Layer-wise)으로 구성합니다._

- **Composition & Layers (합성함수와 계층)**
    
    - [[6.4 Composition of Functions]] : 심층 신경망(DNN)의 Layer Stacking 원리 ($f \circ g$).
        
    - [[6.5 Inverse Functions]] : 활성화 함수(Activation Function)와 역전파(Backpropagation)의 관계.
        
- **Mapping Properties (사상의 성질)**
    
    - [[6.1 Introduction to Functions]] : 입력층(Domain)과 출력층(Codomain)의 차원 정의.
        
    - [[6.3 Injections, Surjections, and Bijections]] : 오토인코더(Autoencoder)의 정보 압축과 손실(Lossy Compression).
        
- **Implementation Notes**
    
    - (예: [[Softmax 함수와 확률 분포의 매핑]])
        

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>에 따라 이용할 수 있습니다.

[hyeyum@humanartmuseum.com](mailto:hyeyum@humanartmuseum.com)