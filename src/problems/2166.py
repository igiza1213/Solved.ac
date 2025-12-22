N = int(input())
points = [list(map(int, input().split())) for _ in range(N)]

area = 0
for i in range(N):
    x1, y1 = points[i]
    x2, y2 = points[(i + 1) % N]
    area += x1 * y2 - y1 * x2

print(f"{(abs(area) / 2):.1f}")
