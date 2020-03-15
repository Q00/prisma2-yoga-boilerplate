FROM mhart/alpine-node:12

ENV TZ="/usr/share/zoneinfo/Asia/Seoul"
ENV HOST 0.0.0.0

ARG PROJECT_DIR=/prisma-boilerplate/web

RUN npm install -g yarn

WORKDIR ${PROJECT_DIR}

COPY . ${PROJECT_DIR}
RUN yarn install

# change this to your custom port
EXPOSE 3000 4000

# RUN start
CMD ["yarn", "dev"]