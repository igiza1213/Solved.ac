N, M = map(int, input().split())
y, x, d = map(int, input().split())
matrix = [list(map(int, input().split())) for _ in range(N)]

direction = [(0, -1), (1, 0), (0, 1), (-1, 0)]


cnt = 0
while True:
    if matrix[y][x] == 0:
        matrix[y][x] = 2
        cnt += 1

    for _ in range(4):
        d = (d - 1) % 4
        dx, dy = direction[d]
        nx, ny = x + dx, y + dy
        if matrix[ny][nx] == 0:
            x, y = nx, ny
            break
    else:
        dx, dy = direction[(d + 2) % 4]
        nx, ny = x + dx, y + dy

        if matrix[ny][nx] == 1:
            break
        else:
            x, y = nx, ny


print(cnt)
