#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int main()
{
	int x; //변수 선언
	int y;
	int sum;
	printf("x 입력 : ");
	scanf("%d", &x);
	printf("y 입력 : ");
	scanf("%d", &y);
	sum = x + y;
	printf("%d", sum);
	return 0;
}