import heapq

N, M, K = map(int, input().split())

adj = [[] for _ in range(N + 1)]
for _ in range(M):
    u, v, w = map(int, input().split())

    adj[u].append((v, w))
    adj[v].append((u, w))

INF = 10**18


def dijkstra():
    pq = []
    heapq.heappush(pq, (0, 1, 0))

    dist = [[INF] * (K + 1) for _ in range(N + 1)]
    dist[1][0] = 0

    while pq:
        cost, node, k = heapq.heappop(pq)

        if dist[node][k] < cost:
            continue
        for next_node, next_cost in adj[node]:
            next_cost += cost
            if next_cost < dist[next_node][k]:
                dist[next_node][k] = next_cost
                heapq.heappush(pq, (next_cost, next_node, k))
            if k < K and cost < dist[next_node][k + 1]:
                dist[next_node][k + 1] = cost
                heapq.heappush(pq, (cost, next_node, k + 1))

    return min(dist[N])


res = dijkstra()

print(res)
