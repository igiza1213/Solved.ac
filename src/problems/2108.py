import sys

input = sys.stdin.readline

N = int(input())
num_list = [int(input()) for _ in range(N)]
di = {}
for i in num_list:
    try:
        di[i] += 1
    except:
        di[i] = 1

avg = round(sum(num_list) / N)
print(avg)

sorted_list = sorted(num_list)
mid = sorted_list[int(len(sorted_list) / 2)]
print(mid)

max_value = max(list(di.values()))
max_list = [k for k, v in di.items() if v == max_value]
if len(max_list) > 1:
    print(sorted(max_list)[1])
else:
    print(sorted(max_list)[0])

range_value = max(num_list) - min(num_list)
print(range_value)
