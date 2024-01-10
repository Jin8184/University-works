using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace chap5prac9
{
    class ChickenSearch //치킨집 검색 프로그램
    {
        public string myLocation; //자신의 위치
        public string shopLocation; //치킨집의 위치
        public string shopName; //치킨집의 이름
        public int shopRate;    //치킨집의 평점
        public string mainMenu; //치킨집의 간판 메뉴
    }

    class ParkingManage //주차관리시스템
    {
        public int carNum;  //차량번호
        public string parkIn;   //입차시간
        public string parkOut;  //출차시간
        public int parkFee; //시간당 주차료
        public int parkOur; //총 주차 시간
    }

    class BookManage    //도서 관리 시스템
    {
        public int ISBN;    //도서번호
        public string auth; //저자
        public string publisher;    //출판사
        public string pubDate;  //출판일
        public float shelfNum;  //서가번호
    }

    class SNService //SNS
    {
        public string id;       //아이디
        private string password;//비밀번호
        public string name; //닉네임
        public int mobile;  //전화번호
        public string email;//이메일
    }


    internal class Program
    {
        static void Main(string[] args)
        {
        }
    }
}
