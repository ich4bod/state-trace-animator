FROM busybox:1.36.1-musl
COPY index.html style.css machine.js app.js /www/
EXPOSE 3000
CMD ["httpd", "-f", "-p", "3000", "-h", "/www"]
