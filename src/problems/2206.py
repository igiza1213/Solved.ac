from collections import deque

N, M = map(int, input().split())

matrix = [list(map(int, input())) for _ in range(N)]

direction = [(0, 1), (1, 0), (0, -1), (-1, 0)]


def bfs():
    queue = deque([(0, 0, 0, 1)])

    visited = [[[0] * 2 for _ in range(M)] for _ in range(N)]
    visited[0][0][0] = 1

    while queue:
        x, y, f, dist = queue.popleft()
        if y == N - 1 and x == M - 1:
            return dist

        for dx, dy in direction:
            nx, ny = x + dx, y + dy
            if 0 <= nx < M and 0 <= ny < N:
                if matrix[ny][nx] == 0 and not visited[ny][nx][f]:
                    visited[ny][nx][f] = 1
                    queue.append((nx, ny, f, dist + 1))

                if matrix[ny][nx] == 1 and f == 0 and not visited[ny][nx][1]:
                    visited[ny][nx][1] = 1
                    queue.append((nx, ny, 1, dist + 1))

    return -1


print(bfs())
