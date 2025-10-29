N, Y, X = map(int, input().split())


def func(y, x, value, k):
    """
    value = 2사분면 좌상단 수
    l = 가로,세로의 절반
    q = 사분면
    degree = 각 사분면의 단위(좌상단 수)
    """

    l = 2 ** (k - 1)
    if x < l and y < l:
        y, x = y, x
        q = 0
    elif x >= l and y < l:
        y, x = y, x - l
        q = 1
    elif x < l and y >= l:
        y, x = y - l, x
        q = 2
    else:
        y, x = y - l, x - l
        q = 3

    degree = 2 ** (2 * (k - 1))
    value = value + degree * q

    if k == 0:
        print(int(value))
        return

    func(y, x, value, k - 1)


func(Y, X, 0, N)
