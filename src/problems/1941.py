from collections import deque
from itertools import combinations

matrix = [list(input().strip()) for _ in range(5)]
arr = []

for y in range(5):
    for x in range(5):
        arr.append([x, y, matrix[y][x]])


direction = [(1, 0), (-1, 0), (0, 1), (0, -1)]


def bfs(arr):
    s = set(arr)
    queue = deque([arr[0]])
    visited = {arr[0]}

    while queue:
        x, y = queue.popleft()
        for dx, dy in direction:
            nx, ny = x + dx, y + dy
            if (nx, ny) in s and (nx, ny) not in visited:
                visited.add((nx, ny))
                queue.append((nx, ny))

    return len(visited) == 7


def isAble(comb):
    if sum(1 for (_, _, c) in comb if c == "S") < 4:
        return False

    arr = [(x, y) for (x, y, _) in comb]

    return bfs(arr)


ans = 0
for comb in combinations(arr, 7):
    if isAble(comb):
        ans += 1

print(ans)
