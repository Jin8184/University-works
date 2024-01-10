using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace tictactoe
{
    internal class Program
    {

        public static void Introduction()
        {
            Console.ForegroundColor = ConsoleColor.Yellow;
        }


        static void Main(string[] args)
        {
            int players = 2;
            int input = 0;
            bool inputCorrect = true;

            Introduction();
        }
    }
}
