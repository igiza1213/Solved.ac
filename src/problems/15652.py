N, M = map(int, input().split())

res = []


def func(s):
    if len(res) == M:
        print(" ".join(map(str, res)))
        return
    for i in range(s, N + 1):
        res.append(i)
        func(i)
        res.pop()


func(1)
