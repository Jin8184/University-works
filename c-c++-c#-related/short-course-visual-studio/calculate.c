#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int main()
{
	int a, b; //dishmaking

	printf("���� a�� �Է��Ͻʽÿ�.\n");
		scanf("%d", &a);

	printf("���� b�� �Է��Ͻʽÿ�.\n");
		scanf("%d", &b);
		if (b>=1 || b<=-1)
		{
			printf("sum : %d\n\ndiff : %d\n\nmul : %d\n\ndiv : %d\n\nmod : %d", a + b, a - b, a * b, a / b, a % b);
		}
		else
		{
			printf("b�� 0�̸� �����Ⱑ ���峳�ϴ�...");
		}

		return 0;
}