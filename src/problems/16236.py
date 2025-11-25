from collections import deque

N = int(input())

matrix = [list(map(int, input().split())) for _ in range(N)]

for i in range(N):
    for j in range(N):
        if matrix[j][i] == 9:
            sx, sy = i, j
            matrix[j][i] = 0


def bfs(sx, sy, size):
    queue = deque([[sx, sy, 0]])
    visited = set()
    visited.add((sx, sy))

    fishes = []
    dist = None

    while queue:
        x, y, d = queue.popleft()

        if dist is not None and d > dist:
            break

        for dx, dy in [(-1, 0), (0, -1), (1, 0), (0, 1)]:
            nx, ny = x + dx, y + dy

            if 0 <= nx < N and 0 <= ny < N and (nx, ny) not in visited:
                if matrix[ny][nx] <= size:
                    visited.add((nx, ny))
                    queue.append([nx, ny, d + 1])

                    if 0 < matrix[ny][nx] < size:
                        fishes.append((nx, ny, d + 1))
                        dist = d + 1

    if fishes:
        fishes.sort(key=lambda x: (x[2], x[1], x[0]))
        return fishes[0]

    return 0


size = 2
cnt = 0
exp = 0

while True:
    res = bfs(sx, sy, size)
    if not res:
        break

    sx, sy, dist = res
    matrix[sy][sx] = 0

    cnt += dist
    exp += 1

    if exp == size:
        size += 1
        exp = 0

print(cnt)
