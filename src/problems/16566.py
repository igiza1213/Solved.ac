import bisect
import sys

sys.setrecursionlimit(10**5)
input = sys.stdin.readline

N, M, K = map(int, input().split())

cards = list(map(int, input().split()))
cards.sort()

query = list(map(int, input().split()))

parent = list(range(N + 1))


def find(x):
    if parent[x] != x:
        parent[x] = find(parent[x])
    return parent[x]


def union(a, b):
    a = find(a)
    b = find(b)
    parent[a] = b


for q in query:
    i = bisect.bisect_right(cards, q)

    i = find(i)

    print(cards[i])

    union(i, i + 1)
