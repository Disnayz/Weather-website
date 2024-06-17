package com.adamd.website;

import java.util.ArrayList;
import java.util.List;

import org.springframework.ui.Model;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller

public class Controllers {
@GetMapping("/test1")
public String searchForLocation(){
    return "LandingPage.html";
}

    @GetMapping("/test2")
    public String showSearchForLocation(){
        return "SearchForLocation";
    }
    @GetMapping("/CityData")
    public String showCityData(Model model){
        List<CityWeatherData> city = new ArrayList<CityWeatherData>();
        city.add(new CityWeatherData("Europe/Warsaw", "5:45", "22:30", 279.13, 276.44, 1029, 64, 0.06f, 2, 3));
        System.err.println(city);
        return "City.html";
    }
}
