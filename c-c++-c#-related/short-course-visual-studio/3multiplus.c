#include<stdio.h>

int main()
{
	int sum, i; //sum=sum, i=count

	i = 1;
	sum = 0;

	while (i <= 100) //until 100
	{
		if (i % 3 == 0) //only count multiple of 3
		{
			sum = sum + i;
		}
		i++;
	}

	printf("1���� 100������ ��� 3�� ����� ���� %d�Դϴ�.", sum);
	return 0;
}