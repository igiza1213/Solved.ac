from collections import deque

N, K = map(int, input().split())

res = dict()
dist = dict()

queue = deque()
queue.append((N, 0))
dist[N] = 0
res[N] = 1

while queue:
    x, d = queue.popleft()

    for nx in (x - 1, x + 1, x * 2):
        if 0 <= nx <= 100000:

            if nx not in dist:
                dist[nx] = d + 1
                res[nx] = res[x]
                queue.append((nx, d + 1))

            elif dist[nx] == d + 1:
                res[nx] = res.get(nx, 0) + res[x]

print(dist[K])
print(res.get(K, 0))
