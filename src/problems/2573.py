from collections import deque
import sys


N, M = map(int, sys.stdin.readline().split())
matrix = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]
direction = [(-1, 0), (1, 0), (0, 1), (0, -1)]
res = 0


def bfs(x, y):
    queue = deque([(x, y)])
    visited[x][y] = 1
    while queue:
        cx, cy = queue.popleft()
        for dx, dy in direction:
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < N and 0 <= ny < M:
                if matrix[nx][ny] == 0:
                    visited[cx][cy] += 1
                if visited[nx][ny] == 0 and matrix[nx][ny] != 0:
                    queue.append([nx, ny])
                    visited[nx][ny] = 1


while True:
    cnt = 0
    visited = [[0] * M for _ in range(N)]

    for y in range(N):
        for x in range(M):
            if visited[y][x] == 0 and matrix[y][x] > 0:
                bfs(y, x)
                cnt += 1

    for y in range(N):
        for x in range(M):
            if visited[y][x] != 0:
                matrix[y][x] -= visited[y][x] - 1
                if matrix[y][x] < 0:
                    matrix[y][x] = 0

    if cnt >= 2:
        print(res)
        break

    if cnt == 0:
        print(0)
        break

    res += 1
