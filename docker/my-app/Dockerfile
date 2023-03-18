# React 프로젝트
# 부모 이미지 지정
FROM nginx:1.21-alpine
# copy build files
COPY build /usr/share/nginx/html
# copy nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf
#포트 매핑 (80: localhost 기본 포트, localhost로 접속)
EXPOSE 80
# 실행 명령
CMD [ "nginx", "-g", "daemon off;" ]