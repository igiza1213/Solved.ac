import heapq

N, M = map(int, input().split())

adj = [[] for _ in range(N + 1)]
for _ in range(M):
    u, v, w = map(int, input().split())
    adj[u].append((v, w))
    adj[v].append((u, w))

INF = 10**9


def prim():
    pq = []
    heapq.heappush(pq, (0, 1))

    visited = [False] * (N + 1)

    ans = 0
    max_edge = 0
    cnt = 0

    while pq and cnt < N:
        cost, node = heapq.heappop(pq)

        if visited[node]:
            continue

        visited[node] = True

        ans += cost
        max_edge = max(max_edge, cost)
        cnt += 1

        for next_node, next_cost in adj[node]:
            if not visited[next_node]:
                heapq.heappush(pq, (next_cost, next_node))

    return ans, max_edge


ans, max_edge = prim()
print(ans - max_edge)
