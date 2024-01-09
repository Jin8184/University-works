#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int main()
{
	int year;

	printf("윤년인지 판단할 해를 입력하십시오.");
	scanf("%d", &year);

	if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
	printf("%d 년은 윤년입니다.", year);
	else
	{
		printf("%d 년은 윤년이 아닙니다.", year);
	}

}