FROM alpine:latest AS build
RUN apk add nodejs-current
RUN corepack enable npm
RUN mkdir /work
WORKDIR /work
COPY package*.json .
RUN npm ci
COPY tsconfig.json .
COPY src src
COPY prisma prisma
RUN npm run build

FROM alpine:latest AS run
RUN mkdir /app
WORKDIR /app
RUN apk add nodejs-current
RUN corepack enable npm
COPY --from=build /work/package*.json .
ENV NODE_ENV production
RUN npm ci
COPY --from=build /work/dist dist
EXPOSE 4000
CMD [ "node", "dist/app.js" ]
