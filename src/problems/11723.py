import sys

m = int(sys.stdin.readline())
S = set()

for _ in range(m):
    com = sys.stdin.readline().strip().split()
    if len(com) == 1:
        if com[0] == "all":
            S = set([i for i in range(1, 21)])
        else:
            S = set()
    else:
        flag, n = com[0], com[1]
        n = int(n)

        if flag == "add":
            S.add(n)
        elif flag == "remove":
            S.discard(n)
        elif flag == "check":
            print(1 if n in S else 0)
        elif flag == "toggle":
            if n in S:
                S.discard(n)
            else:
                S.add(n)
    