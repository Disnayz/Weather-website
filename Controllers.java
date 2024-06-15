package com.adamd.website;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller

public class Controllers {
@GetMapping("/test1")
@ResponseBody
public String searchForLocation(){
    return "Location data";
}

    @GetMapping("/test2")
    public String showSearchForLocation(){
        return "SearchForLocation";
    }
}

