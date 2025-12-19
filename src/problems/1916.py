import heapq

N = int(input())
M = int(input())

adj = [[] for _ in range(N + 1)]
for _ in range(M):
    u, v, w = map(int, input().split())
    adj[u].append((v, w))

A, B = map(int, input().split())

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


dist = dijkstra(A)
print(dist[B])
