#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int main()
{
	int a, b, c;
	int min = 0;

	printf("정수 a, b, c를 순서대로 입력하시오. ex) 1,2,3 \n");
	scanf("%d,%d,%d", &a, &b, &c);


	if (a > b) // compare a and b
	{
		if (b > c)// a is big, compare b and c
			min = c;
		else
			min = b;
	}
	else// b is big
	{
		if (a > c)// compare a n c
			min = c;//a is big
		else
			min = a;//smol
	}

	printf("min = %d", min);
}