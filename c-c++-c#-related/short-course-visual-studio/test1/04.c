#include<stdio.h>

int main() {
	int dan, i;

	printf("출력할 단 입력\n");
	scanf_s("%d", &dan);

	for (i = 1; i <= 9; i++) {
		printf("%d * %d = %d\n", dan, i, dan * i);
	}

	return 0;
}