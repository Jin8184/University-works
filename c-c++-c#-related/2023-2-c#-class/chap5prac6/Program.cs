using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace chap5prac6
{

    class Book
    {
        public string name;
        public string firstPub;
        public string writter;
        public string peonanyee;
        public string writtenIn;
        public string mainEdit;
        public string product;
        public string editor;
        public string design;

    }
    internal class Program
    {
        static void Main(string[] args)
        {
            Book book = new Book();

            book.name = "PHP 프로그래밍 입문";
            book.firstPub = "2013년 5월 20일";
            book.writter = "황재호";
            book.peonanyee = "김태현";
            book.writtenIn = "한빛아카데미(주";
            book.mainEdit = "김현용";
            book.product = "김이화";
            book.editor = "김이화";
            book.design = "여동일";
        }
    }
}
