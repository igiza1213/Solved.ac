matrix = [list(map(int, list(input().strip()))) for _ in range(9)]


def isAble(value: int, x: int, y: int):
    for i in range(9):
        if (
            value == matrix[y][i]
            or value == matrix[i][x]
            or value == matrix[(y // 3) * 3 + i // 3][(x // 3) * 3 + i % 3]
        ):
            return 0
    return 1


def dfs(x, y):
    if x == 9:
        x = 0
        y += 1
    if y == 9:
        return 1
    if matrix[y][x]:
        return dfs(x + 1, y)
    for value in range(1, 10):
        if isAble(value, x, y):
            matrix[y][x] = value
            if dfs(x + 1, y):
                return 1
            matrix[y][x] = 0
    return 0


dfs(0, 0)

for row in matrix:
    print("".join(map(str,row)))
