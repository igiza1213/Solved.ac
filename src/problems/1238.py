import heapq

N, M, X = map(int, input().split())

adj = [[] for _ in range(N + 1)]
rev_adj = [[] for _ in range(N + 1)]

for _ in range(M):
    u, v, w = map(int, input().split())
    adj[u].append((v, w))
    rev_adj[v].append((u, w))

INF = 10**9


def dijkstra(adj):
    pq = []
    heapq.heappush(pq, (0, X))

    dist = [INF] * (N + 1)
    dist[X] = 0

    while pq:
        d, u = heapq.heappop(pq)
        if dist[u] < d:
            continue

        for v, w in adj[u]:
            if dist[v] > d + w:
                dist[v] = d + w
                heapq.heappush(pq, (dist[v], v))

    return dist


dist1 = dijkstra(adj)
dist2 = dijkstra(rev_adj)

ans = 0
for i in range(1, N + 1):
    ans = max(ans, dist1[i] + dist2[i])

print(ans)
