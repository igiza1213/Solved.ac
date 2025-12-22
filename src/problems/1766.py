import heapq

N, M = map(int, input().split())

adj = [[] for _ in range(N + 1)]
indegree = [0] * (N + 1)

for _ in range(M):
    a, b = map(int, input().split())
    adj[a].append(b)
    indegree[b] += 1

res = []
pq = []


for i in range(1, N + 1):
    if indegree[i] == 0:
        heapq.heappush(pq, i)


def bfs():
    while pq:
        x = heapq.heappop(pq)
        res.append(x)

        for y in adj[x]:
            indegree[y] -= 1
            if indegree[y] == 0:
                heapq.heappush(pq, y)


bfs()
print(*res)
