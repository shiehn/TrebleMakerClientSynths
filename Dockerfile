FROM node:10.5.0

ADD . /TrebleMakerClientSynths

WORKDIR /TrebleMakerClientSynths

RUN npm install -g -y
RUN npm update -g -y

ARG TMW_NEXT_TRACK_URL="xxx"
ARG TMW_S3_BUCKET="yyy"

RUN sed -i -e "s/xoxoxoxoxoxoxoxoxoxoxo/${TMW_NEXT_TRACK_URL}/g" src/App.js
RUN sed -i -e "s/yoyoyoyoyoyoyoyoyoyoyo/${TMW_S3_BUCKET}/g" src/App.js

CMD ["npm", "start"]

