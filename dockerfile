FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copiar archivos del proyecto al contenedor
COPY . .


EXPOSE 3000
CMD ["npm", "run", "dev"]
