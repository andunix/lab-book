FROM node:latest as builder
WORKDIR /app/website
COPY . /app/website
RUN yarn install
RUN yarn build

FROM nginx:latest
COPY --from=builder /app/website/build /usr/share/nginx/html
