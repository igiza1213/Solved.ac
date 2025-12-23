import heapq

T = int(input())

INF = 10**18


def dijkstra(S, adj, N):
    pq = []
    heapq.heappush(pq, (0, S))

    dist = [INF] * (N + 1)
    dist[S] = 0

    while pq:
        cost, u = heapq.heappop(pq)

        if dist[u] < cost:
            continue

        for v, w in adj[u]:
            nc = cost + w
            if nc < dist[v]:
                dist[v] = nc
                heapq.heappush(pq, (nc, v))

    return dist


for _ in range(T):
    N, M, K = map(int, input().split())

    S, G, H = map(int, input().split())

    adj = [[] for _ in range(N + 1)]
    gh_w = 0

    for _ in range(M):
        u, v, w = map(int, input().split())

        adj[u].append((v, w))
        adj[v].append((u, w))
        if (u == G and v == H) or (u == H and v == G):
            gh_w = w

    arr = [int(input()) for _ in range(K)]
    arr.sort()

    distS = dijkstra(S, adj, N)
    distG = dijkstra(G, adj, N)
    distH = dijkstra(H, adj, N)

    ans = []
    for x in arr:
        if (
            distS[x] == distS[G] + gh_w + distH[x]
            or distS[x] == distS[H] + gh_w + distG[x]
        ):
            ans.append(x)

    print(*ans)
