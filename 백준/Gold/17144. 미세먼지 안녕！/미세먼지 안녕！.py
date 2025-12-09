from copy import deepcopy

M, N, T = map(int, input().split())

matrix = [list(map(int, input().split())) for _ in range(M)]

con = []
dust = set()

direction = [(-1, 0), (0, 1), (1, 0), (0, -1)]

for y in range(M):
    for x in range(N):
        if matrix[y][x] == -1:
            con.append((x, y))
        if matrix[y][x] > 0:
            dust.add((x, y))


def diff(dust, matrix):
    new_matrix = deepcopy(matrix)
    d = deepcopy(dust)

    for x, y in dust:
        quot = matrix[y][x] // 5

        for dx, dy in direction:
            nx, ny = x + dx, y + dy

            if 0 <= nx < N and 0 <= ny < M and matrix[ny][nx] != -1:
                new_matrix[ny][nx] += quot
                new_matrix[y][x] -= quot
                d.add((nx, ny))

    return new_matrix, d
    print(matrix)


def air(matrix, dust):
    x, y = con[0]
    ox, oy = x, y
    for i in range(3, -1, -1):
        dx, dy = direction[i]
        nx, ny = x + dx, y + dy
        while 0 <= nx < N and 0 <= ny < oy + 1:
            matrix[ny][nx], matrix[y][x] = matrix[y][x], matrix[ny][nx]
            x, y = nx, ny
            nx, ny = x + dx, y + dy
    matrix[y][x + 1] = 0

    x, y = con[1]
    ox, oy = x, y
    for i in range(1, 5):
        dx, dy = direction[i % 4]
        nx, ny = x + dx, y + dy
        while 0 <= nx < N and oy <= ny < M:
            matrix[ny][nx], matrix[y][x] = matrix[y][x], matrix[ny][nx]
            x, y = nx, ny
            nx, ny = x + dx, y + dy

    matrix[y][x + 1] = 0

    new_d = set()
    for y in range(M):
        for x in range(N):
            if matrix[y][x] > 0:
                new_d.add((x, y))

    return new_d


for _ in range(T):
    matrix, dust = diff(dust, matrix)

    dust = air(matrix, dust)

print(sum(sum(row) for row in matrix) + 2)
