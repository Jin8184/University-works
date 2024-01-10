using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1_calc
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void buttonAdd_Click(object sender, EventArgs e)
        {
            // Add
            textBox3.Text = (double.Parse(textBox1.Text) + double.Parse(textBox2.Text)).ToString();
        }

        private void textBox1_KeyPress(object sender, KeyPressEventArgs e)
        {
            TextBox daString = sender as TextBox;
            if (!(char.IsDigit(e.KeyChar) || e.KeyChar == Convert.ToChar(Keys.Back) || e.KeyChar == '.'))
            {
                e.Handled = true;
            }
            if (e.KeyChar == '.' && (daString).Text.IndexOf('.') != -1)
            {
                e.Handled = true;
            }
        }

        private void textBox2_KeyPress(object sender, KeyPressEventArgs e)
        {
            TextBox daString = sender as TextBox;
            if (!(char.IsDigit(e.KeyChar) || e.KeyChar == Convert.ToChar(Keys.Back) || e.KeyChar == '.'))
            {
                e.Handled = true;
            }
            if (e.KeyChar == '.' && (daString).Text.IndexOf('.') != -1)
            {
                e.Handled = true;
            }
        }

        private void buttonSub_Click(object sender, EventArgs e)
        {
            // Subtract
            textBox3.Text = (double.Parse(textBox1.Text) - double.Parse(textBox2.Text)).ToString();
        }

        private void buttonMul_Click(object sender, EventArgs e)
        {
            // Multiply
            textBox3.Text = (double.Parse(textBox1.Text) * double.Parse(textBox2.Text)).ToString();
        }

        private void buttonDiv_Click(object sender, EventArgs e)
        {
            // Divide
            textBox3.Text = (double.Parse(textBox1.Text) / double.Parse(textBox2.Text)).ToString();
        }

        private void buttonRad2Cir_Click(object sender, EventArgs e)
        {
            // Radius of the circle
            textBox5.Text = (double.Parse(textBox4.Text) * 2 * Math.PI).ToString();
        }

        private void buttonRad2Sur_Click(object sender, EventArgs e)
        {
            // Surface of the circle
            textBox5.Text = (Math.Pow((double.Parse(textBox4.Text)), 2) * Math.PI).ToString();
        }

        private void buttonInch2Cm_Click(object sender, EventArgs e)
        {
            // inch to cm
            textBox5.Text = (double.Parse(textBox4.Text) * 2.54).ToString();
        }

        private void buttonKg2Poun_Click(object sender, EventArgs e)
        {
            // kg to pound
            textBox5.Text = (double.Parse(textBox4.Text) * 2.20462).ToString();
        }

        private void textBox4_KeyPress(object sender, KeyPressEventArgs e)
        {
            TextBox daString = sender as TextBox;
            if (!(char.IsDigit(e.KeyChar) || e.KeyChar == Convert.ToChar(Keys.Back) || e.KeyChar == '.'))
            {
                e.Handled = true;
            }
            if (e.KeyChar == '.' && (daString).Text.IndexOf('.') != -1)
            {
                e.Handled = true;
            }
        }

        private void radioButtonInch2cm_CheckedChanged(object sender, EventArgs e)
        {
            labelBefore.Text = "인치";
            labelAfter.Text = "cm";
        }

        private void radioButtonCm2Inch_CheckedChanged(object sender, EventArgs e)
        {
            labelBefore.Text = "cm";
            labelAfter.Text = "인치";
        }

        private void radioButtonKg2Pound_CheckedChanged(object sender, EventArgs e)
        {
            labelBefore.Text = "kg";
            labelAfter.Text = "pound";
        }

        private void radioButtonPound2Kg_CheckedChanged(object sender, EventArgs e)
        {
            labelBefore.Text = "pound";
            labelAfter.Text = "kg";
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (radioButtonInch2cm.Checked)
            {
                textBoxAf.Text = (double.Parse(textBoxBef.Text) * 2.54).ToString();
            }
            else if (radioButtonCm2Inch.Checked)
            {
                textBoxAf.Text = (double.Parse(textBoxBef.Text) * 0.393701).ToString();
            }
            else if (radioButtonKg2Pound.Checked)
            {
                textBoxAf.Text = (double.Parse(textBoxBef.Text) * 2.20462).ToString();
            }
            else if (radioButtonPound2Kg.Checked)
            {
                textBoxAf.Text = (double.Parse(textBoxBef.Text) * 0.453592).ToString();
            }
            else
            {
                textBoxAf.Text = "ERROR";
                textBoxBef.Text = "ERROR";
                // runtime error, compact, readability EVERYTHING IS IMPORTANT
                // If you suck at code, be a goddamn PM(Project manager!!!!!!!!)
            }
        }
    }
}
