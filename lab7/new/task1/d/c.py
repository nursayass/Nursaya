n = int(input())
a = list(map(int, input().split()))
c = 0
for i in range (n):
    if(a[i] > 0):
        c += 1
print(c)