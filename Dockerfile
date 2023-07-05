FROM node:16-alpine

# uncomment bawah ini kalo pake canvas
RUN apk add --no-cache build-base g++ cairo-dev jpeg-dev pango-dev giflib-dev python3

# uncomment bawah ini kalo butuh ffmpeg
# RUN apk add --no-cache ffmpeg

RUN apk add --no-cache ca-certificates

# uncomment bawah ini kalo pake canvas
RUN apk add --update  --repository http://dl-3.alpinelinux.org/alpine/edge/testing libmount ttf-dejavu ttf-droid ttf-freefont ttf-liberation fontconfig

RUN npm i -g pnpm
RUN pnpm install

CMD [ "node", "." ]