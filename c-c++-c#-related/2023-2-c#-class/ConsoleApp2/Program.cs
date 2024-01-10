using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /*
            Console.WriteLine("Hello, World!"[0]);
            Console.WriteLine("Hello, World!\n");
            Console.WriteLine(4 % 3);

            Console.WriteLine(true);

            // Console.ReadLine();

            */

            Console.WriteLine(DateTime.Now.Hour < 3 || 8 < DateTime.Now.Hour);  //or
            Console.WriteLine(3 < DateTime.Now.Hour &&  DateTime.Now.Hour < 8); //and
        }
    }
}