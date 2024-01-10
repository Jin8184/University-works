namespace WindowsFormsApp1_calc
{
    partial class Form1
    {
        /// <summary>
        /// 필수 디자이너 변수입니다.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 사용 중인 모든 리소스를 정리합니다.
        /// </summary>
        /// <param name="disposing">관리되는 리소스를 삭제해야 하면 true이고, 그렇지 않으면 false입니다.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form 디자이너에서 생성한 코드

        /// <summary>
        /// 디자이너 지원에 필요한 메서드입니다. 
        /// 이 메서드의 내용을 코드 편집기로 수정하지 마세요.
        /// </summary>
        private void InitializeComponent()
        {
            this.label1 = new System.Windows.Forms.Label();
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.buttonAdd = new System.Windows.Forms.Button();
            this.buttonSub = new System.Windows.Forms.Button();
            this.buttonMul = new System.Windows.Forms.Button();
            this.buttonDiv = new System.Windows.Forms.Button();
            this.textBox2 = new System.Windows.Forms.TextBox();
            this.textBox3 = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.textBox4 = new System.Windows.Forms.TextBox();
            this.textBox5 = new System.Windows.Forms.TextBox();
            this.buttonInch2Cm = new System.Windows.Forms.Button();
            this.buttonKg2Poun = new System.Windows.Forms.Button();
            this.buttonRad2Cir = new System.Windows.Forms.Button();
            this.buttonRad2Sur = new System.Windows.Forms.Button();
            this.radioButtonInch2cm = new System.Windows.Forms.RadioButton();
            this.radioButtonCm2Inch = new System.Windows.Forms.RadioButton();
            this.radioButtonKg2Pound = new System.Windows.Forms.RadioButton();
            this.radioButtonPound2Kg = new System.Windows.Forms.RadioButton();
            this.labelBefore = new System.Windows.Forms.Label();
            this.button1 = new System.Windows.Forms.Button();
            this.labelAfter = new System.Windows.Forms.Label();
            this.textBoxBef = new System.Windows.Forms.TextBox();
            this.textBoxAf = new System.Windows.Forms.TextBox();
            this.radioButton1 = new System.Windows.Forms.RadioButton();
            this.radioButton2 = new System.Windows.Forms.RadioButton();
            this.panel1 = new System.Windows.Forms.Panel();
            this.panel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(29, 52);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(31, 12);
            this.label1.TabIndex = 0;
            this.label1.Text = "Calc";
            // 
            // textBox1
            // 
            this.textBox1.Location = new System.Drawing.Point(46, 107);
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new System.Drawing.Size(100, 21);
            this.textBox1.TabIndex = 1;
            this.textBox1.Text = "0";
            this.textBox1.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            this.textBox1.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.textBox1_KeyPress);
            // 
            // buttonAdd
            // 
            this.buttonAdd.Location = new System.Drawing.Point(182, 85);
            this.buttonAdd.Name = "buttonAdd";
            this.buttonAdd.Size = new System.Drawing.Size(75, 23);
            this.buttonAdd.TabIndex = 4;
            this.buttonAdd.Text = "+";
            this.buttonAdd.UseVisualStyleBackColor = true;
            this.buttonAdd.Click += new System.EventHandler(this.buttonAdd_Click);
            // 
            // buttonSub
            // 
            this.buttonSub.Location = new System.Drawing.Point(182, 115);
            this.buttonSub.Name = "buttonSub";
            this.buttonSub.Size = new System.Drawing.Size(75, 23);
            this.buttonSub.TabIndex = 5;
            this.buttonSub.Text = "-";
            this.buttonSub.UseVisualStyleBackColor = true;
            this.buttonSub.Click += new System.EventHandler(this.buttonSub_Click);
            // 
            // buttonMul
            // 
            this.buttonMul.Location = new System.Drawing.Point(182, 145);
            this.buttonMul.Name = "buttonMul";
            this.buttonMul.Size = new System.Drawing.Size(75, 23);
            this.buttonMul.TabIndex = 6;
            this.buttonMul.Text = "*";
            this.buttonMul.UseVisualStyleBackColor = true;
            this.buttonMul.Click += new System.EventHandler(this.buttonMul_Click);
            // 
            // buttonDiv
            // 
            this.buttonDiv.Location = new System.Drawing.Point(182, 175);
            this.buttonDiv.Name = "buttonDiv";
            this.buttonDiv.Size = new System.Drawing.Size(75, 23);
            this.buttonDiv.TabIndex = 7;
            this.buttonDiv.Text = "/";
            this.buttonDiv.UseVisualStyleBackColor = true;
            this.buttonDiv.Click += new System.EventHandler(this.buttonDiv_Click);
            // 
            // textBox2
            // 
            this.textBox2.Location = new System.Drawing.Point(46, 134);
            this.textBox2.Name = "textBox2";
            this.textBox2.Size = new System.Drawing.Size(100, 21);
            this.textBox2.TabIndex = 8;
            this.textBox2.Text = "0";
            this.textBox2.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            this.textBox2.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.textBox2_KeyPress);
            // 
            // textBox3
            // 
            this.textBox3.Location = new System.Drawing.Point(282, 124);
            this.textBox3.Name = "textBox3";
            this.textBox3.ReadOnly = true;
            this.textBox3.Size = new System.Drawing.Size(100, 21);
            this.textBox3.TabIndex = 9;
            this.textBox3.Text = "0";
            this.textBox3.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(29, 248);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(40, 12);
            this.label2.TabIndex = 10;
            this.label2.Text = "metric";
            // 
            // textBox4
            // 
            this.textBox4.Location = new System.Drawing.Point(46, 308);
            this.textBox4.Name = "textBox4";
            this.textBox4.Size = new System.Drawing.Size(100, 21);
            this.textBox4.TabIndex = 11;
            this.textBox4.Text = "0";
            this.textBox4.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            this.textBox4.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.textBox4_KeyPress);
            // 
            // textBox5
            // 
            this.textBox5.Location = new System.Drawing.Point(282, 308);
            this.textBox5.Name = "textBox5";
            this.textBox5.ReadOnly = true;
            this.textBox5.Size = new System.Drawing.Size(100, 21);
            this.textBox5.TabIndex = 12;
            this.textBox5.Text = "0";
            this.textBox5.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            // 
            // buttonInch2Cm
            // 
            this.buttonInch2Cm.Location = new System.Drawing.Point(173, 259);
            this.buttonInch2Cm.Name = "buttonInch2Cm";
            this.buttonInch2Cm.Size = new System.Drawing.Size(93, 23);
            this.buttonInch2Cm.TabIndex = 13;
            this.buttonInch2Cm.Text = "inch->cm";
            this.buttonInch2Cm.UseVisualStyleBackColor = true;
            this.buttonInch2Cm.Click += new System.EventHandler(this.buttonInch2Cm_Click);
            // 
            // buttonKg2Poun
            // 
            this.buttonKg2Poun.Location = new System.Drawing.Point(173, 288);
            this.buttonKg2Poun.Name = "buttonKg2Poun";
            this.buttonKg2Poun.Size = new System.Drawing.Size(93, 23);
            this.buttonKg2Poun.TabIndex = 14;
            this.buttonKg2Poun.Text = "Kg->Pound";
            this.buttonKg2Poun.UseVisualStyleBackColor = true;
            this.buttonKg2Poun.Click += new System.EventHandler(this.buttonKg2Poun_Click);
            // 
            // buttonRad2Cir
            // 
            this.buttonRad2Cir.Location = new System.Drawing.Point(173, 317);
            this.buttonRad2Cir.Name = "buttonRad2Cir";
            this.buttonRad2Cir.Size = new System.Drawing.Size(93, 23);
            this.buttonRad2Cir.TabIndex = 15;
            this.buttonRad2Cir.Text = "반지름>둘레";
            this.buttonRad2Cir.UseVisualStyleBackColor = true;
            this.buttonRad2Cir.Click += new System.EventHandler(this.buttonRad2Cir_Click);
            // 
            // buttonRad2Sur
            // 
            this.buttonRad2Sur.Location = new System.Drawing.Point(173, 346);
            this.buttonRad2Sur.Name = "buttonRad2Sur";
            this.buttonRad2Sur.Size = new System.Drawing.Size(93, 23);
            this.buttonRad2Sur.TabIndex = 16;
            this.buttonRad2Sur.Text = "반지름>면적";
            this.buttonRad2Sur.UseVisualStyleBackColor = true;
            this.buttonRad2Sur.Click += new System.EventHandler(this.buttonRad2Sur_Click);
            // 
            // radioButtonInch2cm
            // 
            this.radioButtonInch2cm.AutoSize = true;
            this.radioButtonInch2cm.Checked = true;
            this.radioButtonInch2cm.Location = new System.Drawing.Point(26, 16);
            this.radioButtonInch2cm.Name = "radioButtonInch2cm";
            this.radioButtonInch2cm.Size = new System.Drawing.Size(87, 16);
            this.radioButtonInch2cm.TabIndex = 17;
            this.radioButtonInch2cm.TabStop = true;
            this.radioButtonInch2cm.Text = "인치 -> cm";
            this.radioButtonInch2cm.UseVisualStyleBackColor = true;
            this.radioButtonInch2cm.CheckedChanged += new System.EventHandler(this.radioButtonInch2cm_CheckedChanged);
            // 
            // radioButtonCm2Inch
            // 
            this.radioButtonCm2Inch.AutoSize = true;
            this.radioButtonCm2Inch.Location = new System.Drawing.Point(26, 38);
            this.radioButtonCm2Inch.Name = "radioButtonCm2Inch";
            this.radioButtonCm2Inch.Size = new System.Drawing.Size(87, 16);
            this.radioButtonCm2Inch.TabIndex = 18;
            this.radioButtonCm2Inch.Text = "cm -> 인치";
            this.radioButtonCm2Inch.UseVisualStyleBackColor = true;
            this.radioButtonCm2Inch.CheckedChanged += new System.EventHandler(this.radioButtonCm2Inch_CheckedChanged);
            // 
            // radioButtonKg2Pound
            // 
            this.radioButtonKg2Pound.AutoSize = true;
            this.radioButtonKg2Pound.Location = new System.Drawing.Point(26, 60);
            this.radioButtonKg2Pound.Name = "radioButtonKg2Pound";
            this.radioButtonKg2Pound.Size = new System.Drawing.Size(93, 16);
            this.radioButtonKg2Pound.TabIndex = 19;
            this.radioButtonKg2Pound.Text = "kg -> pound";
            this.radioButtonKg2Pound.UseVisualStyleBackColor = true;
            this.radioButtonKg2Pound.CheckedChanged += new System.EventHandler(this.radioButtonKg2Pound_CheckedChanged);
            // 
            // radioButtonPound2Kg
            // 
            this.radioButtonPound2Kg.AutoSize = true;
            this.radioButtonPound2Kg.Location = new System.Drawing.Point(26, 82);
            this.radioButtonPound2Kg.Name = "radioButtonPound2Kg";
            this.radioButtonPound2Kg.Size = new System.Drawing.Size(93, 16);
            this.radioButtonPound2Kg.TabIndex = 20;
            this.radioButtonPound2Kg.Text = "pound -> kg";
            this.radioButtonPound2Kg.UseVisualStyleBackColor = true;
            this.radioButtonPound2Kg.CheckedChanged += new System.EventHandler(this.radioButtonPound2Kg_CheckedChanged);
            // 
            // labelBefore
            // 
            this.labelBefore.AutoSize = true;
            this.labelBefore.Location = new System.Drawing.Point(478, 97);
            this.labelBefore.Name = "labelBefore";
            this.labelBefore.Size = new System.Drawing.Size(29, 12);
            this.labelBefore.TabIndex = 22;
            this.labelBefore.Text = "인치";
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(552, 124);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(88, 23);
            this.button1.TabIndex = 23;
            this.button1.Text = "CONVERT!";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // labelAfter
            // 
            this.labelAfter.AutoSize = true;
            this.labelAfter.Location = new System.Drawing.Point(678, 97);
            this.labelAfter.Name = "labelAfter";
            this.labelAfter.Size = new System.Drawing.Size(23, 12);
            this.labelAfter.TabIndex = 25;
            this.labelAfter.Text = "cm";
            // 
            // textBoxBef
            // 
            this.textBoxBef.Location = new System.Drawing.Point(446, 124);
            this.textBoxBef.Name = "textBoxBef";
            this.textBoxBef.Size = new System.Drawing.Size(100, 21);
            this.textBoxBef.TabIndex = 26;
            this.textBoxBef.Text = "0";
            this.textBoxBef.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            // 
            // textBoxAf
            // 
            this.textBoxAf.Location = new System.Drawing.Point(646, 124);
            this.textBoxAf.Name = "textBoxAf";
            this.textBoxAf.ReadOnly = true;
            this.textBoxAf.Size = new System.Drawing.Size(100, 21);
            this.textBoxAf.TabIndex = 27;
            this.textBoxAf.Text = "0";
            this.textBoxAf.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            // 
            // radioButton1
            // 
            this.radioButton1.AutoSize = true;
            this.radioButton1.Location = new System.Drawing.Point(552, 320);
            this.radioButton1.Name = "radioButton1";
            this.radioButton1.Size = new System.Drawing.Size(93, 16);
            this.radioButton1.TabIndex = 28;
            this.radioButton1.Text = "pound -> kg";
            this.radioButton1.UseVisualStyleBackColor = true;
            // 
            // radioButton2
            // 
            this.radioButton2.AutoSize = true;
            this.radioButton2.Location = new System.Drawing.Point(552, 342);
            this.radioButton2.Name = "radioButton2";
            this.radioButton2.Size = new System.Drawing.Size(93, 16);
            this.radioButton2.TabIndex = 29;
            this.radioButton2.Text = "pound -> kg";
            this.radioButton2.UseVisualStyleBackColor = true;
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.radioButtonInch2cm);
            this.panel1.Controls.Add(this.radioButtonCm2Inch);
            this.panel1.Controls.Add(this.radioButtonKg2Pound);
            this.panel1.Controls.Add(this.radioButtonPound2Kg);
            this.panel1.Location = new System.Drawing.Point(525, 153);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(155, 117);
            this.panel1.TabIndex = 30;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.radioButton1);
            this.Controls.Add(this.radioButton2);
            this.Controls.Add(this.panel1);
            this.Controls.Add(this.textBoxAf);
            this.Controls.Add(this.textBoxBef);
            this.Controls.Add(this.labelAfter);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.labelBefore);
            this.Controls.Add(this.buttonRad2Sur);
            this.Controls.Add(this.buttonRad2Cir);
            this.Controls.Add(this.buttonKg2Poun);
            this.Controls.Add(this.buttonInch2Cm);
            this.Controls.Add(this.textBox5);
            this.Controls.Add(this.textBox4);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.textBox3);
            this.Controls.Add(this.textBox2);
            this.Controls.Add(this.buttonDiv);
            this.Controls.Add(this.buttonMul);
            this.Controls.Add(this.buttonSub);
            this.Controls.Add(this.buttonAdd);
            this.Controls.Add(this.textBox1);
            this.Controls.Add(this.label1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox textBox1;
        private System.Windows.Forms.Button buttonAdd;
        private System.Windows.Forms.Button buttonSub;
        private System.Windows.Forms.Button buttonMul;
        private System.Windows.Forms.Button buttonDiv;
        private System.Windows.Forms.TextBox textBox2;
        private System.Windows.Forms.TextBox textBox3;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox textBox4;
        private System.Windows.Forms.TextBox textBox5;
        private System.Windows.Forms.Button buttonInch2Cm;
        private System.Windows.Forms.Button buttonKg2Poun;
        private System.Windows.Forms.Button buttonRad2Cir;
        private System.Windows.Forms.Button buttonRad2Sur;
        private System.Windows.Forms.RadioButton radioButtonInch2cm;
        private System.Windows.Forms.RadioButton radioButtonCm2Inch;
        private System.Windows.Forms.RadioButton radioButtonKg2Pound;
        private System.Windows.Forms.RadioButton radioButtonPound2Kg;
        private System.Windows.Forms.Label labelBefore;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Label labelAfter;
        private System.Windows.Forms.TextBox textBoxBef;
        private System.Windows.Forms.TextBox textBoxAf;
        private System.Windows.Forms.RadioButton radioButton1;
        private System.Windows.Forms.RadioButton radioButton2;
        private System.Windows.Forms.Panel panel1;
    }
}

