namespace WinFormsApp3
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Graphics g = this.panel1.CreateGraphics();
            Pen p = new Pen(Color.Blue, 3);

            Rectangle rec = new Rectangle(50, 50, 50, 50);
            g.DrawRectangle(p, rec);
        }
    }
}