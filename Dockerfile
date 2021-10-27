FROM node:14.18
COPY . .
COPY id_rsa /root/.ssh/
RUN npm i
CMD ["npm", "start"]
EXPOSE 3000