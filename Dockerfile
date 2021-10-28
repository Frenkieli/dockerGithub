FROM node:14.18
COPY . .
COPY id_rsa /root/.ssh/
EXPOSE 3000