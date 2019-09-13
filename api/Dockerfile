FROM node

ENV HOME=/home/app
WORKDIR $HOME

COPY package.json $HOME
RUN yarn
RUN yarn global add pm2
COPY . $HOME

EXPOSE 3000
