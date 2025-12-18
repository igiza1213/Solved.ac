T = int(input())


def recur(inL, inR, preL, preR):
    if inL > inR or preL > preR:
        return

    root = preOrder[preL]
    rootIdx = idxMap[root]
    leftSize = rootIdx - inL

    recur(inL, rootIdx - 1, preL + 1, preL + leftSize)
    recur(rootIdx + 1, inR, preL + leftSize + 1, preR)
    postOrder.append(root)


for _ in range(T):
    N = int(input())

    preOrder = list(map(int, input().split()))
    inOrder = list(map(int, input().split()))

    postOrder = []

    idxMap = {value: i for i, value in enumerate(inOrder)}

    recur(0, N - 1, 0, N - 1)

    print(*postOrder)
