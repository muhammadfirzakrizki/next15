# Gunakan image node versi resmi
FROM node:18-alpine

# Set working directory di container
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua kode aplikasi
COPY . .

# Build aplikasi Next.js (untuk production)
RUN npm run build

# Port yang akan expose
EXPOSE 3000

# Jalankan Next.js dalam mode production
CMD ["npm", "start"]
