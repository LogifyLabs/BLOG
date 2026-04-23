![[hume3527_httpss.mj.runtxNoB96vUF0_minimal_--ar_169_--v_6_ffeee633-29bb-426e-8e28-85c59c3b9c5a_0.png]]

> [!summary] 프로젝트 개요
> Concept-based Design, 온톨로지 모델링, 술어논리를 활용하여 실무 시스템을 설계하고, 실제 작동하는 파이썬 코드로 구현한 학습 프로젝트입니다.

**프로젝트 정보:**
- 시작일: 2025-10-30
- 최종 수정: 2025-11-03
- 상태: 🟡 진행 중
- 태그: #프로젝트 #온톨로지 #형식명세화 #소프트웨어디자인 #ConceptDesign

---

## 배경

복잡한 실무 시스템을 설계할 때, 요구사항의 모호함은 버그와 유지보수 비용 증가로 이어집니다. 본 프로젝트는 **Concept-based Design**, **온톨로지 모델링**, **형식 명세(Formal Specification)**를 통합하여 이러한 모호함을 제거하고, 검증 가능한 시스템 설계 방법을 제시합니다.


### 목표
* **Concept-based Design으로 핵심 개념 식별 및 정의**
* **온톨로지 모델링을 통한 도메인 명확화**
* 형식 명세로 불변조건 정의 및 검증
* 이론과 실무의 연결
* 실제 작동하는 코드로 실용성 증명

---

## 프로젝트 구성

### 3개 케이스 전략

**Case 1: RBAC (기초) ⭐**
- Concept 설계 기본 능력 증명
- 온톨로지 모델링 기초
- 간단하지만 명확한 구조

**Case 2: 개인 웰빙 추적 시스템 (핵심) ⭐⭐⭐⭐**
- 복잡한 Concept 조합
- 시간적 관계, 패턴 추론, 맞춤 추천
- 실용성과 차별화 모두 확보

**Case 3: API Rate Limiter (응용) ⭐⭐**
- 실무 시스템 설계 능력 증명
- 시간 제약 및 분산 환경 고려

---

## Case 1: Document Access Control (RBAC) ⭐

### 주제
역할 기반 접근 제어 (Role-Based Access Control)

### 설명
문서에 대한 사용자 권한을 체계적으로 관리하는 시스템입니다. 보안이 중요한 실무 환경에서 널리 사용되는 패턴을 Concept-based Design과 온톨로지로 명확하게 정의합니다.

---

### 1단계: Concept 설계

**Concept: RoleBasedAccess**

**Purpose (목적):**
문서에 대한 접근을 역할 기반으로 제어하여, 권한 관리를 단순화하고 보안을 강화한다.

**State (상태):**
```

users: set User roles: set Role permissions: set Permission documents: set Document

userRoles: User → set Role rolePermissions: Role → set Permission

```

**Operations (연산):**

**assignRole(u: User, r: Role)**
```

Precondition: u ∈ users ∧ r ∈ roles Postcondition: r ∈ userRoles(u)'

```

**grantPermission(r: Role, p: Permission)**
```

Precondition: r ∈ roles ∧ p ∈ permissions Postcondition: p ∈ rolePermissions(r)'

```

**checkAccess(u: User, d: Document, p: Permission): Boolean**
```

Returns: ∃r (r ∈ userRoles(u) ∧ p ∈ rolePermissions(r))

```

**Invariants (불변조건):**
```

∀u ∀d (canWrite(u, d) → canRead(u, d))

````
"쓰기 권한이 있으면 읽기 권한도 반드시 존재함"

---

### 2단계: 온톨로지 모델

**핵심 클래스:**
```turtle
Class: User
  SubClassOf: Actor
  Comment: "시스템을 사용하는 주체"

Class: Role
  SubClassOf: owl:Thing
  Comment: "사용자에게 부여되는 역할 (예: Editor, Viewer)"

Class: Permission
  SubClassOf: owl:Thing
  Comment: "특정 작업에 대한 권한 (예: Read, Write)"

Class: Document
  SubClassOf: Resource
  Comment: "접근 제어 대상 자원"
````

**주요 속성:**

```turtle
ObjectProperty: hasRole
  Domain: User
  Range: Role
  Comment: "사용자가 가진 역할"

ObjectProperty: hasPermission
  Domain: Role
  Range: Permission
  Comment: "역할에 부여된 권한"

ObjectProperty: canAccess
  Domain: User
  Range: Document
  Comment: "사용자가 접근 가능한 문서"
```

