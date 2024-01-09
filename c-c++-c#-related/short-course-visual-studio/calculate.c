#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int main()
{
	int a, b; //dishmaking

	printf("정수 a를 입력하십시오.\n");
		scanf("%d", &a);

	printf("정수 b를 입력하십시오.\n");
		scanf("%d", &b);
		if (b>=1 || b<=-1)
		{
			printf("sum : %d\n\ndiff : %d\n\nmul : %d\n\ndiv : %d\n\nmod : %d", a + b, a - b, a * b, a / b, a % b);
		}
		else
		{
			printf("b가 0이면 나누기가 고장납니다...");
		}

		return 0;
}