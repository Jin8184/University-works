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
	int x, y;  //���� a, c...? �Լ��� x, y�ε� �ϴ��� x, y��
	char op;

	printf("���� x, ������, ���� y�� �Է��Ͻʽÿ�.(��: 3*2)\n");
	scanf("%d %c %d", &x, &op, &y); // ���ڿ� ������ %c�� ǥ��, char�� ��Ƶ�



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
			printf("y�� 0�̸� x�� ���� �� �����ϴ�..");
			return 0;
		}
		else
		{
			printf("%d", div(x, y));
		}
	}

	return 0;

}