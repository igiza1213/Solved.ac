from collections import deque


def solve():
    p: str = str(input())
    n: int = int(input())
    if n:
        l: list = input()[1:-1].split(",")
    else:
        input()
        l = []

    queue = deque(l)

    c = 0
    for f in p:
        if f == "R":
            c = 1 - c
        if f == "D":
            if len(queue) == 0:
                print("error")
                return
            if c:
                queue.pop()
            else:
                queue.popleft()

    print("[" + ",".join(list(queue)[::-1] if p.count("R") % 2 else list(queue)) + "]")


T = int(input())
for t in range(T):
    solve()
