#include<stdio.h>

int main()
{
	short a = 32767 + 1;
	short b = -32768 - 1;

	printf("%d %d", a, b);
	return 0;
}