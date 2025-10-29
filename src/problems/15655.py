N, M = map(int, input().split())
arr = list(map(int, input().split()))

arr.sort()

res = []


def func(s):
    if len(res) == M:
        print(" ".join(map(str, res)))
        return
    for i in range(s, N):
        if not arr[i] in res:
            res.append(arr[i])
            func(i + 1)
            res.pop()


func(0)