**추론 규칙:**

```
Rule 1: 권한 상속
(User hasRole Editor) ∧ (Editor hasPermission Write)
→ (User hasPermission Write)

Rule 2: 권한 계층
(canWrite → canRead) ∧ (canAdmin → canWrite)
→ (canAdmin → canRead)
```

---

### 3단계: 형식 명세 (술어논리)

**불변조건:**

```
∀u ∈ User, ∀d ∈ Document, ∀r ∈ Role
  (hasRole(u, r) ∧ hasPermission(r, Write) ∧ appliesTo(r, d))
  → canRead(u, d)
```

**전제조건 (assignRole):**

```
∀u ∀r (assignRole(u, r) → u ∈ users ∧ r ∈ roles)
```

**후치조건 (assignRole):**

```
∀u ∀r (assignRole(u, r) → r ∈ userRoles(u)')
```

---

### 다루는 개념

- Concept의 Purpose/State/Operations 정의
- 권한 계층 구조
- 역할 기반 추상화
- 보안 제약 조건
- 온톨로지 기본 설계

**예상 소요 시간:** 1-2주

---

## Case 2: 개인 웰빙 추적 시스템 ⭐⭐⭐⭐

### 주제

일상 활동과 컨디션 패턴 분석을 통한 개인화 웰빙 관리

### 설명

개인의 일상 활동(운동, 업무, 휴식 등)과 컨디션 상태 간의 관계를 Concept-based Design과 온톨로지로 모델링하여, 긍정적 패턴을 발견하고 맞춤형 추천을 제공하는 시스템입니다. 
건강한 생활 습관 형성과 일상 최적화에 실용적으로 활용할 수 있습니다.

---

### 1단계: Concept 설계

**Concept: WellbeingTracker**

Purpose (목적):

개인의 일상 활동과 컨디션을 추적하여,

긍정적 패턴을 발견하고 맞춤형 생활 습관 조언을 제공한다.

**State (상태):**

```
person: Person
activities: seq Activity
conditions: seq ConditionState
patterns: set BehaviorPattern
recommendations: set Recommendation

activityConditionMap: Activity → ConditionState
patternConfidence: BehaviorPattern → Float [0.0-1.0]
```

**Operations (연산):**

**logActivity(a: Activity, timestamp: DateTime)**

```
Precondition: 
  timestamp > last(activities).timestamp

Postcondition: 
  activities' = activities + [a]
  |activities'| = |activities| + 1
```

**recordCondition(c: ConditionState, intensity: Int)**

```
Precondition: 
  1 ≤ intensity ≤ 10

Postcondition: 
  conditions' = conditions + [c]
  c.intensity ∈ [1, 10]
```

**analyzePattern(): set BehaviorPattern**

```
Returns: 
  {p | correlation(activities, conditions, p) > 0.7 ∧ 
       repeated(p) ≥ 3 ∧
       consistent(p)}
```

**suggestRecommendation(p: BehaviorPattern): Recommendation**

```
Precondition: 
  p ∈ patterns ∧ 
  p is UnhealthyPattern

Returns: 
  r where improves(r, p) ∧ 
         alignsWith(r, person.preferences)
```

**Invariants (불변조건):**

```
# 시간적 일관성
∀i ∈ [0, |activities|-1] 
  (activities[i].timestamp < activities[i+1].timestamp)

# 컨디션 강도 범위
∀c ∈ conditions (1 ≤ c.intensity ≤ 10)

# 패턴-추천 연결성
|patterns| > 0 → |recommendations| > 0

# 상관관계 신뢰도
∀p ∈ patterns (patternConfidence(p) > 0.6)
```

---

### 2단계: 온톨로지 모델

**핵심 클래스 (9개):**


