#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int main()
{
	int grade, n;
	float sum, ave;
	n = 0;
	sum = 0;
	grade = 0;
	printf("종료 시 음수 입력\n");
//성적 입력받아서 합계를 구하고 학생 수를 셈
	while (grade >= 0)
	{
		printf("성적을 입력하시요: ");
		scanf("%d", &grade);
		sum += grade;
		n++;
	}
	sum = sum - grade; //마지막 데이터 제거
	n--;//마지막 데이터 제거
	//평균 계산해서 화면에 출력
	ave = sum / n;
	printf("성적의 평균은 %f입니다.\n", ave);
	return 0;
}