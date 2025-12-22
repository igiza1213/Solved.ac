N = int(input())

adj = [[] for _ in range(N + 1)]

for _ in range(N - 1):
    a, b, c = map(int, input().split())
    adj[a].append((b, c))
    adj[b].append((a, c))


def dfs(start, value):
    visited = [False] * (N + 1)
    visited[start] = True
    stack = [(start, value)]
    max_value = 0
    max_node = 0
    while stack:
        node, value = stack.pop()
        for next_node, next_value in adj[node]:
            if not visited[next_node]:
                visited[next_node] = True
                stack.append((next_node, value + next_value))
                if max_value < value + next_value:
                    max_value = value + next_value
                    max_node = next_node
    return max_value, max_node


_, node = dfs(1, 0)

print(dfs(node, 0)[0])
