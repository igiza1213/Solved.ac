from collections import deque

N, M = map(int, input().split())

matrix = [list(map(int, input().split())) for _ in range(N)]

direction = [(1, 0), (0, 1), (-1, 0), (0, -1)]

cnt = 0


def melt_check(visited):
    res = []
    for y in range(N):
        for x in range(M):
            if matrix[y][x] == 1:
                cnt = 0
                for dx, dy in direction:
                    nx, ny = x + dx, y + dy
                    if (nx, ny) in visited:
                        cnt += 1
                if cnt >= 2:
                    res.append((x, y))
    return res


def bfs():
    queue = deque([(0, 0)])
    visited = set()
    visited.add((0, 0))

    while queue:
        x, y = queue.popleft()

        for dx, dy in direction:
            nx, ny = x + dx, y + dy

            if 0 <= nx < M and 0 <= ny < N and (nx, ny) not in visited:
                if matrix[ny][nx] == 0:
                    visited.add((nx, ny))
                    queue.append((nx, ny))
    return visited


while True:
    visited = bfs()

    res = melt_check(visited)

    if not res:
        break

    for x, y in res:
        matrix[y][x] = 0

    cnt += 1

print(cnt)
