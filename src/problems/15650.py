N, M = map(int, input().split())

res = []


def func(s):
    if len(res) == M:
        print(" ".join(map(str, res)))
        return
    for i in range(s, N + 1):
        if i not in res:
            res.append(i)
            func(i + 1)
            res.pop()


func(1)