```
# 주체
Class: Person
  hasGoal: Goal
  tracksDailyLog: DailyLog
  Comment: "웰빙을 추적하는 개인"

# 활동 계층
Class: Activity
  SubClassOf: DailyEvent
  Comment: "개인이 수행하는 일상 활동"

Class: Exercise
  SubClassOf: Activity
  Examples: [Walking, Running, Yoga]

Class: WorkActivity
  SubClassOf: Activity
  Examples: [Coding, Meeting, Planning]

Class: SocialActivity
  SubClassOf: Activity
  Examples: [Conversation, Gathering]

Class: RestActivity
  SubClassOf: Activity
  Examples: [Sleep, Meditation, Reading]

# 컨디션 상태
Class: ConditionState
  SubClassOf: WellbeingState
  hasIntensity: xsd:integer [1-10]
  Comment: "개인의 전반적 컨디션 상태"

Class: PositiveCondition
  SubClassOf: ConditionState
  Examples: [Energetic, Focused, Relaxed]
  Comment: "긍정적 컨디션"

Class: NegativeCondition
  SubClassOf: ConditionState
  Examples: [Tired, Unfocused, Tense]
  Comment: "부정적 컨디션"

# 패턴
Class: BehaviorPattern
  identifiedBy: PatternRecognitionEngine
  basedOn: [Activity, ConditionState, TimeOfDay]

Class: HealthyPattern
  SubClassOf: BehaviorPattern
  Comment: "긍정적 결과로 이어지는 행동 패턴"

Class: UnhealthyPattern
  SubClassOf: BehaviorPattern
  Comment: "부정적 결과로 이어지는 행동 패턴"

# 추천
Class: PersonalizedRecommendation
  targetsPerson: Person
  basedOnPattern: BehaviorPattern
  confidence: xsd:float [0.0-1.0]
```

**주요 속성 (8개):**


```
# 활동 관련
ObjectProperty: performs
  Domain: Person
  Range: Activity
  Comment: "개인이 수행한 활동"

DataProperty: performedAt
  Domain: Activity
  Range: xsd:dateTime
  Comment: "활동 수행 시간"

DataProperty: duration
  Domain: Activity
  Range: xsd:duration
  Comment: "활동 지속 시간"

# 컨디션 관련 
ObjectProperty: experiencesCondition 
  Domain: Person 
  Range: ConditionState 
  Comment: "개인이 경험한 컨디션 상태" 

DataProperty: conditionIntensity 
  Domain: ConditionState 
  Range: xsd:integer 
  Comment: "컨디션 강도 (1-10)"

# 패턴 분석
ObjectProperty: correlatesWith
  Domain: Activity
  Range: ConditionState
  hasStrength: xsd:float
  Comment: "활동과 컨디션 간 상관관계"

ObjectProperty: triggeredBy
  Domain: ConditionState
  Range: Activity
  Comment: "특정 컨디션을 유발하는 활동"

ObjectProperty: improvesBy
  Domain: ConditionState
  Range: Activity
  Comment: "특정 활동으로 개선되는 컨디션"

# 추천
ObjectProperty: suggests
  Domain: System
  Range: PersonalizedRecommendation
  Comment: "시스템이 제안하는 맞춤 추천"
```

**추론 규칙 (6개):**

```
Rule 1: 긍정적 상관관계 발견
(Person performs Exercise) ∧
(Person experiencesCondition PositiveCondition afterwards) ∧
(repeated 3+ times)
→ (Exercise positivelyCorrelatesWith PositiveCondition for Person)

Rule 2: 부정적 트리거 식별
(Activity A performed) ∧
(NegativeCondition experienced afterwards) ∧
(correlation > 0.6) ∧ (repeated 3+ times)
→ (A is NegativeTrigger for Person)

Rule 3: 시간대별 패턴
(Activity A performed in TimeWindow T) ∧
(consistently leads to PositiveCondition)
→ (A is OptimalIn T for Person)

Rule 4: 개인화 추천 생성
(Person exhibits UnhealthyPattern P) ∧
(Activity A known to improve P) ∧
(A aligns with Person's preferences)
→ recommend(A to Person, confidence: high)

Rule 5: 복합 패턴 분석
(Activity A correlatesWith PositiveCondition) ∧
(Activity B correlatesWith PositiveCondition) ∧
(A and B performed together → stronger effect)
→ suggest(combine A and B)

Rule 6: 데이터 일관성 검증
∀log (log.timestamp > previous_log.timestamp)
∀condition (0 < condition.intensity ≤ 10)
```

---

### 3단계: 형식 명세 (술어논리)

**불변조건 1: 시간적 순서**

```
∀i ∈ [0, n-1], activities[i].timestamp < activities[i+1].timestamp
```

**불변조건 2: 컨디션 강도 범위**

