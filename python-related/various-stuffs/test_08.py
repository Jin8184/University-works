# 요약: 딕셔너리
#     key:value 형식으로 두 값을 한 쌍으로 표현한 데이터 형식
#     주의!!!! 입력한 데이터 순서대로 나열되지 않을 수 있음
#     메소드: keys(), values(), items()

#  중괄호로 묶음
score = {'KIM':90, 'LEE':85, 'JUN':95}

print(score)

# \'는 문자열을 나타내는 작은따옴표와 겹치므로 문자로 표현하기 위함?
# 모지??????
print('score[\'KIM\'] ==', score['KIM'])

score['HAN'] = 100
print(score)

print('score keys ==', score.keys())
print('score val ==', score.values())
print('score items ==', score.items())
