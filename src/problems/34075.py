N = int(input())
algo = []
for _ in range(N):
    name, d = input().split()
    algo.append((name, int(d)))

M = int(input())
mem = {}
for _ in range(M):
    name, t = input().split()
    mem[name] = int(t)

Q = int(input())
c = None

for _ in range(Q):
    query = input().strip().split()
    
    if query[1] == '-':
        c = query[0]
        print("hai!")
    else:
        t = mem[c]
        s_algo = sorted(algo, key=lambda x: (abs(x[1] - t), x[0]))
        algo1 = s_algo[0][0]
        algo2 = s_algo[1][0]
        print(f"{algo2} yori mo {algo1}")

