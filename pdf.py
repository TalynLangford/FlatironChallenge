import fileinput

header = True
word_dict = {}
body = []
to_print = []
for line in fileinput.input():
    if "=" not in line:
        header = False
    
    if header:
        kv = line.split("=")
        word_dict[kv[0]] = kv[1].strip('\n')
    else:
        body.append(line.strip('\n'))

# for word in word_dict:
#     print(word, word_dict[word])

# for line in body:
#     print(line)

#     max = ''
#     max_count = 0
#     prev = ''
#     count = 0
#     for c in line: 
#         if max == '':
#             max = 
    

for line in body:
    new_line = ""
    for word in line.split(' '):
        # print(word)
        if len(new_line) > 0:
                new_line+= " "
        if len(word) > 2 and word[0] == "%":
            if word[-1] == "%":
                target = word[1:-1]
            elif word[-2] == "%":
                target = word[1:-2]
            new_line += word_dict[target]
        else:
            new_line += word
    to_print.append(new_line)

for line in to_print:
    print(line)


