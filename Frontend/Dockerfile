FROM node:20-alpine

# 1. Install pnpm globally as root
RUN npm install -g pnpm

# 2. Create the directory and set ownership BEFORE setting it as WORKDIR
RUN mkdir -p /app && chown -R node:node /app

# 3. Set WORKDIR (it will now safely use the node:node permissions)
WORKDIR /app

# 4. Copy package files safely
COPY --chown=node:node package.json pnpm-lock.yaml* ./

# 5. Switch to the unprivileged user
USER node

# 6. CRITICAL: Tell pnpm to use a cache directory that the 'node' user actually owns
RUN pnpm config set store-dir /home/node/.pnpm-store

# 7. Install dependencies (This will now succeed!)
RUN pnpm install

# 8. Copy the rest of the application
COPY --chown=node:node . .

EXPOSE 5173

CMD ["pnpm", "run", "dev", "--host"]