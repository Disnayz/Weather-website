package com.adamd.website;


public class CityWeatherData {
private String timezone;
private String sunRise;
private String sunset;
private double temp;
private double tempFellsLike;
private int pressure;
private int humidity;
private float uvi;
private int clouds;
private double windSpeed;

public CityWeatherData(String timezone, String sunRise, String sunset, double temp, double tempFellsLike,
int pressure, int humidity, float uvi, int clouds, double windSpeed) {
this.timezone = timezone;
this.sunRise = sunRise;
this.sunset = sunset;
this.temp = temp;
this.tempFellsLike = tempFellsLike;
this.pressure = pressure;
this.humidity = humidity;
this.uvi = uvi;
this.clouds = clouds;
this.windSpeed = windSpeed;
}

public String getTimezone() {
    return timezone;
}

public void setTimezone(String timezone) {
    this.timezone = timezone;
}

public String getSunRise() {
    return sunRise;
}

public void setSunRise(String sunRise) {
    this.sunRise = sunRise;
}

public String getSunset() {
    return sunset;
}

public void setSunset(String sunset) {
    this.sunset = sunset;
}

public double getTemp() {
    return temp;
}

public void setTemp(double temp) {
    this.temp = temp;
}

public double getTempFellsLike() {
    return tempFellsLike;
}

public void setTempFellsLike(double tempFellsLike) {
    this.tempFellsLike = tempFellsLike;
}

public int getPressure() {
    return pressure;
}

public void setPressure(int pressure) {
    this.pressure = pressure;
}

public int getHumidity() {
    return humidity;
}

public void setHumidity(int humidity) {
    this.humidity = humidity;
}

public float getUvi() {
    return uvi;
}

public void setUvi(float uvi) {
    this.uvi = uvi;
}

public int getClouds() {
    return clouds;
}

public void setClouds(int clouds) {
    this.clouds = clouds;
}

public double getWindSpeed() {
    return windSpeed;
}

public void setWindSpeed(double windSpeed) {
    this.windSpeed = windSpeed;
}
@Override
public String toString() {
    return "CityWeatherData{" +
            "timezone='" + timezone + '\'' +
            ", sunRise='" + sunRise + '\'' +
            ", sunset='" + sunset + '\'' +
            ", temp=" + temp +
            ", tempFellsLike=" + tempFellsLike +
            ", pressure=" + pressure +
            ", humidity=" + humidity +
            ", uvi=" + uvi +
            ", clouds=" + clouds +
            ", windSpeed=" + windSpeed +
            '}';
}
}
