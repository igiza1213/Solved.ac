from collections import deque

N = int(input())
K = int(input())

matrix = [[0] * N for _ in range(N)]
matrix[0][0] = 2

for _ in range(K):
    y, x = map(int, input().split())
    matrix[y - 1][x - 1] = 1

L = int(input())

dr = dict()

for _ in range(L):
    t, f = input().split()
    dr[int(t)] = 1 if f == "D" else -1

snake = deque([(0, 0)])

direction = [(1, 0), (0, 1), (-1, 0), (0, -1)]
r = 0
time = 0

while snake:
    time += 1
    x, y = snake[0]
    # move
    dx, dy = direction[r]
    nx, ny = x + dx, y + dy

    if 0 <= nx < N and 0 <= ny < N and matrix[ny][nx] != 2:
        snake.appendleft((nx, ny))
        if matrix[ny][nx] != 1:
            px, py = snake.pop()
            matrix[py][px] = 0
        matrix[ny][nx] = 2
        r = (r + dr.get(time, 0)) % 4
    else:
        break


print(time)
