#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
#include<stdlib.h>
#include<time.h>

int main()
{
	int guess; // �Է¹޴� ����
	int num; // ������ϴ� ���� ����
	int count = 0; //count

	srand((unsigned)time(NULL)); //
	num = rand() % 51;

	while (10000000) //if true, while can run forever
	{
		printf("����: ");
		scanf("%d", &guess);

		if (num == guess) //same
		{
			break;
		}
		if (num < guess) //less
		{
			printf("������ ������ �����ϴ�.\n");
		}
		else //more
		{
			printf("������ ������ �����ϴ�.\n");
		}
		count++; //count +1
	}

		printf("�����Դϴ�! �õ�Ƚ��: %d", count);
		return 0;

}