```
∀c ∈ conditions (1 ≤ c.intensity ≤ 10)
```

**불변조건 3: 패턴 신뢰도**

```
∀p ∈ patterns, 
  (count(supports(p)) ≥ 3) ∧ 
  (correlation(p) > 0.7) → 
  p ∈ validPatterns
```

**전제조건 (logActivity):**

```
∀a, t (logActivity(a, t) → 
  (a ∈ Activity) ∧ 
  (t > last(activities).timestamp))
```

**후치조건 (analyzePattern):**

```
∀p ∈ analyzePattern().result → 
  (repeated(p) ≥ 3) ∧ 
  (confidence(p) > 0.6)
```

---

### 다루는 개념

- **복잡한 Concept 설계** (다중 상태, 시퀀스 관리)
    
- **복잡한 계층 구조** (활동 분류, 컨디션 유형)
    
- **시간적 관계 모델링** (활동 순서, 시간대 패턴)
    
- **상관관계 분석** (활동-컨디션 연결)
    
- **패턴 인식 및 추론** (개인별 행동 패턴)
    
- **맞춤형 추천 시스템** (개인화 알고리즘)
    
- **데이터 무결성 제약** (시간 순서, 강도 범위)
    

### 실용적 가치

- **생산성 저하 예방**: 부정적 패턴 조기 발견
    
- **라이프스타일 최적화**: 데이터 기반 일상 개선
    
- **개인화**: 각자의 생활 리듬에 맞는 맞춤 전략
    
- **확장 가능**: 수면, 운동, 영양, 생산성 등 다양한 영역으로 확장
    

### 기술적 도전

- 시간 시계열 데이터 처리
    
- 개인별 상관관계 계산
    
- 추천 신뢰도 산정
    
- 프라이버시 고려 설계
    

**예상 소요 시간:** 3-4주



---

## Case 3: API Rate Limiter ⭐⭐

### 주제

시간 기반 API 요청 제한

### 설명

API 호출 빈도를 제한하여 서비스를 과부하로부터 보호하는 시스템입니다. Stripe, GitHub 등 주요 API 서비스에서 사용하는 핵심 패턴을 구현합니다.

---

### 1단계: Concept 설계

**Concept: RateLimiter**

**Purpose (목적):** API 호출 빈도를 제한하여 서비스를 과부하와 악의적 사용으로부터 보호한다.

**State (상태):**

```
clients: set Client
requests: seq Request
limits: Client → RateLimit
windows: Client → TimeWindow

currentCount: Client × TimeWindow → Integer
```

**Operations (연산):**

**makeRequest(c: Client, r: Request): Boolean**

```
Precondition: 
  c ∈ clients

Returns: 
  currentCount(c, currentWindow) < limits(c).maxRequests

Postcondition: 
  if allowed:
    requests' = requests + [r]
    currentCount' = currentCount + 1
```

**checkLimit(c: Client): Boolean**

```
Returns: 
  currentCount(c, currentWindow) < limits(c).maxRequests
```

**resetWindow(c: Client)**

```
Precondition: 
  currentTime - window(c).startTime ≥ window(c).duration

Postcondition: 
  currentCount(c, newWindow) = 0
  window(c)' = newWindow
```

**Invariants (불변조건):**

```
∀c ∈ clients, ∀w ∈ TimeWindow
  (requestCount(c, w) ≤ limits(c).maxRequests)
```

---

### 2단계: 온톨로지 모델

**핵심 클래스:**

```turtle
Class: Client
  hasRateLimit: RateLimit
  hasAPIKey: xsd:string
  Comment: "API를 사용하는 클라이언트"

Class: APIRequest
  timestamp: xsd:dateTime
  endpoint: xsd:string
  Comment: "클라이언트의 API 호출"

Class: RateLimit
  maxRequests: xsd:integer
  windowDuration: xsd:duration
  Comment: "허용된 요청 한도"

Class: TimeWindow
  startTime: xsd:dateTime
  endTime: xsd:dateTime
  Comment: "요청 카운트를 세는 시간 범위"
```

**주요 속성:**

```turtle
ObjectProperty: makes
  Domain: Client
  Range: APIRequest

ObjectProperty: withinWindow
  Domain: APIRequest
  Range: TimeWindow

DataProperty: requestCount
  Domain: Client
  Range: xsd:integer

ObjectProperty: hasLimit
  Domain: Client
  Range: RateLimit
```

