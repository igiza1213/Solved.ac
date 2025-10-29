N, M = map(int, input().split())
arr = list(map(int, input().split()))

arr.sort()

res = []


def func(s):
    if len(res) == M:
        print(" ".join(map(str, res)))
        return
    for i in arr:
        if not i in res:
            res.append(i)
            func(i)
            res.pop()


func(1)
