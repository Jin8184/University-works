using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Versioning;
using System.Text;
using System.Threading.Tasks;

namespace chap4Prac12
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] array = { 0, 0, 0, 0, 0 };
            int max = 0;
            int min;

            for (int i = 0; i < 5; i++) //숫자를 입력받는 반복문
            {
                Console.Write("숫자를 입력해주세요: ");
                //array[i] = int.Parse(Console.ReadLine());    
                // 아래 예외처리 추가함. https://stackoverflow.com/a/60593062 참조

                while (!int.TryParse(Console.ReadLine(), out array[i]))
                {
                    Console.Write("숫자 정수로 다시 입력하세요: ");
                }
            }
            Console.WriteLine("----------------------------");

            for (int i = 0; i < 5; i++) // MAX값을 구하는 반복문
            {
                if (max <= array[i])
                {
                    max = array[i];
                }
            }
            Console.Write("가장 큰 수: ");
            Console.Write(max);
            Console.Write("\n");



            min = array[0]; //min값을 배열 내 첫 숫자로 지정

            for (int i = 0; i < 5; i++) //MIN값을 구하는 반복문
            {
                if (min >= array[i])
                {
                    min = array[i];
                }
            }
            Console.Write("가장 작은 수: ");
            Console.Write(min);

            Console.ReadKey();
        }
    }
}
