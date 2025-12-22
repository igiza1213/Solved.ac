from collections import deque

N, M = map(int, input().split())

adj = [[] for _ in range(N + 1)]
indegree = [0] * (N + 1)

for _ in range(M):
    a, *b = map(int, input().split())
    for i in range(a - 1):
        adj[b[i]].append(b[i + 1])
        indegree[b[i + 1]] += 1

res = []

queue = deque()

for i in range(1, N + 1):
    if indegree[i] == 0:
        queue.append(i)


def bfs():
    while queue:
        x = queue.popleft()
        res.append(x)

        for y in adj[x]:
            indegree[y] -= 1
            if indegree[y] == 0:
                queue.append(y)


bfs()

if len(res) == N:
    print(*res, sep="\n")
else:
    print(0)
