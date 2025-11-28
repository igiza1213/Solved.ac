from itertools import combinations

L, C = map(int, input().split())
arr = list(input().split())
arr.sort()

res = []


for comb in combinations(arr, L):
    vowel = 0
    consonant = 0
    for c in comb:
        if c in ["a", "e", "i", "o", "u"]:
            vowel += 1
        else:
            consonant += 1
    if vowel >= 1 and consonant >= 2:
        res.append("".join(comb))

for row in res:
    print(row)
