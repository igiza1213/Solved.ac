from collections import deque

N = int(input())

matrix = [list(map(int, list(input().strip()))) for _ in range(N)]

visit = [[0] * N for _ in range(N)]
res = []

dx, dy = [1, 0, -1, 0], [0, 1, 0, -1]


def bfs(y, x):
    queue = deque([(y, x)])
    visit[y][x] = 1
    c = 1
    while queue:
        y, x = queue.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]

            if (
                nx < 0
                or nx >= N
                or ny < 0
                or ny >= N
                or visit[ny][nx]
                or matrix[ny][nx] == 0
            ):
                continue
            c += 1
            queue.append([ny, nx])
            visit[ny][nx] = 1

    res.append(c)


for y in range(N):
    for x in range(N):
        if matrix[y][x] == 1 and visit[y][x] == 0:
            bfs(y, x)

print(len(res))
for row in sorted(res):
    print(row)
