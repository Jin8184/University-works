#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int main()
{
	float radius;
	float area;

	printf("���� ���� �Է� : ");
	scanf("%f", &radius);

	area = 3.141592 * radius * radius;
	printf("����: %f", area);
}