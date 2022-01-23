FROM node:16.13.1-alpine3.14

COPY . /opt/app/

WORKDIR /opt/app/

EXPOSE 5000

RUN yarn install --frozen-lockfile

RUN yarn build

ENTRYPOINT ["yarn", "start"]