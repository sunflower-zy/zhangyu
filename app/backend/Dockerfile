FROM node:18-alpine AS build    
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:18-alpine AS prod
WORKDIR /app
COPY --from=build /app/package* /app
COPY --from=build /app/dist /app
RUN npm install --omit=dev
CMD ["node", "main.js"]