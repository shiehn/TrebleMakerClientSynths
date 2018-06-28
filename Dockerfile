from ubuntu:bionic

RUN apt-get update -y && \
    apt-get install -y nodejs && \
    apt-get install -y npm

ADD . /TrebleMakerClientSynths

WORKDIR /TrebleMakerClientSynths

RUN npm install -g

ARG TMW_NEXT_TRACK_URL="xxx"
ARG TMW_S3_BUCKET="yyy"

RUN sed -i -e "s/xoxoxoxoxoxoxoxoxoxoxo/${TMW_NEXT_TRACK_URL}/g" src/App.js
RUN sed -i -e "s/yoyoyoyoyoyoyoyoyoyoyo/${TMW_S3_BUCKET}/g" src/App.js

CMD ["npm", "start"]

