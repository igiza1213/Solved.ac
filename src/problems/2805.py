N, M = map(int, input().split())

trees = sorted(list(map(int, input().split())))

max_h = max(trees)
min_h = 0

res = 0


def isAble(mid):
    count = 0
    for tree in trees:
        if tree > mid:
            count += tree - mid
    return count >= M


while min_h <= max_h:
    mid = (max_h + min_h) // 2
    if isAble(mid):
        res = mid
        min_h = mid + 1
    else:
        max_h = mid - 1

print(res)
