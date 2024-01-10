using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Lifetime;
using System.Text;
using System.Threading.Tasks;

namespace chap5prac5
{

    class Unit
    {
        public string name;
        public int mineral;
        public int suppliy;
        public int life;
        public int attack;

    }

    internal class Program
    {
        static void Main(string[] args)
        {
            Unit unit = new Unit();

            unit.name = "건설 로봇";
            unit.mineral = 50;
            unit.suppliy = 1;
            unit.life = 45;
            unit.attack = 5;
            
        }
    }

}
