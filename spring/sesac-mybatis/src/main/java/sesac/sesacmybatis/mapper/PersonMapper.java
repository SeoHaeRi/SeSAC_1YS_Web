package sesac.sesacmybatis.mapper;

import org.apache.ibatis.annotations.*;
import sesac.sesacmybatis.domain.Person;

@Mapper
public interface PersonMapper {
    @Insert("insert into person(id,password,name) values(#{id}, #{password}, #{name})")
    void insertPerson(Person person);

    @Select("select * from person where id=#{id} and password=#{password} limit 1")
    Person getPerson(String id, String password);

    @Update("update person set password=#{password}, name=#{name} where id=#{id}")
    void updatePerson(Person person);

    @Delete("delete from person where id=#{id}")
    void deletePerson(String id);
}

