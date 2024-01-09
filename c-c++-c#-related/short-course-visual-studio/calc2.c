#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int add(int x, int y)
{
	return x + y;
}

int sub(int x, int y)
{
	return x - y;
}

int mul(int x, int y)
{
	return x * y;
}

int div(int x, int y)
{
	return x / y;
}

int mod(int x, int y)
{
	return x % y;
}

int main()
{
	int x, y;  //변수 a, c...? 함수선 x, y인데 일단은 x, y로
	char op;

	printf("숫자 x, 연산자, 숫자 y를 입력하십시오.(예: 3*2)\n");
	scanf("%d %c %d", &x, &op, &y); // 문자열 변수는 %c로 표현, char로 담아둠



	if (op == '+')
	{
		printf("%d", add(x, y));
	}
	else if (op == '-')
	{
		printf("%d", sub(x, y));
	}
	else if (op == '*')
	{
		printf("%d", mul(x, y));
	}
	else if (op == '%')
	{
		printf("%d", mod(x, y));
	}
	else if (op == '/')
	{
		if (y == 0)
		{
			printf("y가 0이면 x를 나눌 수 없습니다..");
			return 0;
		}
		else
		{
			printf("%d", div(x, y));
		}
	}

	return 0;

}