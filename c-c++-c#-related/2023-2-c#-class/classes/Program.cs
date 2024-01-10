using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace classes
{

    class Product
    {
        public static int counter = 0;
        public int id;
        public string name;
        public int price;

        public Product(string name, int price)
        {
            Product.counter = Product.counter + 1;
            this.id = counter;
            
            this.name = name;        //대소문자 차이로 달라짐... 일단은 소문자에 this 붙여서 가져오기
            this.price = price;
        }

        ~Product()
        {
            Console.WriteLine(this.name + "의 소멸자 호출");  //종료되면서 꺼져서 화면에 뜨지 않음
            System.Diagnostics.Trace.WriteLine(this.name + "의 소멸자 호출");  //시스템 로그? 여기서 볼 수 있음
        }
    }


    class Sample
    {
        public static int value;
        static Sample()
        {
            value = 10;
            Console.WriteLine("정적 생성자 호출");
        }
    }

    class Box
    {
        //public int Width { get; set; } //prop + tab
        private int width;  //propfull + tab, 제한된 인스턴스 변수는 외부에서 접근 불가
        public int Width    //속성은 대문자
        {
            get { return width; }
            set
            {
                if(value > 0) { width = value; }
                else { Console.WriteLine("자연수 입력"); }
            }
        }

    }
    internal class Program
    {
        static void Main(string[] args)
        {
            Product productA = new Product("감자", 2000);
            Product productB = new Product("고구마", 3000);

            Console.WriteLine(productA.id + ":" + productA.name);
            Console.WriteLine(productB.id + ":" + productB.name);
            Console.WriteLine(Product.counter+"개 생성");


            Console.WriteLine("첫번째 호출");
            Console.WriteLine(Sample.value);
            Console.WriteLine("두번째 호출");
            
            Sample sample = new Sample();
            Console.WriteLine("세번째 호출");

            Box box = new Box();
            box.Width = -10999;  //set
            Console.WriteLine(box.Width);   //get, 음수일 시 그냥 0 출력(값이 없어서 초기값)

            unsafe //프로젝트-> 빌드-> 안전하지 않은 옵션
            {
                int a = 10;
                int* input = &a;    //int주소 *, a의 주소 &
                *input = 20;
                Console.WriteLine(a);
            }


            Console.ReadLine();
        }
    }
}