**추론 규칙:**

```
Rule 1: 요청 제한 검증
(Client C makes Request R) ∧
(requestCount(C, currentWindow) ≥ limit(C))
→ reject(R)

Rule 2: 슬라이딩 윈도우
(currentTime - request.timestamp > windowDuration)
→ exclude(request from count)

Rule 3: 윈도우 리셋
(currentTime - window.startTime ≥ window.duration)
→ resetWindow(C)
```

---

### 3단계: 형식 명세 (술어논리)

**불변조건:**

```
∀c ∈ Client, ∀w ∈ TimeWindow
  requestCount(c, w) ≤ rateLimit(c).maxRequests
```

**전제조건 (makeRequest):**

```
∀c, r (makeRequest(c, r) → 
  c ∈ clients ∧ 
  r ∈ Request)
```

**후치조건 (makeRequest - 성공):**

```
∀c, r (makeRequest(c, r) ∧ allowed(c, r) → 
  requestCount(c, currentWindow)' = requestCount(c, currentWindow) + 1)
```

**후치조건 (makeRequest - 거부):**

```
∀c, r (makeRequest(c, r) ∧ ¬allowed(c, r) → 
  requestCount(c, currentWindow)' = requestCount(c, currentWindow))
```

---

### 다루는 개념

- Concept의 시간 기반 상태 관리
- 시간 기반 제약
- 슬라이딩 윈도우 알고리즘
- 분산 환경 고려
- 실시간 검증

**예상 소요 시간:** 1-2주

---

## 방법론

각 케이스는 동일한 6단계 프로세스를 따릅니다:

### 1. Concept 설계 (Daniel Jackson의 방법론)

시스템의 핵심 개념을 식별하고 명확히 정의합니다.

**Purpose (목적)**

- 이 Concept이 해결하려는 문제를 한 문장으로 정의
- 예: "문서 접근을 역할 기반으로 제어하여 권한 관리를 단순화한다"

**State (상태)**

- Concept의 핵심 상태 요소를 집합론적으로 표현
- 예: `users: set User`, `userRoles: User → set Role`

**Operations (연산)**

- 상태를 변경하는 주요 연산들
- 각 연산의 전제조건(Precondition)과 후치조건(Postcondition)

**Invariants (불변조건)**

- 모든 상태에서 유지되어야 하는 제약조건
- 예: `∀u ∀d (canWrite(u, d) → canRead(u, d))`

### 2. 온톨로지 모델링 (Protégé)

Concept을 OWL 온톨로지로 정형화합니다.

- Concept의 **State** → OWL 클래스 및 속성
- Concept의 **Invariants** → OWL 공리(Axioms)
- **클래스 계층** 정의
- **속성** (Object Property / Data Property) 명시
- **제약 조건** 및 **공리** 작성
- **추론 규칙** 구현

### 3. 형식 명세 (술어논리)

온톨로지의 제약조건을 술어논리로 명세합니다.

- **불변조건(Invariant)** 정형화
- **전제조건(Precondition)** 명시
- **후치조건(Postcondition)** 명시
- **안전성(Safety)** 속성 증명

### 4. 파이썬 구현

형식 명세를 실제 작동 코드로 변환합니다.

- Concept의 **Operations** → Python 메서드
- Concept의 **State** → Python 클래스 속성
- 타입 힌팅 (mypy)
- `assert`를 통한 불변조건 검증
- 실제 작동하는 코드

### 5. 테스트 (pytest)

형식 명세를 테스트로 증명합니다.

- Concept의 **Invariants** → 테스트 케이스
- 각 **Operation**의 전제/후치 조건 검증
- 단위 테스트
- 불변조건 자동 검증
- 엣지 케이스 검증

### 6. 문서화

설계 과정과 결과물을 체계적으로 기록합니다.

- Concept 다이어그램
- 온톨로지 다이어그램 (OntoGraf/WebVOWL)
- 클래스/속성 레퍼런스 (Markdown)
- 설계 결정 사항 기록
- 기술 블로그 포스팅

---

## GitHub 리포지토리 구조

