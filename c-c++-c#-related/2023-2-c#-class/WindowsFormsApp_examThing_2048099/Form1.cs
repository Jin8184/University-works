using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp_examThing
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (float.TryParse(inchBox.Text, out float val))
                cmLabel.Text = (float.Parse(inchBox.Text) * 2.54).ToString();
            else
                cmLabel.Text = "ERROR";
        }

        private void inchBox_KeyPress(object sender, KeyPressEventArgs e)
        {
            TextBox daString = sender as TextBox;   // The texts inside of the box

            if (!(char.IsDigit(e.KeyChar) || e.KeyChar == Convert.ToChar(Keys.Back) || e.KeyChar == Convert.ToChar(46)))
            {
                e.Handled = true;
            }

            if (e.KeyChar == '.' && (daString).Text.IndexOf('.') != -1)    
                // If the pressed char is period AND found period in the index
                // (in textbox. will return -1 if it could not find stuff),
                // Deny the next(in code) keypress.
            {
                e.Handled = true;
            }
        }
    }
}
