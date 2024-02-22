FROM nginx:latest

# Install nginx package and remove cache
#RUN apk add --update nginx && rm -rf /var/cache/apk/*

# Copy basic files


WORKDIR /usr/share/nginx/html/
#COPY /target/webapp abhijittestapp/.

COPY webapp .

#COPY webapp abhijittestapp/.

#COPY environments cares/.

EXPOSE 80

STOPSIGNAL SIGTERM
CMD ["nginx", "-g", "daemon off;"]