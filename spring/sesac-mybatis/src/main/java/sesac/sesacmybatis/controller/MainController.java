package sesac.sesacmybatis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestParam;
import sesac.sesacmybatis.domain.User;
import sesac.sesacmybatis.dto.UserDTO;
import sesac.sesacmybatis.service.MainService;

import java.util.ArrayList;
@Controller
public class MainController {
    @Autowired
    MainService mainService;

    @GetMapping("/users")
    public String getUsers(Model model) {
        ArrayList<UserDTO> userList = (ArrayList<UserDTO>) mainService.getUserList();
        model.addAttribute("list",userList);
        return "user";
    }

    @GetMapping("/user/insert")
    public String getInsertUser(@RequestParam String name, @RequestParam String nickname, Model model) {
        User user = new User();
        user.setName(name);
        user.setNickname(nickname);
        mainService.addUser(user);
        model.addAttribute("list", null);
        return "user";
    }

//    @PatchMapping("/users")
//    public String updateUser(@ReequestParam int id) {}
//    @DeleteMapping("/users")
//    public String deleteUser(@RequestParam int id) {
//
//    }
}
