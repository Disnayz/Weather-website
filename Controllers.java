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
}
