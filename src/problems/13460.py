from collections import deque

N, M = map(int, input().split())

matrix = [list(input().strip()) for _ in range(N)]


def move(x, y, dx, dy, matrix):
    cnt = 0

    while matrix[y + dy][x + dx] != "#" and matrix[y][x] != "O":
        x, y = x + dx, y + dy
        cnt += 1
        if matrix[y][x] == "O":
            break

    return x, y, cnt


def bfs(rx, ry, bx, by):
    queue = deque([[rx, ry, bx, by, 0]])
    visited = set()
    visited.add((rx, ry, bx, by))

    while queue:
        rx, ry, bx, by, cnt = queue.popleft()

        if cnt >= 10:
            return -1

        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nrx, nry, rcnt = move(rx, ry, dx, dy, matrix)
            nbx, nby, bcnt = move(bx, by, dx, dy, matrix)

            if matrix[nby][nbx] == "O":
                continue

            if matrix[nry][nrx] == "O":
                return cnt + 1

            if nrx == nbx and nry == nby:
                if rcnt > bcnt:
                    nrx, nry = nrx - dx, nry - dy
                else:
                    nbx, nby = nbx - dx, nby - dy

            if (nrx, nry, nbx, nby) not in visited:
                visited.add((nrx, nry, nbx, nby))
                queue.append((nrx, nry, nbx, nby, cnt + 1))
    return -1


for i in range(N):
    for j in range(M):
        if matrix[i][j] == "R":
            rx, ry = j, i
        if matrix[i][j] == "B":
            bx, by = j, i

print(bfs(rx, ry, bx, by))
