using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;

namespace ConsoleApp5_snali
{
    internal class Program
    {
        static void Main(string[] args)
        {
            

            

            bool state = true;
            int x = 1;
            int y = 1;
            int s = 1;

            while (state)
            {
                

                ConsoleKeyInfo info = Console.ReadKey();
                switch (info.Key)
                {
                    case ConsoleKey.UpArrow:
                        //Console.WriteLine("위로 이동");
                        y -= 1;
                        break;
                    case ConsoleKey.RightArrow:
                        //Console.WriteLine("오른쪽으로 이동");
                        x += 1;
                        break;
                    case ConsoleKey.LeftArrow:
                        //Console.WriteLine("왼쪽으로 이동");
                        x -= 1;
                        break;
                    case ConsoleKey.DownArrow:
                        //Console.WriteLine("아래로 이동");
                        y += 1;
                        break;
                    case ConsoleKey.X:
                        state = false;
                        break;

                }


                Console.Clear();
                Console.SetCursorPosition(x, y);

                if (s % 3 == 0)
                {
                    Console.WriteLine("@__");
                }
                else if (s % 3 == 1)
                {
                    Console.WriteLine("@_^");
                }
                else { Console.WriteLine("@^_"); }

                s++;
                Thread.Sleep(100);
                    


            }
        }
    }
}
