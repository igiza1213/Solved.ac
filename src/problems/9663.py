N = int(input())

arr = [0] * N
res = 0


def pro2():
    used_col = [0] * N
    used_ltop = [0] * (N * 2)
    used_rtop = [0] * (N * 2)

    def recur(row):
        global res
        if row == N:
            res += 1
            return

        for col in range(N):
            if used_col[col]:
                continue
            if used_ltop[row - col + N]:
                continue
            if used_rtop[row + col]:
                continue

            used_col[col] = 1
            used_ltop[row - col + N] = 1
            used_rtop[row + col] = 1

            recur(row + 1)

            used_col[col] = 0
            used_ltop[row - col + N] = 0
            used_rtop[row + col] = 0

    recur(0)


pro2()

print(res)
