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

    parent = [-1] * (N + 1)

    while pq:
        d, u = heapq.heappop(pq)
        if dist[u] < d:
            continue

        for v, w in adj[u]:
            if dist[v] > d + w:
                dist[v] = d + w
                parent[v] = u
                heapq.heappush(pq, (dist[v], v))

    return dist, parent


dist, parent = dijkstra(A)

path = []
cur = B
while cur != -1:
    path.append(cur)
    cur = parent[cur]
path.reverse()


print(dist[B])
print(len(path))
print(*path)
