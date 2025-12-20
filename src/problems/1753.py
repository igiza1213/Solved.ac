import heapq

N, R = map(int, input().split())
K = int(input())

adj = [[] for _ in range(N + 1)]
for _ in range(R):
    u, v, w = map(int, input().split())
    adj[u].append((v, w))

INF = 10**9
dist = [INF] * (N + 1)


def dijkstra():
    pq = []
    heapq.heappush(pq, (0, K))
    dist[K] = 0

    while pq:
        d, u = heapq.heappop(pq)
        if dist[u] < d:
            continue

        for v, w in adj[u]:
            if dist[v] > d + w:
                dist[v] = d + w
                heapq.heappush(pq, (dist[v], v))


dijkstra()

for i in dist[1:]:
    print(i if i != INF else "INF")
