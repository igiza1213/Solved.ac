N, M = map(int, input().split())

res = []

def func():
    if len(res) == M:
        print(" ".join(map(str, res)))
        return
    for i in range(1, N + 1):
        res.append(i)
        func()
        res.pop()

func()
