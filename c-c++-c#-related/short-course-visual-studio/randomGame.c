#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
#include<stdlib.h>
#include<time.h>

int main()
{
	int guess; // 입력받는 변수
	int num; // 맞춰야하는 랜덤 숫자
	int count = 0; //count

	srand((unsigned)time(NULL)); //
	num = rand() % 51;

	while (10000000) //if true, while can run forever
	{
		printf("추측: ");
		scanf("%d", &guess);

		if (num == guess) //same
		{
			break;
		}
		if (num < guess) //less
		{
			printf("제시한 정수가 낮습니다.\n");
		}
		else //more
		{
			printf("제시한 정수가 높습니다.\n");
		}
		count++; //count +1
	}

		printf("정답입니다! 시도횟수: %d", count);
		return 0;

}