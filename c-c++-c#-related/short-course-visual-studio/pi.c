#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int main()
{
	float radius;
	float area;

	printf("원의 면적 입력 : ");
	scanf("%f", &radius);

	area = 3.141592 * radius * radius;
	printf("면적: %f", area);
}