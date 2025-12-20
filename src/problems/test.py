T = int(input())

INF = 10**9


def bellman_ford(start):
    dist = [INF] * (N + 1)
    dist[start] = 0

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
            return False

    return dist


for _ in range(T):
    N, M, W = map(int, input().split())

    edge = []
    for _ in range(M):
        u, v, w = map(int, input().split())
        edge.append((u, v, w))

    for _ in range(W):
        u, v, w = map(int, input().split())
        edge.append((u, v, -w))

    dist = bellman_ford(1)

    if dist:
        print(dist[1])
