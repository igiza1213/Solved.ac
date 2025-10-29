N, M = map(int, input().split())
arr = list(map(int, input().split()))

arr.sort()

visited = [False] * N

s = []


def func(res, t):
    if len(res) == M:
        s.append(list(res))
        return
    for i in range(t, N):
        res.append(arr[i])
        visited[i] = True
        func(res, i)
        res.pop()
        visited[i] = False


func([], 0)
s = sorted(list(set([tuple(i) for i in s])))
for i in s:
    print(*i)
