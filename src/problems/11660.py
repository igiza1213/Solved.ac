N, M = map(int, input().split())

matrix = [list(map(int, input().split())) for _ in range(N)]

for _ in range(M):
    x1, y1, x2, y2 = map(int, input().split())