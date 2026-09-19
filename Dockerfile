FROM busybox:1.36.1-musl
ARG OCI_REVISION
ARG OCI_CREATED
LABEL org.opencontainers.image.revision=$OCI_REVISION \
      org.opencontainers.image.created=$OCI_CREATED
COPY index.html style.css machine.js app.js /www/
EXPOSE 3000
CMD ["httpd", "-f", "-p", "3000", "-h", "/www"]
