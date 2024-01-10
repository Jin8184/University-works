using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsForms_TcpClient
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string strRecvMsg;
            string strSendMsg;

            TcpClient sockClient = new TcpClient("172.17.32.78", 9999); //소켓생성,커넥트 to linux
            NetworkStream ns = sockClient.GetStream();
            StreamReader sr = new StreamReader(ns);
            StreamWriter sw = new StreamWriter(ns);

            //strSendMsg = Console.ReadLine();
            strSendMsg = textBox1.Text; //send the text in the box

            sw.Write(strSendMsg);   //writeline은 뒤에 엔터가 붙음(2글자 추가 \n, +100이 안 붙게 되어버림)
            sw.Flush();

            strRecvMsg = sr.ReadLine();
            //Console.WriteLine(strRecvMsg);
            label1.Text = strRecvMsg;

            sr.Close();
            sw.Close();
            ns.Close();
            sockClient.Close();
            
        }

        private void button2_Click(object sender, EventArgs e)
        {
            string strRecvMsg;
            string strSendMsg;

            TcpClient sockClient = new TcpClient("172.17.32.78", 9999); //소켓생성,커넥트 to linux
            NetworkStream ns = sockClient.GetStream();
            StreamReader sr = new StreamReader(ns);
            StreamWriter sw = new StreamWriter(ns);

            //strSendMsg = Console.ReadLine();
            strSendMsg = button2.Text; //send the text in the box

            sw.Write(strSendMsg);   //writeline은 뒤에 엔터가 붙음(2글자 추가 \n, +100이 안 붙게 되어버림)
            sw.Flush();

            strRecvMsg = sr.ReadLine();
            //Console.WriteLine(strRecvMsg);
            label1.Text = strRecvMsg;

            sr.Close();
            sw.Close();
            ns.Close();
            sockClient.Close();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            string strRecvMsg;
            string strSendMsg;

            TcpClient sockClient = new TcpClient("172.17.32.78", 9999); //소켓생성,커넥트 to linux
            NetworkStream ns = sockClient.GetStream();
            StreamReader sr = new StreamReader(ns);
            StreamWriter sw = new StreamWriter(ns);

            //strSendMsg = Console.ReadLine();
            strSendMsg = button3.Text; //send the text in the box

            sw.Write(strSendMsg);   //writeline은 뒤에 엔터가 붙음(2글자 추가 \n, +100이 안 붙게 되어버림)
            sw.Flush();

            strRecvMsg = sr.ReadLine();
            //Console.WriteLine(strRecvMsg);
            label1.Text = strRecvMsg;

            sr.Close();
            sw.Close();
            ns.Close();
            sockClient.Close();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            string strRecvMsg;
            string strSendMsg;

            TcpClient sockClient = new TcpClient("172.17.32.78", 9999); //소켓생성,커넥트 to linux
            NetworkStream ns = sockClient.GetStream();
            StreamReader sr = new StreamReader(ns);
            StreamWriter sw = new StreamWriter(ns);

            //strSendMsg = Console.ReadLine();
            strSendMsg = button4.Text; //send the text in the box

            sw.Write(strSendMsg);   //writeline은 뒤에 엔터가 붙음(2글자 추가 \n, +100이 안 붙게 되어버림)
            sw.Flush();

            strRecvMsg = sr.ReadLine();
            //Console.WriteLine(strRecvMsg);
            label1.Text = strRecvMsg;

            sr.Close();
            sw.Close();
            ns.Close();
            sockClient.Close();
        }
    }
}
