FROM node

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY index.js index.js
COPY routes routes
COPY models models
COPY middlewares middlewares
RUN npm install

ENTRYPOINT [ "node", "index.js" ]