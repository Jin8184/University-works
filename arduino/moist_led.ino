int sensor_pin = A0;
int sensorValue ;
int limit = 500;

void setup() {

  Serial.begin(9600);

  pinMode(13, OUTPUT);

  Serial.println("Reading From the Sensor ...");

  delay(2000);

  }

void loop() {

  sensorValue = analogRead(sensor_pin);

  //sensorValue = map(output_value,550,0,0,100);

  Serial.println("Moisture : ");

  Serial.println(sensorValue);

  //Serial.println("%");

  if (sensorValue<limit)  {
    digitalWrite(13, HIGH);
  }
  else  {
    digitalWrite(13, LOW);
  }
  

  delay(1000);

}
