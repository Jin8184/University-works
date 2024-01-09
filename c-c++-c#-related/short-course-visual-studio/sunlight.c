#include<stdio.h>
#define DIST 149600000 //단위 만

int main()
{
	const int SPEED = 300000; //단위 만
	int time, min, sec;

	time = DIST / SPEED;

	min = time / 60;
	sec = time % 60;

	printf("%d분 %d초", min, sec);
}