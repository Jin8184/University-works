#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int main()
{
	int id, pass;

	printf("���̵�� �н����带 4�� ���ڷ� �Է�:\n");

	printf("id: ____\b\b\b\b");
	scanf("%d", &id);

	printf("pass: ____\b\b\b\b");  //b�� ��... �Ʒ� �� �Է��ϴ´�� �Ǵµ�?
	scanf("%d", &pass);
	printf("\a�Էµ� ���̵�� \"%d\"�̰� �н������ \"%d\"�Դϴ�.", id, pass);  //a�� ������ ����

	return 0;
}