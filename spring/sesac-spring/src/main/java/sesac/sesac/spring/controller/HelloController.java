package sesac.sesac.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

@Controller
public class HelloController {
    @GetMapping("/hi")    /* app.get */
    public String getHi(Model model) {
        model.addAttribute("msg", "메세지입니다!");
        model.addAttribute("utext","<strong>utext 입니다.</strong>");
        
        // 실습
        model.addAttribute("age", "10");
        // res.render("hi", model);
        return "hi";
    }
    public class Person {
        private String name;
        private int age;

        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }

        public String getName() {
            return name;
        }

        public int getAge() {
            return age;
        }
    }



    @GetMapping("/people")
    public String getPeople(Model model) {
        ArrayList<Person> people = new ArrayList<Person>();
        people.add(new Person("kim", 10));
        people.add(new Person("lee", 20));
        people.add(new Person("hong", 30));
        people.add(new Person("park", 40));
        model.addAttribute("people", people);
        return "people";
    }
}