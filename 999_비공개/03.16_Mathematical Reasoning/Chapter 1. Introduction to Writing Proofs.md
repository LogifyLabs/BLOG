
# 📝 Chapter 1. Introduction to Writing Proofs

> [!abstract] 챕터 개요
> 수학적 사고의 기본 단위인 **명제(Statement)**와 **조건문(Conditional Statement)**을 정의하고, 이를 바탕으로 **직접 증명(Direct Proof)**을 구성하는 방법을 배웁니다. 특히 **Know-Show Table**은 코딩 전 알고리즘을 설계하는 강력한 도구입니다.

## 1. 핵심 개념 (Core Concepts)

### 1.1 명제와 조건문 (Statements and Conditional Statements)
* **명제 (Statement):** 참(True) 또는 거짓(False)이 명확히 판별되는 문장. (모호한 문장은 명제가 아님)
* **조건문 (Conditional Statement):** $P \to Q$ ("If $P$, then $Q$").
    * **가정 (Hypothesis, $P$):** 전제 조건.
    * **결론 (Conclusion, $Q$):** 결과.
    * **진리값:** $P$가 참이고 $Q$가 거짓일 때만 **거짓(False)**입니다.
        * *AI 연결:* 데이터 파이프라인에서 전제($P$, 데이터 포맷)가 맞는데 결과($Q$, 모델 입력)가 틀리면 시스템 에러(False)입니다. 전제($P$)가 틀리면(데이터가 없으면) 로직은 실행되지 않으므로 시스템은 안전(True)합니다.

### 1.2 직접 증명 구성 (Constructing Direct Proofs)
* **정의 (Definitions):** 증명의 기초 재료.
    * 짝수(Even): $n = 2k$ ($k \in \mathbb{Z}$)
    * 홀수(Odd): $n = 2k + 1$ ($k \in \mathbb{Z}$)
* **폐쇄성 (Closure):** 정수끼리 더하거나 곱해도 여전히 정수이다.
* **직접 증명:** 가정 $P$를 참이라고 가정하고, 논리적 단계를 거쳐 $Q$가 참임을 보이는 것.

---

## 2. 🛠️ The Know-Show Table (AI 엔지니어의 핵심 도구)
> **저자 Ted의 팁:** 이 테이블은 제가 고안한 증명 구성 도구입니다. 코딩하기 전에 이 테이블을 먼저 작성하면 **'스파게티 코드'**를 방지할 수 있습니다.

| 단계 (Step)      | 내용 (Content)               | 이유 (Reason/Logic) | AI 코딩 연결 (Python)             |
| :------------- | :------------------------- | :---------------- | :---------------------------- |
| **$P$ (Know)** | 가정: $x, y$는 홀수이다.          | 가설 (Hypothesis)   | `def func(x, y):` (입력 정의)     |
| $P_1$          | $x=2k+1, y=2m+1$           | 홀수의 정의            | `x, y = 2*k+1, 2*m+1` (변수 선언) |
| ...            | ...                        | ...               | (중간 연산 로직)                    |
| $Q_1$          | $x \cdot y = 2(2km+k+m)+1$ | 대수적 정리            | `result = 2*(...) + 1`        |
| **$Q$ (Show)** | 결론: $x \cdot y$는 홀수이다.     | 홀수의 정의            | `return result` (출력 보장)       |

---

## 3. 💻 Python Implementation (실전 연습)

**목표:** "두 홀수의 곱은 항상 홀수이다"라는 수학적 증명을 파이썬의 **Type Hinting**과 **Assert**로 구현.

```python
def multiply_odds(n: int, m: int) -> int:
    """
    Theorem: The product of two odd integers is an odd integer.
    Pre-condition (Know): n and m are odd.
    Post-condition (Show): return value is odd.
    """
    # 1. Know (가정 검증)
    assert n % 2 != 0, "Input n must be odd"
    assert m % 2 != 0, "Input m must be odd"
    
    # 2. Logic (연산)
    result = n * m
    
    # 3. Show (결론 보장 - 수학적으로 이미 증명되었으므로 항상 통과함)
    assert result % 2 != 0, "Mathematical impossibility! (Check logic)"
    
    return result

# 테스트
print(f"3 * 5 = {multiply_odds(3, 5)}") # 성공
# print(f"2 * 5 = {multiply_odds(2, 5)}") # AssertionError (가정 위배)