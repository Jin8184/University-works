#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int combi(int n, int r) //함수에 함수 사용
{
	int result;
	result = fact(n) / ((fact(n - r) * fact(r)));
	return result;
}

int fact(int n) //팩토리얼
{
	int i;
	int result = 1; //초기화?

	for (i = 1; i <= n; i++)
		result *= i;

	return result;
}

int main()
{
	int n, r, i, result = 0;

	printf("n과 r을 입력하십시오.\n");
	scanf("%d %d", &n, &r);

	printf("%dC%d : %d", n, r, combi(n, r)); //계산기, 계산 결과와 맞지 않음 1!!!! 일단 과제부터 제출

	return 0;
}