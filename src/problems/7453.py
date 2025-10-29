import sys
from collections import Counter


input = sys.stdin.readline

N = int(input())

A, B, C, D = [], [], [], []

AB = []
CD = []

for _ in range(N):
    a, b, c, d = map(int, input().split())
    A.append(a)
    B.append(b)
    C.append(c)
    D.append(d)


AB_count = Counter()
for i in range(N):
    for j in range(N):
        AB_count[A[i] + B[j]] += 1

cnt = 0
for i in range(N):
    for j in range(N):
        cnt += AB_count[-(C[i] + D[j])]

print(cnt)
