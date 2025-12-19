N, M = map(int, input().split())

edge = []
for _ in range(M):
    u, v, w = map(int, input().split())
    edge.append((u, v, w))

INF = 10**9


def bellman_ford():
    dist = [INF] * (N + 1)
    dist[1] = 0

    for _ in range(N - 1):
        flag = False
        for u, v, w in edge:
            if dist[u] != INF:
                dist[v] = min(dist[v], dist[u] + w)
                flag = True
        if not flag:
            break

    for u, v, w in edge:
        if dist[u] != INF and dist[v] > dist[u] + w:
            return

    return dist


dist = bellman_ford()

if dist:
    for row in dist[2:]:
        print(row if row != INF else -1)
else:
    print(-1)
