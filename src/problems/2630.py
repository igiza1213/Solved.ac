N = int(input())

matrix = [list(map(int, input().split())) for _ in range(N)]

res = [0, 0]


def isAble(matrix):
    return len(set([element for row in matrix for element in row])) == 1


def div_con(matrix):
    if isAble(matrix):
        res[matrix[0][0]] += 1
        return
    else:
        half = len(matrix) // 2
        div_con([row[:half] for row in matrix[:half]])
        div_con([row[half:] for row in matrix[:half]])
        div_con([row[:half] for row in matrix[half:]])
        div_con([row[half:] for row in matrix[half:]])
        return


div_con(matrix)
print(res[0])
print(res[1])
