T = int(input())

INF = 10**9


def bellman_ford():
    dist = [0] * (N + 1)

    for i in range(N):
        for u, v, w in edge:
            if dist[v] > dist[u] + w:
                dist[v] = dist[u] + w
                if i == N - 1:
                    return True

    return False


for _ in range(T):
    N, M, W = map(int, input().split())

    edge = []
    for _ in range(M):
        u, v, w = map(int, input().split())
        edge.append((u, v, w))
        edge.append((v, u, w))

    for _ in range(W):
        u, v, w = map(int, input().split())
        edge.append((u, v, -w))

    res = bellman_ford()

    print("YES" if res else "NO")
