#include<stdio.h>

int main()
{
	int x, y, z, sum;

	sum = 0;
	printf("3���� ������ �Է��ϼ���(x, y, z): ");
	scanf_s("%d %d %d", &x, &y, &z);
	sum += x;
	sum += y;
	sum += z;
	printf("3�� ������ ���� %d\n", sum);
	return 0;
}