import fileinput
lines = []
for line in fileinput.input():
    lines.append(line)

for line in lines:
    max = ""
    max_count = 0
    prev = ""
    count = 0
    for c in line:
        if max == "":
            max = c
            max_count = 1
            prev = c
            count = 1
        elif c == prev:
            count += 1
        else:
            prev = c
            count = 1
        if count > max_count:
            max = c
            max_count = count
    print(max, max_count)
    v = ord(max) + max_count
    print(v)
    if v > 122:
        v = v % 122 + 96
    print(chr(v))