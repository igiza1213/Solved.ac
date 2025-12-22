import sys
from collections import deque

input = sys.stdin.readline

N, M = map(int, input().split())

adj = [[] for _ in range(N + 1)]
indegree = [0] * (N + 1)


for _ in range(M):
    a, b = map(int, input().split())
    adj[a].append(b)
    indegree[b] += 1

res = []
sx = []

for i in range(1, N + 1):
    if indegree[i] == 0:
        sx.append(i)


def bfs(sx):
    queue = deque(sx)

    while queue:
        x = queue.popleft()
        res.append(x)

        for y in adj[x]:
            indegree[y] -= 1
            if indegree[y] == 0:
                queue.append(y)


bfs(sx)
print(*res)
