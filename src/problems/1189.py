R, C, K = map(int, input().split())
matrix = [list(input()) for _ in range(R)]
visited = [[0] * C for _ in range(R)]
res = 0

direction = [(0, 1), (0, -1), (1, 0), (-1, 0)]


def dfs(x, y):
    global res

    if x == C - 1 and y == 0:
        if visited[y][x] == K:
            res += 1
        return

    for dx, dy in direction:
        nx, ny = x + dx, y + dy
        if (
            0 <= nx < C
            and 0 <= ny < R
            and matrix[ny][nx] == "."
            and visited[ny][nx] == 0
        ):
            visited[ny][nx] = visited[y][x] + 1
            dfs(nx, ny)
            visited[ny][nx] = 0


visited[R - 1][0] = 1
dfs(0, R - 1)
print(res)
