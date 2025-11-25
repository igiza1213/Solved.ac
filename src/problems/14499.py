N, M, y, x, K = map(int, input().split())

matrix = [list(map(int, input().split())) for _ in range(N)]
flag = list(map(int, input().split()))


dice = [0] * 6

direction = [(1, 0), (-1, 0), (0, -1), (0, 1)]

for f in flag:
    dx, dy = direction[f - 1]
    nx, ny = x + dx, y + dy

    if not (0 <= nx < M and 0 <= ny < N):
        continue

    if f == 1:  # 동
        dice[0], dice[5], dice[1], dice[4] = dice[4], dice[0], dice[5], dice[1]
    elif f == 2:  # 서
        dice[0], dice[4], dice[1], dice[5] = dice[5], dice[0], dice[4], dice[1]
    elif f == 3:  # 북
        dice[0], dice[2], dice[1], dice[3] = dice[3], dice[0], dice[2], dice[1]
    elif f == 4:  # 남
        dice[0], dice[3], dice[1], dice[2] = dice[2], dice[0], dice[3], dice[1]

    x, y = nx, ny

    if matrix[ny][nx] == 0:
        matrix[ny][nx] = dice[1]
    else:
        dice[1] = matrix[ny][nx]
        matrix[ny][nx] = 0

    print(dice[0])
