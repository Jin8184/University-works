#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int x = 0;

int main()
{
	int x = 0; //input number(integer 2~9)
	int y = 1; //right side of multiple

	printf("2~9 ���� ������ �Է��Ͻʽÿ�.\n"); //scan x
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
		printf("���ڰ� �ʹ� ũ�ų� �۾ƿ�...");
	}

	return 0;
}