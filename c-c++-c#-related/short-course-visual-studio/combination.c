#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int combi(int n, int r) //�Լ��� �Լ� ���
{
	int result;
	result = fact(n) / ((fact(n - r) * fact(r)));
	return result;
}

int fact(int n) //���丮��
{
	int i;
	int result = 1; //�ʱ�ȭ?

	for (i = 1; i <= n; i++)
		result *= i;

	return result;
}

int main()
{
	int n, r, i, result = 0;

	printf("n�� r�� �Է��Ͻʽÿ�.\n");
	scanf("%d %d", &n, &r);

	printf("%dC%d : %d", n, r, combi(n, r)); //����, ��� ����� ���� ���� 1!!!! �ϴ� �������� ����

	return 0;
}