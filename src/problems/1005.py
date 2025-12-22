from collections import deque

T = int(input())

for _ in range(T):
    N, K = map(int, input().split())
    time = [0] + list(map(int, input().split()))

    adj = [[] for _ in range(N + 1)]
    indegree = [0] * (N + 1)

    for _ in range(K):
        a, b = map(int, input().split())
        adj[a].append(b)
        indegree[b] += 1

    W = int(input())

    dp = [0] * (N + 1)
    queue = deque()

    for i in range(1, N + 1):
        if indegree[i] == 0:
            queue.append(i)
            dp[i] = time[i]

    while queue:
        x = queue.popleft()

        for y in adj[x]:
            dp[y] = max(dp[y], dp[x] + time[y])
            indegree[y] -= 1
            if indegree[y] == 0:
                queue.append(y)

    print(dp[W])
