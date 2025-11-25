from collections import deque

T = int(input())

direction = [(-1, 0), (1, 0), (0, -1), (0, 1)]


def bfs(y,x):

    queue = deque([(y,x)])
    visited[y][x] = 1
    while queue:
        y, x = queue.popleft()
        for dy, dx in direction:
            ny, nx = y + dy, x + dx
            if 0 <= ny < M and 0 <= nx < N and not visited[ny][nx] and matrix[ny][nx]:
                visited[ny][nx] = 1
                queue.append((ny, nx))


for _ in range(T):
    M, N, K = map(int, input().split())
    matrix = [[0] * N for _ in range(M)]
    visited = [[0] * N for _ in range(M)]

    res = 0

    for _ in range(K):
        y, x = map(int, input().split())
        matrix[y][x] = 1

    for y in range(M):
        for x in range(N):
            if not visited[y][x] and matrix[y][x]:
                bfs(y, x)
                res += 1

    print(res)
