package com.adamd.website;

import java.util.ArrayList;

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
        return "SearchForLocation";
    }
}
