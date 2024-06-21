package com.adamd.website;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class Controllers {

    @GetMapping("/test1")
    public String searchForLocation() {
        return "LandingPage";
    }

    @GetMapping("/test2")
    public String showSearchForLocation(@RequestParam("query") String query, Model model) {
        return "redirect:/CityData?query=" + query;
    }

    @GetMapping("/CityData")
    public String showCityData(@RequestParam("query") String query, Model model) {
        CityWeatherData city = new CityWeatherData("Europe/Warsaw", "5:45", "22:30", 279.13, 276.44, 1029, 64, 0.06f, 2, 3);
        model.addAttribute("city", city);
        return "City";
    }
}
