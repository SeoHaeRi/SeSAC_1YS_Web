package sesac.spring.api.sesacapi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.spring.api.sesacapi.dto.UserDTO;
import sesac.spring.api.sesacapi.vo.InfoVO;
import sesac.spring.api.sesacapi.vo.UserVO;

@Controller
public class MainController {
    @GetMapping("/")
    public String main() {
        return "request";
    }
    @GetMapping("/get/response1")
    public String getAPI1(@RequestParam("name") String name, Model model) {
        model.addAttribute("name", name);
        return "response";
    }
    @GetMapping("/get/response2")
    public String getAPI2(@RequestParam(value = "name", required = false) String name, Model model) {
        model.addAttribute("name", name);
        return "response";
    }
    @GetMapping("/get/response3/{name}/{age}")
    public String getAPI3(@PathVariable String name, @PathVariable("age") String age, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "response";
    }
    @GetMapping({"/get/response4/{name}", "/get/response4/{name}/{age}"})
    public String getAPI4(@PathVariable String name, @PathVariable(value = "age", required = false) String age, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "response";
    }
//    Post
    @PostMapping("/post/response1")
    public String postAPI1(@RequestParam String name, Model model) {
        model.addAttribute("name", name);
        return "response";
    }
    @PostMapping("/post/response2")
    public String postAPI2(@RequestParam(required = false) String name, Model model) {
        model.addAttribute("name", name);
        return "response";
    }
    @PostMapping("/post/response3")
    @ResponseBody // res.send
    public String postAPI3(@RequestParam(required = false) String name) {

        return "이름은 : " + name;
    }

//    get 실습
    @GetMapping("/introduce/{name}")
    public String introduce1(@PathVariable String name, Model model) {
        model.addAttribute("name", name);
        return "introduce";
    }
    @GetMapping("/introduce2")
    public String introduce2(@RequestParam("name") String name, @RequestParam("age") String age, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "introduce";
    }
//    post 실습
    @PostMapping("/signup")
    public String signup(@RequestParam String name, @RequestParam String gender, @RequestParam String birth, @RequestParam String favorite, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
       String[] birtharr = birth.split(",");
        model.addAttribute("year", birtharr[0]);
        model.addAttribute("month", birtharr[1]);
        model.addAttribute("day", birtharr[2]);
        model.addAttribute("favorite", favorite);
        return "signup";
    }
//  DTO
    @GetMapping("/dto/response1")
    @ResponseBody
    public String dtoAPI1(UserDTO userDTO) {
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }
    @PostMapping("/dto/response2")
    @ResponseBody
    public String dtoAPI2(UserDTO userDTO) {
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }
    @PostMapping("/dto/response3")
    @ResponseBody
    public String dtoAPI3(@RequestBody UserDTO userDTO) {
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }
//  VO
    @GetMapping("vo/response1")
    @ResponseBody
    public String voAPI1(UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }
    @PostMapping("vo/response2")
    @ResponseBody
    public String voAPI2(UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }
    @PostMapping("vo/response3")
    @ResponseBody
    public String voAPI3(@RequestBody UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }

//    axios 실습
    @GetMapping("/axios/response1")
    @ResponseBody
    public String axiosApI1(@RequestParam(value="name") String name, @RequestParam(value="age") String age) {
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }
    @GetMapping("/axios/response2")
    @ResponseBody
    public String axiosApI2(UserDTO userDTO) {
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }
    @PostMapping("/axios/response3")
    @ResponseBody
    public String axiosApI3(@RequestParam(value="name") String name, @RequestParam(value="age") String age) {
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }
    @PostMapping("/axios/response4")
    @ResponseBody
    public String axiosApI4(UserDTO userDTO) {
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }
    @PostMapping("/axios/response5")
    @ResponseBody
    public String axiosApI5(@RequestBody UserDTO userDTO) {
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }

//    axios vo
    @GetMapping("/axios/vo/response1")
    @ResponseBody
    public String axiosvoApI1(@RequestParam(value="name") String name, @RequestParam(value="age") String age) {
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }
    @GetMapping("/axios/vo/response2")
    @ResponseBody
    public String axiosvoApI2(UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }
    @PostMapping("/axios/vo/response3")
    @ResponseBody
    public String axiosvoApI3(@RequestParam(value="name") String name, @RequestParam(value="age") String age) {
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }
    @PostMapping("/axios/vo/response4")
    @ResponseBody
    public String axiosvoApI4(UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }
    @PostMapping("/axios/vo/response5")
    @ResponseBody
    public String axiosvoApI5(@RequestBody UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }

//    동적폼전송 실습
    @PostMapping("/axiosTransfer")
    @ResponseBody
    public String axiosvoTransfer(@RequestBody InfoVO infoVO) {
        String msg = infoVO.getName() + "회원가입 성공";
        return msg;
    }
}
