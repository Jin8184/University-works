#include<stdio.h>
#define DIST 149600000 //���� ��

int main()
{
	const int SPEED = 300000; //���� ��
	int time, min, sec;

	time = DIST / SPEED;

	min = time / 60;
	sec = time % 60;

	printf("%d�� %d��", min, sec);
}