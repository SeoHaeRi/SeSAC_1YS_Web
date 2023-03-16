package sesac.sesacmybatis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sesac.sesacmybatis.domain.UserEntity;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByName(String name);
//    optional로 감싸진 객체가 null인지 아닌지 알 수 있음 (null exception 예방)

}
