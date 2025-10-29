from collections import deque

N, M = map(int, input().split())

matrix = [list(map(int, input().split())) for _ in range(N)]

res = []

dx, dy = [1, 0, -1, 0], [0, 1, 0, -1]


def bfs(y, x):
    queue = deque([(y, x)])
    visit[y][x] = 1

    while queue:
        y, x = queue.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if (
                nx < 0
                or nx >= M
                or ny < 0
                or ny >= N
                or visit[ny][nx]
                or matrix[ny][nx]
            ):
                continue
            queue.append([ny, nx])
            visit[ny][nx] = 1


def melt():
    for y in range(N):
        for x in range(M):
            if matrix[y][x]:
                for i in range(4):
                    nx, ny = x + dx[i], y + dy[i]
                    if visit[ny][nx]:
                        matrix[y][x] = 0
                        break


while True:
    res.append(sum(map(sum, matrix)))
    if res[-1] == 0:
        break
    visit = [[0] * M for _ in range(N)]

    bfs(0, 0)

    melt()


print(len(res) - 1)
print(res[-2])
