from copy import deepcopy

N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]
res = 0


def move(matrix, dir):
    if dir == 0:  # 왼쪽
        for i in range(N):
            v = 0
            for j in range(1, N):
                if matrix[i][j]:
                    temp, matrix[i][j] = matrix[i][j], 0
                    if matrix[i][v] == 0:
                        matrix[i][v] = temp
                    elif matrix[i][v] == temp:
                        matrix[i][v] *= 2
                        v += 1
                    else:
                        v += 1
                        matrix[i][v] = temp
    elif dir == 1:  # 오른쪽
        for i in range(N):
            v = N - 1
            for j in range(N - 2, -1, -1):
                if matrix[i][j]:
                    temp, matrix[i][j] = matrix[i][j], 0
                    if matrix[i][v] == 0:
                        matrix[i][v] = temp
                    elif matrix[i][v] == temp:
                        matrix[i][v] *= 2
                        v -= 1
                    else:
                        v -= 1
                        matrix[i][v] = temp
    elif dir == 2:  # 위
        for j in range(N):
            v = 0
            for i in range(1, N):
                if matrix[i][j]:
                    temp, matrix[i][j] = matrix[i][j], 0
                    if matrix[v][j] == 0:
                        matrix[v][j] = temp
                    elif matrix[v][j] == temp:
                        matrix[v][j] *= 2
                        v += 1
                    else:
                        v += 1
                        matrix[v][j] = temp
    elif dir == 3:  # 아래
        for j in range(N):
            v = N - 1
            for i in range(N - 2, -1, -1):
                if matrix[i][j]:
                    temp, matrix[i][j] = matrix[i][j], 0
                    if matrix[v][j] == 0:
                        matrix[v][j] = temp
                    elif matrix[v][j] == temp:
                        matrix[v][j] *= 2
                        v -= 1
                    else:
                        v -= 1
                        matrix[v][j] = temp
    return matrix


def dfs(board, cnt):
    global res
    res = max(res, max(map(max, board)))
    if cnt == 5:
        return
    for i in range(4):
        b = move(deepcopy(board), i)
        dfs(b, cnt + 1)


dfs(arr, 0)
print(res)