```
📁 [case-name]-design/
├── 📄 README.md
│   └── 전체 프로젝트 개요, 실행 방법
│
├── 📁 concept-design/
│   ├── purpose.md              # Concept의 목적
│   ├── state.md                # 상태 정의
│   ├── operations.md           # 연산 정의
│   ├── invariants.md           # 불변조건
│   └── concept-diagram.png     # Concept 다이어그램
│
├── 📁 ontology/
│   ├── [case].owl              # Protégé 온톨로지 파일
│   ├── diagrams/
│   │   ├── class-hierarchy.png # 클래스 계층
│   │   ├── property-graph.png  # 속성 관계
│   │   └── inference-demo.png  # 추론 예시
│   └── docs/
│       ├── classes.md          # 클래스 상세 설명
│       ├── properties.md       # 속성 상세 설명
│       └── axioms.md           # 공리 및 제약조건
│
├── 📁 formal-spec/
│   ├── invariants.md           # 불변조건 명세
│   ├── preconditions.md        # 전제조건
│   └── postconditions.md       # 후치조건
│
├── 📁 src/
│   ├── [case].py               # 메인 구현
│   ├── models.py               # 데이터 모델
│   ├── operations.py           # Concept Operations 구현
│   └── validators.py           # 검증 로직
│
├── 📁 tests/
│   ├── test_invariants.py      # 불변조건 테스트
│   ├── test_operations.py      # 연산 테스트
│   └── test_edge_cases.py      # 엣지 케이스 테스트
│
└── 📁 docs/
    ├── design-decisions.md     # 설계 의도 및 트레이드오프
    └── concept-to-code.md      # Concept에서 코드로의 변환 과정
```

---

## 타임라인

### Phase 1: 기초 (11월)

```
Week 1-2: 술어논리 학습 (진행 중)
Week 3:   Concept 설계 + Protégé 학습 + RBAC Concept
Week 4:   RBAC 온톨로지 + 구현 + 테스트 + 문서화
```

### Phase 2: 핵심 (12월)

```
Week 1:   웰빙 Concept 설계 + 온톨로지 기본 구조
Week 2:   웰빙 온톨로지 확장 (패턴 분석, 추론 규칙)
Week 3:   웰빙 시스템 구현 + 테스트
Week 4:   다이어그램 생성 + 블로그 포스팅
```

### Phase 3: 응용 (1월)

```
Week 1-2: API Rate Limiter Concept + 개발
Week 3:   전체 프로젝트 통합 정리
Week 4:   최종 문서화
```

---

## 기술 스택

### Concept 설계

- **방법론**: Daniel Jackson의 Concept-based Design
- **도구**: Alloy (선택적, 검증용)

### 온톨로지

- **Protégé** 5.6+ (온톨로지 편집기)
- **OWL 2** (Web Ontology Language)
- **Pellet Reasoner** (추론 엔진)

### 개발

- **Python** 3.9+
- **pytest** (테스트 프레임워크)
- **mypy** (정적 타입 검사)

### 시각화

- **OntoGraf** (Protégé 플러그인)
- **WebVOWL** (온톨로지 시각화 도구)

### 문서화

- **Markdown**
- **Mermaid** (다이어그램)

---

## 왜 이 접근법인가?

### Concept-based Design의 가치

**명확성**

- Purpose를 명시하여 "왜"를 분명히 함
- State와 Operations로 "무엇"과 "어떻게"를 정의
- Invariants로 "항상 지켜야 할 것"을 명시

**독립성**

- 각 Concept은 독립적으로 이해 가능
- 시스템을 Concept의 조합으로 이해
- 변경의 영향 범위가 명확함

**검증 가능성**

- Invariants를 명시하면 검증 기준이 명확
- 테스트 케이스가 자연스럽게 도출됨

### 온톨로지의 가치

**관계의 명시화**

- 개념 간 관계를 형식적으로 정의
- "A와 B가 연결되어 있다"를 넘어 "어떻게 연결되어 있는가"를 명확히

**추론 가능성**

- 명시된 규칙에서 새로운 지식 자동 도출
- 모순 자동 검출

### 술어논리의 가치

**정확성**

- 자연어의 모호함 제거
- "관리자는 모든 문서에 접근할 수 있다" → `∀u ∀d (isAdmin(u) → canAccess(u, d))`

**검증 가능성**

- 수학적으로 증명 가능한 명세
- 구현 전에 논리적 오류 발견

### Python 구현의 가치

