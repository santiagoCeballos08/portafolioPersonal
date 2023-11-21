FROM nginx:alpine
RUN mkdir -p /home/app
COPY  . /home/app
COPY  ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
