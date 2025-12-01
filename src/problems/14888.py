import math
from copy import deepcopy
from itertools import permutations

N = int(input())
nums = list(map(int, input().split()))
plus, minus, mul, div = map(int, input().split())

operation = [*["+"] * plus, *["-"] * minus, *["*"] * mul, *["/"] * div]
operation = [v for v in operation if v]

res = []


def calc(a, b, op):
    if op == "+":
        return a + b
    elif op == "-":
        return a - b
    elif op == "*":
        return a * b
    elif op == "/":
        if a < 0:
            return -math.floor(abs(a) // b)
        return a // b


def dfs(base, operation):
    for com in permutations(operation, N - 1):
        nums = deepcopy(base)
        for i in range(N - 1):
            nums[i + 1] = calc(nums[i], nums[i + 1], com[i])
        res.append(nums[-1])


dfs(nums, operation)

print(max(res))
print(min(res))
