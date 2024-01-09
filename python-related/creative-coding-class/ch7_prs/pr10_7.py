inp = 0
dict = {}

while inp != '0':
    inp = input('영어 단어를 입력하시오: ')
    key = len(inp)

    if key in dict:
        # dict.update({key : lst.append(inp)})
        # print("There is a same key in Dict!")
        dict[key].append(inp)  ###### This WAS difficult than I thought...
    elif inp == '0':
        break
    else:
        dict[key] = [inp]
    continue


print('입력한 내용은 다음과 같습니다.', dict)

