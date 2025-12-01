T = int(input())


def isValid():
    for y in range(9):
        for x in range(9):
            v = matrix[y][x]
            if v != 0:
                matrix[y][x] = 0
                if not isAble(x, y, v):
                    return False
                matrix[y][x] = v
    return True


def isAble(x, y, value):
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
    for i in range(1, 10):
        if isAble(x, y, i):
            matrix[y][x] = i
            if dfs(x + 1, y):
                return 1
            matrix[y][x] = 0
    return 0


for _ in range(T):
    matrix = [list(map(int, input())) for _ in range(9)]

    if not isValid():
        print("Could not complete this grid.")
        if _ != T - 1:
            print()
        continue

    res = dfs(0, 0)
    if res:
        for row in matrix:
            print(*row, sep="")
    else:
        print("Could not complete this grid.")
    if _ != T - 1:
        print()
