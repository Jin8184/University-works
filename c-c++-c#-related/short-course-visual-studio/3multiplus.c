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

	printf("1부터 100까지의 모든 3의 배수의 합은 %d입니다.", sum);
	return 0;
}