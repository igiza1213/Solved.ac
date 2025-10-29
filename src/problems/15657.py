N, M = map(int, input().split())
arr = list(map(int, input().split()))

arr.sort()

res = []


def func(s):
    if len(res) == M:
        print(" ".join(map(str, res)))
        return
    for i in range(s, N):
        res.append(arr[i])
        func(i)
        res.pop()


func(0)
