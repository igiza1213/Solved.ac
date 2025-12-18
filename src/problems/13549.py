import math
from collections import deque

N, K = map(int, input().split())

dist = [math.inf] * 100001


def bfs():
    queue = deque([N])
    dist[N] = 0
    while queue:
        x = queue.popleft()
        if x == K:
            return

        nx = x * 2

        if 0 <= nx <= 100000 and dist[nx] > dist[x]:
            dist[nx] = dist[x]
            queue.appendleft(nx)

        for nx in [x + 1, x - 1]:
            if 0 <= nx <= 100000 and dist[nx] > dist[x] + 1:
                dist[nx] = dist[x] + 1
                queue.append(nx)


bfs()
print(dist[K])
