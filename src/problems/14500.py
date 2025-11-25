
N, M = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(N)]

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

visited = [[False] * M for _ in range(N)]
res = 0


def dfs(x, y, depth, total):
    global res
    if depth == 4:
        res = max(res, total)
        return
    for i in range(4):
        nx, ny = x + dx[i], y + dy[i]
        if 0 <= nx < M and 0 <= ny < N and not visited[ny][nx]:
            visited[ny][nx] = True
            dfs(nx, ny, depth + 1, total + graph[ny][nx])
            visited[ny][nx] = False


def check_t(x, y):
    global res
    # T
    T_mino = [
        [(0, 0), (0, 1), (0, 2), (1, 1)],
        [(0, 0), (1, 0), (2, 0), (1, 1)],
        [(1, 0), (1, 1), (1, 2), (0, 1)],
        [(0, 1), (1, 0), (1, 1), (2, 1)],
    ]
    for shape in T_mino:
        try:
            s = sum(graph[y + dy][x + dx] for dx, dy in shape)
            res = max(res, s)
        except IndexError:
            continue


for y in range(N):
    for x in range(M):
        visited[y][x] = True
        dfs(x, y, 1, graph[y][x])
        visited[y][x] = False
        check_t(x, y)

print(res)
