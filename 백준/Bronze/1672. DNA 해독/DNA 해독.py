chart = [['A','C','A','G'], ['C','G','T','A'], ['A','T','C','G'], ['G','A','G','T']]

n = int(input())
arr = list(input())
table = str.maketrans('AGCT', '0123')

last = arr.pop()

for i in range(n-1):
    first = arr.pop()
    
    if first == last:
        continue
    else:
        last = chart[int(first.translate(table))][int(last.translate(table))]

print(last)