|항목|순수 모델링 도구|Python|
|---|---|---|
|**실무 활용도**|학술용|실무 표준|
|**실행 가능성**|모델 검증만|실제 작동 코드|
|**검증 방식**|자동 분석|테스트 기반|
|**학습 곡선**|높음|낮음|
|**확장성**|제한적|무한|

---

## 학습 목표와 기대효과

### 기술적 학습 목표

- **Concept-based Design 습득**
    
    - Purpose/State/Operations/Invariants 정의 능력
    - 복잡한 시스템을 독립적 Concept으로 분해하는 사고방식
- **온톨로지 모델링 능력**
    
    - Protégé 활용한 OWL 온톨로지 설계
    - 추론 엔진을 통한 자동 검증
- **형식 명세 능력**
    
    - 술어논리로 요구사항 정형화
    - 불변조건, 전제/후치조건 명세
- **통합 워크플로우**
    
    - Concept → 온톨로지 → 형식 명세 → 구현 → 테스트
    - 이론과 실무를 연결하는 실전 경험

### 이 방법론의 가치

**1. 요구사항 명확화**

```
자연어: "관리자는 모든 문서에 접근할 수 있다"

Concept:
  Purpose: 역할 기반 접근 제어
  Operation: checkAccess(u, d)
  Invariant: ∀u ∀d (isAdmin(u) → canAccess(u, d))

→ 모호함 제거, 정확한 의미 전달
```

**2. 조기 오류 발견**

```
설계 단계에서 Invariant 검증:
  "읽기 권한 없이 쓰기 권한만 있는 경우"
  
Concept Invariant:
  ∀u ∀d (canWrite(u, d) → canRead(u, d))
  
→ 온톨로지 추론 엔진이 자동으로 모순 검출
→ 구현 전에 논리 오류 발견
```

**3. 문서화 자동화**

```
Concept 정의 → 온톨로지 → 코드
→ 각 단계가 다음 단계의 문서가 됨
→ 문서와 코드의 불일치 최소화
```

**4. 유지보수 용이**

```
변경 요청: "Editor 역할에 삭제 권한 추가"

Concept 확인:
  - Purpose에 부합하는가?
  - Invariant를 위반하는가?
  
온톨로지 수정:
  - rolePermissions(Editor) += Delete
  
추론 검증:
  - 기존 Invariant 유지되는가?
  
→ 변경 영향도 명확, 안전한 수정
```

### 독자에게 도움이 되는 점

**재사용 가능한 자료**

- Concept 설계 템플릿 (Purpose/State/Operations/Invariants)
- RBAC, Rate Limiter 등의 Concept 정의
- 온톨로지 모델 (.owl 파일)
- 실전 Python 구현 코드
- 테스트 케이스 예시

**학습 가이드**

- Concept-based Design 단계별 적용 방법
- Protégé 사용법 (스크린샷 포함)
- Concept에서 온톨로지로의 변환 패턴
- 온톨로지에서 코드로의 변환 패턴
- 일반적인 실수와 해결 방법

**설계 인사이트**

- 복잡한 도메인을 Concept으로 분해하는 사고 과정
- Invariant를 찾아내는 방법
- 추상화 수준 결정 기준
- 실무에서 고려해야 할 트레이드오프

---

## 진행 상황

- [x] 로드맵 수립
- [x] 케이스 선정 및 구체화
- [x] 방법론 정립 (Concept + 온톨로지 + 형식 명세)
- [ ] Concept-based Design 학습 (예정)
- [ ] Protégé 에디터로 온톨로지 모델링
- [ ] Case 1: RBAC 개발 (예정 - 11월)
- [ ] Case 2: 웰빙 시스템 개발 (예정 - 12월)
- [ ] Case 3: Rate Limiter 개발 (예정 - 1월)

---

## 업데이트 로그

- **2025-11-03**: Concept-based Design 방법론 추가, 웰빙 추적 시스템 상세화, 6단계 프로세스 확립
- **2025-10-30**: 최초 작성

---

## 더 알아보기

- [[01_Zettelkasten]]
- [[02_Ontology_Modeling]]
- [[03_Concept_Based_Design]]
- [Daniel Jackson - MIT](https://people.csail.mit.edu/dnj/)
- [The Essence of Software](https://essenceofsoftware.com/)

---

_© 2025 Logify-Lab. Some Rights Reserved._  
이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>에 따라 이용할 수 있습니다.

**Contact:** hyeyum.people@gmail.com