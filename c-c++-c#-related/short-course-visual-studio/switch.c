#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int main()
{
	int number;
	scanf("%d", &number);

	switch (number)
	{
	case 0: // case������ ����� �Է� ����. ���� or ���� �ȵ�
		printf("��");
		break;
	case 1:
		printf("��");
		break;
	case 2:
		printf("��");
		break;
	case 3:
		printf("��");
		break;
	default:
		printf("�̳�ŭ");
		break;
	}
}