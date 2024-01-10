namespace WindowsFormsApp_examThing
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
            this.inchBox = new System.Windows.Forms.TextBox();
            this.inch2cm = new System.Windows.Forms.Button();
            this.cmLabel = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // inchBox
            // 
            this.inchBox.Location = new System.Drawing.Point(28, 84);
            this.inchBox.Name = "inchBox";
            this.inchBox.Size = new System.Drawing.Size(100, 21);
            this.inchBox.TabIndex = 0;
            this.inchBox.Text = "0";
            this.inchBox.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            this.inchBox.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.inchBox_KeyPress);
            // 
            // inch2cm
            // 
            this.inch2cm.Location = new System.Drawing.Point(178, 84);
            this.inch2cm.Name = "inch2cm";
            this.inch2cm.Size = new System.Drawing.Size(75, 23);
            this.inch2cm.TabIndex = 1;
            this.inch2cm.Text = "inch2cm";
            this.inch2cm.UseVisualStyleBackColor = true;
            this.inch2cm.Click += new System.EventHandler(this.button1_Click);
            // 
            // cmLabel
            // 
            this.cmLabel.AutoSize = true;
            this.cmLabel.Location = new System.Drawing.Point(299, 87);
            this.cmLabel.Name = "cmLabel";
            this.cmLabel.Size = new System.Drawing.Size(11, 12);
            this.cmLabel.TabIndex = 2;
            this.cmLabel.Text = "0";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.cmLabel);
            this.Controls.Add(this.inch2cm);
            this.Controls.Add(this.inchBox);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox inchBox;
        private System.Windows.Forms.Button inch2cm;
        private System.Windows.Forms.Label cmLabel;
    }
}

