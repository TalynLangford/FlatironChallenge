
fb = []
w = []
nums = []

cnt = 0
import fileinput
for line in fileinput.input():
    if cnt == 0:
        fb = line.split(" ")
        cnt += 1
    elif cnt == 1:
        w = line.split(" ")
        cnt += 1
    else:
        nums.append(int(line))

for n in nums:
    if (n % int(fb[0]) == 0 and n % int(fb[1]) == 0):
        print("{} {}".format(w[0], w[1])),
    elif(n % int(fb[0]) == 0):
        print(w[0])
    elif(n % int(fb[1]) == 0):
        print(w[1]),
    else:
        print(n)