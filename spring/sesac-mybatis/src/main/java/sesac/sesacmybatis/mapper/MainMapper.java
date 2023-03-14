package sesac.sesacmybatis.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import sesac.sesacmybatis.domain.User;

import java.util.List;

@Mapper
public interface MainMapper {
    // mapper(xml 파일) 참고하기
    List<User> retrieveAll();

    // mapper 참고 안 하기
    @Insert("insert into user(name, nickname) values(#{name}, #{nickname})")
    void insertUser(User user);
}
