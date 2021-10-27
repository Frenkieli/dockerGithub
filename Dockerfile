FROM node:14.18
COPY ./public ./public
COPY ./src ./src
COPY .gitignore .gitignore
COPY package.json package.json
COPY README.md README.md
COPY id_ed25519 /root/.ssh/
RUN npm i
CMD ["npm", "start"]
EXPOSE 3000