using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace chap5prac8
{
    internal class Program
    {
        public static int ans;
        static void Main(string[] args)
        {
            Random rnd = new Random();
            int guessNum = rnd.Next(0, 1000);
            
            bool onoff = true;
            

            while(onoff)
            {
                Console.Write("숫자를 입력해주세요: ");

                string tempAns = Console.ReadLine();
                for(int i = 0; i < tempAns.Length; i++)
                {
                    if (tempAns[i] >= '0' && tempAns[i] <= '9')
                        ans = int.Parse(tempAns);

                    else
                        Console.WriteLine("정수를 입력해주세요.\n");
                    break;
                }

                if (ans > guessNum)
                {
                    Console.WriteLine(ans + "보다는 작은 숫자입니다.\n");
                }
                else if (ans < guessNum)
                {
                    Console.WriteLine(ans + "보다는 큰 숫자입니다.\n");
                }
                else if (ans == guessNum)
                {
                    Console.WriteLine("정답입니다!");
                    Console.ReadLine();
                    onoff = false;
                }
                else
                {
                    Console.WriteLine("???");
                }
            }

        }
    }
}
