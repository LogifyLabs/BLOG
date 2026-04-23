
> [!abstract] 챕터 개요
> 이 챕터는 **'참/거짓'을 다루는 규칙(Logic)**을 정립합니다. AI 엔지니어에게는 파이썬의 조건문(`if`, `else`), 데이터 필터링(`Query`), 그리고 손실 함수의 정의($\sum$)를 이해하는 가장 기초적인 **문법(Syntax)** 수업입니다.

## 1. 핵심 개념 요약 (Core Concepts)

### 2.1 명제와 논리 연산자 (Statements and Operators)
> *참고 노트: [[2.1 Statements and Logical Operators]]*
* **개념:** 단순한 명제들을 연결하여 복합 명제를 만드는 도구.
* **연산자:**
    * 논리곱 ($\land$, AND): 둘 다 참일 때만 참.
    * 논리합 ($\lor$, OR): 하나라도 참이면 참.
    * 부정 ($\neg$, NOT): 참/거짓 반전.
* **AI 연결:** 데이터 마스킹(Masking) 및 조건부 실행 제어.

### 2.2 논리적 동치 (Logically Equivalent)
> *참고 노트: [[2.2 Logically Equivalent Statements]]*
* **개념:** 두 명제의 진리값이 모든 경우에 동일함 ($P \equiv Q$).
* **드모르간 법칙 (De Morgan's Laws):**
    * $\neg(P \land Q) \equiv \neg P \lor \neg Q$
    * $\neg(P \lor Q) \equiv \neg P \land \neg Q$
* **AI 연결:** 복잡한 코드를 간결하게 만드는 **리팩토링(Refactoring)**의 수학적 원리.

### 2.3 열린 문장과 집합 (Open Sentences and Sets)
> *참고 노트: [[2.3 Open Sentences and Sets]]*
* **개념:** 변수 $x$에 따라 참/거짓이 결정되는 문장 ($P(x)$).
* **진리 집합 (Truth Set):** $P(x)$를 참으로 만드는 $x$들의 모임.
* **AI 연결:** 데이터베이스 쿼리(`WHERE score > 90`)와 필터링 결과.

### 2.4 한정자와 부정 (Quantifiers and Negations)
> *참고 노트: [[2.4 Quantifiers and Negations]]*
* **개념:** 변수의 범위를 지정하는 기호.
    * **전칭 ($\forall$):** "모든 $x$에 대하여..." (For all)
    * **존재 ($\exists$):** "어떤 $x$가 존재하여..." (There exists)
* **AI 연결:**
    * **손실 함수:** 모든($\forall$) 데이터의 오차 합.
    * **디버깅:** 에러가 발생하는 케이스가 하나라도 존재($\exists$)하는가?

---

## 2. 🧠 Ted's Insight: 왜 논리가 중요한가?

수학에서의 '증명'은 코딩에서의 '구현'과 같습니다.

1.  우리는 코드를 짤 때 **"이 조건문이 모든 경우($\forall$)에 안전한가?"**를 고민합니다.
2.  버그가 발생하면 **"어떤 입력값($\exists$)이 문제를 일으켰는가?"**를 찾습니다.
3.  코드가 너무 복잡하면 **"더 간단한 논리($\equiv$)로 바꿀 수 없는가?"**를 생각합니다.

이 챕터는 그 사고방식을 기호로 훈련하는 과정입니다.

---
**Next Chapter:**
* 본격적인 증명 방법론을 배우는 **[[Chapter 3. Constructing and Writing Proofs]]**로 이어집니다.