using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace chap5prac7
{

    class Person
    {
        public string name = "윤인성";
        public string add = "서울특별시 강서구";

        List<Pet> pets = new List<Pet>()
        {
            new Pet() { name = "구름", age = 7 },
            new Pet() { name = "별", age = 1 }
        };
    }

    class Pet
    {
        public string name;
        public int age;
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            

        }
    
    }
}
