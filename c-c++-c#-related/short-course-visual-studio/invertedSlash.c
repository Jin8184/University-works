#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int main()
{
	int id, pass;

	printf("아이디와 패스워드를 4개 숫자로 입력:\n");

	printf("id: ____\b\b\b\b");
	scanf("%d", &id);

	printf("pass: ____\b\b\b\b");  //b가 그... 아래 줄 입력하는대로 되는듯?
	scanf("%d", &pass);
	printf("\a입력된 아이디는 \"%d\"이고 패스워드는 \"%d\"입니다.", id, pass);  //a로 비프음 내기

	return 0;
}