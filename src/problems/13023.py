N, M = map(int, input().split())

matrix = [[] for _ in range(N)]

visited = [0] * N
res = 0


for i in range(M):
    x, y = map(int, input().split())
    matrix[y].append(x)
    matrix[x].append(y)


def dfs(i, cnt):
    global res

    if res:
        return

    if cnt == 4:
        res = 1
        return 1

    for v in matrix[i]:
        if not visited[v]:
            visited[v] = 1
            dfs(v, cnt + 1)
            visited[v] = 0


for i in range(N):
    if not visited[i]:
        visited[i] = 1
        dfs(i, 0)
        visited[i] = 0
        if res:
            break

print(res)
