#FROM mysql
#ENV MYSQL_ROOT_PASSWORD=000000
#EXPOSE 3309

# node 프로젝트
# 부모 이미지 지정
FROM node:16
# 작업 디렉토리 생성
WORKDIR /app
# 소스 추가
COPY . /app
# 패키지 설치
RUN npm install
# 포트 매핑
EXPOSE 8000
# 실행 명령
CMD [ "node", "index.js" ]