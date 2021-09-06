# https://hub.docker.com/_/node/
FROM node:lts-alpine

# We define the docker dir
RUN mkdir /api-pricing
WORKDIR /api-pricing

# set our node environment, either development or production or test
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# run the ci (delete /node_modules && npm install)
RUN npm install

# copy the packages dependancies
COPY ./package.json /api-pricing/package.json
COPY ./package-lock.json /api-pricing/package-lock.json

# copy in our source code last, as it changes the most
COPY . .

# We run migration and start the server
CMD ["npm", "start"]