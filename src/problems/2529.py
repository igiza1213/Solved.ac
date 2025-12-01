k = int(input())

arr = list(input().split())

ans = []


def isAble(res, num):
    if not res:
        return True
    A = res + [num]
    for i in range(len(A) - 1):
        if arr[i] == "<" and A[i] > A[i + 1]:
            return False
        if arr[i] == ">" and A[i] < A[i + 1]:
            return False
    return True


def dfs(res, depth):
    if depth == k + 1:
        ans.append(res[:])
        return
    for i in range(10):
        if i not in res:
            if isAble(res, i):
                res += [i]
                dfs(res, depth + 1)
                res.pop()


dfs([], 0)
ans = ["".join(map(str, value)) for value in ans]

print("".join(max(ans)))
print("".join(min(ans)))
