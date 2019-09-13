FROM node

ENV HOME=/home/web
WORKDIR $HOME

COPY package.json $HOME
RUN yarn
COPY . $HOME

EXPOSE 3000
