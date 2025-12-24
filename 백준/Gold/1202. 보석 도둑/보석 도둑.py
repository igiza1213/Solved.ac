import heapq

N, K = map(int, input().split())

gems = [list(map(int, input().split())) for _ in range(N)]
bags = [int(input()) for _ in range(K)]

gems.sort(key=lambda x: x[0], reverse=True)
bags.sort(reverse=True)

ans = 0

pq = []

while bags:
    bag = bags.pop()
    while gems:
        w, v = gems.pop()
        if w <= bag:
            heapq.heappush(pq, -v)
        else:
            gems.append([w, v])
            break
    if pq:
        ans -= heapq.heappop(pq)


print(ans)
