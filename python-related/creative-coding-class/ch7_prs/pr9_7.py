dict = {}
key = 0
value = 0
while key != 'q':
    key = input('영어 단어를 입력하시오: ')
    if key == 'q':
        break
    elif key in dict:
        print('이미 존재합니다. 다시 입력하십시오.')
        continue

    value = input('한글 뜻을 입력하시오: ')
    dict[key] = value


print('영어사전 내용은 다음과 같습니다.', dict)