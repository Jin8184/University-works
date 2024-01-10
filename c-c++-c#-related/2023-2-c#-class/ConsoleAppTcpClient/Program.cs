using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppTcpClient
{
    internal class Program
    {
        static void Main(string[] args)
        {
            try
            {
                string strRecvMsg;
                string strSendMsg;

                //TcpClient sockClient = new TcpClient("172.17.209.125", 9999); //소켓생성,커넥트 to linux
                //NetworkStream ns = sockClient.GetStream();
                //StreamReader sr = new StreamReader(ns);
                //StreamWriter sw = new StreamWriter(ns);

                //strRecvMsg = sr.ReadLine();         //서버로부터 접속 성공 메시지 수신
                //Console.WriteLine(strRecvMsg);

                while (true)
                {
                    TcpClient sockClient = new TcpClient("172.17.32.78", 9999); //소켓생성,커넥트 to linux
                    NetworkStream ns = sockClient.GetStream();
                    StreamReader sr = new StreamReader(ns);
                    StreamWriter sw = new StreamWriter(ns);
                    strSendMsg = Console.ReadLine();

                    sw.WriteLine(strSendMsg);
                    sw.Flush();
                    if (strSendMsg == "exit")
                    {
                        break;
                    }
                    strRecvMsg = sr.ReadLine();
                    Console.WriteLine(strRecvMsg);

                    sr.Close();
                    sw.Close();
                    ns.Close();
                    sockClient.Close();
                }
                //sr.Close();
                //sw.Close();
                //ns.Close();
                //sockClient.Close();

                Console.WriteLine("접속 종료!");
            }
            catch (SocketException e)
            {
                Console.WriteLine(e.ToString());
            }
        }
    }
}
