package sesac.sesacmybatis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.sesacmybatis.dto.PersonDTO;
import sesac.sesacmybatis.service.PersonService;

@Controller
//@RestController : PersonController 안에 있는 모든 함수들이 @ResponseBody 가 붙는다, restapi 사용한다
@RequestMapping("/person")
// person 이 앞에 붙는다 /person/register 이렇게
public class PersonController {
    @Autowired
    PersonService personService;
    @GetMapping("/register")
        public String getRegister() {
        return "register";
    }
    @PostMapping("/register")
    @ResponseBody
    public String postRegister(@RequestBody PersonDTO personDTO) {
        personService.insertPerson(personDTO);
        return "";
    }

    @GetMapping("/login")
    public String getLogin() {
        return "login";
    }

    @PostMapping("/login")
    @ResponseBody
    public boolean postLogin(@RequestBody PersonDTO personDTO) {
        PersonDTO person = personService.getPerson(personDTO);
        if (person == null) return false;
        else return true;
    }

    @PostMapping("/info")
    public String postInfo(PersonDTO personDTO, Model model) {
        PersonDTO person = personService.getPerson(personDTO);
        model.addAttribute("person", person);
        return "info";
    }

    @PostMapping("/info/edit")
    @ResponseBody
    public String postInfoEdit(@RequestBody PersonDTO personDTO) {
        personService.updatePerson(personDTO);
        return "";
    }
    @PostMapping("/info/delete")
    @ResponseBody
    public String postInfoDelete(@RequestBody PersonDTO personDTO) {
        personService.deletePerson(personDTO);
        return "";
    }
}
