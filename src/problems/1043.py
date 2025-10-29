N, M = map(int, input().split())
parent = [i for i in range(N + 1)]

know = list(map(int, input().split()))[1:]

party = [list(map(int, input().split()))[1:] for _ in range(M)]


def find(x):
    if x == parent[x]:
        return x
    parent[x] = find(parent[x])
    return parent[x]


def union(a, b):
    a = find(a)
    b = find(b)
    parent[b] = a


for p in party:
    for i in range(1, len(p)):
        union(p[0], p[i])

true_roots = set(find(k) for k in know)

result = 0

for p in party:
    if any(find(person) in true_roots for person in p):
        continue
    result += 1

print(result)
