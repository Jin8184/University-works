#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int main()
{
	int grade, n;
	float sum, ave;
	n = 0;
	sum = 0;
	grade = 0;
	printf("���� �� ���� �Է�\n");
//���� �Է¹޾Ƽ� �հ踦 ���ϰ� �л� ���� ��
	while (grade >= 0)
	{
		printf("������ �Է��Ͻÿ�: ");
		scanf("%d", &grade);
		sum += grade;
		n++;
	}
	sum = sum - grade; //������ ������ ����
	n--;//������ ������ ����
	//��� ����ؼ� ȭ�鿡 ���
	ave = sum / n;
	printf("������ ����� %f�Դϴ�.\n", ave);
	return 0;
}