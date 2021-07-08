FROM node:14.4.0-alpine

ARG WORKDIR
ARG CONTAINER_PORT
# 追加
ARG API_URL

ENV HOME=/${WORKDIR} \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    #\忘れない
    HOST=0.0.0.0 \
    # 追加
    API_URL=${API_URL}
    

# ENV check（このRUN命令は確認のためなので無くても良い）
RUN echo ${HOME}
RUN echo ${CONTAINER_PORT}
RUN echo ${API_URL}

WORKDIR ${HOME}

EXPOSE ${CONTAINER_PORT}
