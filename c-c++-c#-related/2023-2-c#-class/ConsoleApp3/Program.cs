using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    internal class Program   //class(cam't set var)
    {
        static void Main(string[] args)    //method
        {

            var a = 2147483647;    //var = automatically set to int(depands on the stuff) default int, double. should add L, F behind to change to other...
            var b = 1.3545436;

            Console.WriteLine(a + b); //OVERFLOW!!!!!!!!!
            
            Console.WriteLine(int.MaxValue);
            Console.WriteLine(sizeof(int));

            string message = "\n";

            Console.WriteLine(message + "!!!!!!!!!!!!!!!");
            Console.WriteLine(a.GetType().Name);
            Console.WriteLine(a.GetType().FullName);

            Console.WriteLine((9275).GetType().FullName);
            Console.WriteLine((9275L).GetType().FullName);
            Console.WriteLine((9275.0f).GetType().FullName); //single = float(4byte)

            /*
            long leng = 314134314;
            int inty = leng;
            int inty = (int)leng;    // force to changes
            */

            Console.WriteLine(int.Parse("53").GetType());
            Console.WriteLine(b.ToString("0.000"));

            string changedA = a + "";
            Console.WriteLine(changedA.GetType());

            Console.ReadLine();    //only string



        }
    }
}
