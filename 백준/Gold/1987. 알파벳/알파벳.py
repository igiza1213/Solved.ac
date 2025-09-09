N,M = map(int, input().split())

matrix = [list(input().strip()) for _ in range(N)]
direction = [(1,0),(0,1),(-1,0),(0,-1)]
visited = [0] * 26
res = 0
def dfs(y,x,cnt):
    global res
    for dx,dy in direction:
        nx,ny = x+dx,y+dy
        if nx<0 or nx >=M or ny<0 or ny >=N:
            continue
        if matrix[ny][nx] == visited[ord(matrix[ny][nx])-ord("A")]:
            continue
        visited[ord(matrix[ny][nx])-ord("A")] = matrix[ny][nx]
        dfs(ny,nx,cnt+1)
        visited[ord(matrix[ny][nx])-ord("A")] = 0
            
    res = max(res, cnt)

visited[ord(matrix[0][0])-ord("A")] = matrix[0][0]
dfs(0,0,0)
print(res+1)