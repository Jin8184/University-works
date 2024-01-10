using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace chap4Prac10
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /*  원본 for문
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine("출력");
            }

            Console.ReadKey();
            */
            
            int i = 0;

            while (i<10)
            {
                Console.WriteLine("출력");
                i++;
            }
            // 출력 수를 보기 위하여 부득이하게 ReadKey를 추가함
            Console.ReadKey();
        }
    }
}
