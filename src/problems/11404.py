N = int(input())
M = int(input())

INF = float("inf")
dist = [[INF] * (N + 1) for _ in range(N + 1)]

for i in range(1, N + 1):
    dist[i][i] = 0

for _ in range(M):
    u, v, w = map(int, input().split())
    dist[u][v] = min(dist[u][v], w)


def floyd():
    for k in range(1, N + 1):
        for i in range(1, N + 1):
            if dist[i][k] == INF:
                continue
            for j in range(1, N + 1):
                if dist[k][j] == INF:
                    continue
                dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])


floyd()

for i in range(1, N + 1):
    row = [0 if x == INF else x for x in dist[i][1:]]
    print(*row)
