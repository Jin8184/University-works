using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace rainingF
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int i = 0;

            bool state = true; 

            
            while (state)
            {
                
                switch (i)
                {
                    case 0:
                        Console.ForegroundColor = ConsoleColor.Red;
                        break;
                    case 1:
                        Console.ForegroundColor = ConsoleColor.DarkRed;
                        break;
                    case 2:
                        Console.ForegroundColor = ConsoleColor.DarkYellow;
                        break;
                    case 3:
                        Console.ForegroundColor = ConsoleColor.Green;
                        break;
                    case 4:
                        Console.ForegroundColor = ConsoleColor.Cyan;
                        break;
                    case 5:
                        Console.ForegroundColor = ConsoleColor.Blue;
                        break;
                    case 6:
                        Console.ForegroundColor = ConsoleColor.Magenta;
                        break;
                }
                Console.Clear();
                
                for (c = 1; c > 11; c++)
                {

                }
                Console.WriteLine("lolol");

                i++;    //무지개 빨주노초파남보 카운트
                
                if (i > 6)
                {
                    i = 0;  //무지개 리셋
                }

                Thread.Sleep(10);
            }
        }
    }
}
