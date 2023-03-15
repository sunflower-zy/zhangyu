FROM node:18-alpine AS build    
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM node:18-alpine AS prod
WORKDIR /app
COPY --from=build /app/dist /app
CMD [ "node main.js" ]