#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int main()
{
	int i, n, sum;
	printf("�����Է� ����");
	scanf("%d", &n);

	i = 1;  //������ �ʱ�ȭ
	sum = 0;

	while (i <= n)
	{
		//sum = sum + i
		sum += i;
		//i = i + 1
		i++;
	}
	printf("1���� %d������ ���� %d�Դϴ�.", n, sum);
	return 0;
}
