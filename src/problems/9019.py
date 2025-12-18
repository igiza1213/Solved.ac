from collections import deque

T = int(input())
arr = [list(map(int, input().split())) for _ in range(T)]


def bfs(a, b):
    queue = deque([[a, "D"], [a, "S"], [a, "L"], [a, "R"]])
    visited = [0] * 10000
    visited[a] = 1
    while queue:
        a, f = queue.popleft()

        if f[-1] == "D":
            res = (a * 2) % 10000
        elif f[-1] == "S":
            res = 9999 if a == 0 else a - 1
        elif f[-1] == "L":
            res = (a % 1000) * 10 + a // 1000
        elif f[-1] == "R":
            res = (a % 10) * 1000 + a // 10

        if res == b:
            print(f)
            return

        if not visited[res]:
            visited[res] = 1
            queue.append([res, f + "D"])
            queue.append([res, f + "S"])
            queue.append([res, f + "L"])
            queue.append([res, f + "R"])


for a, b in arr:
    bfs(a, b)
