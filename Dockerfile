FROM nginx:1.27-alpine
COPY index.html style.css machine.js app.js /usr/share/nginx/html/
RUN printf 'server { listen 3000; root /usr/share/nginx/html; location = /healthz { return 200 "ok\\n"; add_header Content-Type text/plain; } location / { try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf
EXPOSE 3000
