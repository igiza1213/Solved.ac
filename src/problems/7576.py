from collections import deque
queue = deque()
a,b = map(int, input().split())
def mapPrint(map1):
    for i in map1:
        print(i)
    print("==============================")
map1 = []

for i in range(b):
    map1.append(list(map(int, input().split())))

li2 = [[-1,0],[0,-1],[1,0],[0,1]]
day = 0
br = True
for i in range(b):
    for j in range(a):
        if(map1[i][j] == 1):
            queue.append([i,j])
while queue:
    for _ in range(len(queue)):
        y,x = queue.popleft()
        for ny, nx in li2:
            if(0<= ny+y<b and 0 <= nx+x <a):
                if(map1[ny+y][nx+x] == 0):
                    map1[ny+y][nx+x] = 1
                    queue.append([ny+y, nx+x])
                map1[y][x] = -1
    day+=1
    mapPrint(map1)
day-=1
for i in map1:
    if 0 in i:
        day = -1
print(day)