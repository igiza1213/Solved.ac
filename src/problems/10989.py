import sys
input=sys.stdin.readline
N=int(input())
ll=[]
for i in range(10001):
  ll.append(0)
for i in range(N):
  n=int(input())
  ll[n]+=1
for i in range(10001):
  for j in range(ll[i]):
    print(i)