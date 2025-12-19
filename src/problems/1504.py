import heapq

N, E = map(int, input().split())

adj = [[] for _ in range(N + 1)]
for _ in range(E):
    u, v, w = map(int, input().split())
    adj[u].append((v, w))
    adj[v].append((u, w))

v1, v2 = map(int, input().split())

INF = 10**9


def dijkstra(start):
    pq = []
    heapq.heappush(pq, (0, start))

    dist = [INF] * (N + 1)
    dist[start] = 0

    while pq:
        d, u = heapq.heappop(pq)
        if dist[u] < d:
            continue

        for v, w in adj[u]:
            if dist[v] > d + w:
                dist[v] = d + w
                heapq.heappush(pq, (dist[v], v))

    return dist


s_dist = dijkstra(1)
v1_dist = dijkstra(v1)
v2_dist = dijkstra(v2)

res1 = s_dist[v1] + v1_dist[v2] + v2_dist[N]
res2 = s_dist[v2] + v2_dist[v1] + v1_dist[N]

res = min(res1, res2)
print(res if res < INF else -1)
