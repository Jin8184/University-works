namespace ConsoleApp4
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

            long start = DateTime.Now.Ticks;
            long count = 0;

            while (start + (10000000) > DateTime.Now.Ticks)
            {
                count++;
            }
            Console.WriteLine(count + " time(s) repeated.\n");

            string input = "Potato Tomato";
            Console.WriteLine(input.ToLower());
            Console.WriteLine(input.ToUpper());
            Console.WriteLine(input+'\n');   // non destructive method(ToLower, ToUpper etc). do not change the original text

            string input2 = "감자 고구마      토마토,apple";
            string[] outputs = input2.Split(new char[] { ' ' , ','}, StringSplitOptions.RemoveEmptyEntries);    // the option remove meanless spaces.

            foreach (string output in outputs)
            {
                Console.WriteLine(output);
            }
        }
    }
}