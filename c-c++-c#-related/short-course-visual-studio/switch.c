#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int main()
{
	int number;
	scanf("%d", &number);

	switch (number)
	{
	case 0: // case문에는 상수만 입력 가능. 변수 or 수식 안됨
		printf("영");
		break;
	case 1:
		printf("일");
		break;
	case 2:
		printf("이");
		break;
	case 3:
		printf("삼");
		break;
	default:
		printf("겁나큼");
		break;
	}
}