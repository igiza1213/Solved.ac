import sys

input = sys.stdin.readline

N = int(input())

tree = {}
children = set()

for _ in range(N):
    value, left, right = map(int, input().split())
    tree[value] = (left, right)
    if left != -1:
        children.add(left)
    if right != -1:
        children.add(right)

root = 0
for node in tree:
    if node not in children:
        root = node
        break

x = 0
minX = {}
maxX = {}


def inOrder(node, depth):
    global x
    if node == -1:
        return

    left, right = tree[node]
    inOrder(left, depth + 1)

    x += 1
    if depth not in minX:
        minX[depth] = x
        maxX[depth] = x
    else:
        minX[depth] = min(minX[depth], x)
        maxX[depth] = max(maxX[depth], x)

    inOrder(right, depth + 1)


inOrder(root, 1)

depth, width = 1, 1
for d in minX:
    w = maxX[d] - minX[d] + 1
    if width == w:
        depth = min(depth, d)
        width = w
    elif width < w:
        depth = d
        width = w

print(depth, width)
