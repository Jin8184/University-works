#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int main()
{
	int i, n, sum;
	printf("정수입력 ㄱㄱ");
	scanf("%d", &n);

	i = 1;  //변수들 초기화
	sum = 0;

	while (i <= n)
	{
		//sum = sum + i
		sum += i;
		//i = i + 1
		i++;
	}
	printf("1부터 %d까지의 합은 %d입니다.", n, sum);
	return 0;
}
