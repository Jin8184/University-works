#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int x = 0;

int main()
{
	int x = 0; //input number(integer 2~9)
	int y = 1; //right side of multiple

	printf("2~9 안의 정수를 입력하십시오.\n"); //scan x
	scanf("%d", &x);

	if(x >= 2 && x <= 9)
	{  //define x is in 2~9
		for (y = 1; y <= 9; y++)
		{
			printf("%d*%d=%d\n", x, y, x * y);
		}
	}
	else
	{ //reject
		printf("숫자가 너무 크거나 작아요...");
	}

	return 0;
}