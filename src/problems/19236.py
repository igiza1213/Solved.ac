from copy import deepcopy

matrix = []

for _ in range(4):
    a, ad, b, bd, c, cd, d, dd = map(int, input().split())
    matrix.append([[a, ad], [b, bd], [c, cd], [d, dd]])

ans = matrix[0][0][0]

loc = [0] * 17
loc[matrix[0][0][0]] = (-1, -1)

matrix[0][0][0] = 0

direction = [(0, -1), (-1, -1), (-1, 0), (-1, 1), (0, 1), (1, 1), (1, 0), (1, -1)]

for y in range(4):
    for x in range(4):
        loc[matrix[y][x][0]] = (x, y)


def get_next_shark(x, y, matrix):
    next_shark = []
    mul = 1
    d = matrix[y][x][1] - 1
    dx, dy = direction[d]

    while True:
        nx, ny = x + (dx * mul), y + (dy * mul)
        if not (0 <= nx < 4 and 0 <= ny < 4):
            break
        if matrix[ny][nx][0] != -1:
            next_shark.append((nx, ny))

        mul += 1

    return next_shark


def move_fish(matrix, loc):
    for i in range(1, 17):
        x, y = loc[i]

        if x == -1 and y == -1:
            continue

        d = matrix[y][x][1]
        for i in range(8):
            d = (d - 1 + i) % 8
            matrix[y][x][1] = d + 1
            dx, dy = direction[d]
            nx, ny = x + dx, y + dy

            if 0 <= nx < 4 and 0 <= ny < 4 and matrix[ny][nx][0] != 0:
                matrix[y][x], matrix[ny][nx] = matrix[ny][nx], matrix[y][x]
                loc[matrix[y][x][0]], loc[matrix[ny][nx][0]] = (x, y), (nx, ny)
                break


def move_shark(x, y, matrix, loc, res, next_shark):
    for nx, ny in next_shark:
        fish = matrix[ny][nx][0]
        if fish != -1:
            loc[fish] = (-1, -1)
            loc[0] = (nx, ny)
            matrix[ny][nx][0] = 0
            matrix[y][x][0] = -1
            dfs(matrix, loc, res + fish)


def dfs(matrix, loc, res):
    matrix = deepcopy(matrix)
    loc = deepcopy(loc)

    x, y = loc[0]

    move_fish(matrix, loc)

    next_shark = get_next_shark(x, y, matrix)

    if not next_shark:
        global ans
        ans = max(ans, res)
        return

    move_shark(x, y, matrix, loc, res, next_shark)


dfs(matrix, loc, ans)

print(ans)
