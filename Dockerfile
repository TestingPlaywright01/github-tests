FROM mcr.microsoft.com/playwright:v1.20.0-focal

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npx playwright install

COPY . .

CMD ["npx", "playwright", "test"]
