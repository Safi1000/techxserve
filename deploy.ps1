$SERVER = "techxserve@160.153.180.65"
$REMOTE_DIR = "/home/techxserve/techxserve"

Write-Host "Building..."
npm run build
if ($LASTEXITCODE -ne 0) { Write-Host "Build failed. Aborting."; exit 1 }

Write-Host "Packaging..."
tar -czf deploy.tar.gz .next public package.json package-lock.json next.config.ts
if ($LASTEXITCODE -ne 0) { Write-Host "Packaging failed. Aborting."; exit 1 }

Write-Host "Uploading..."
scp deploy.tar.gz "${SERVER}:${REMOTE_DIR}/"
if ($LASTEXITCODE -ne 0) { Write-Host "Upload failed. Aborting."; exit 1 }

Write-Host "Deploying on server..."
ssh $SERVER "export PATH=/home/techxserve/.nvm/versions/node/v20.20.2/bin:`$PATH && cd $REMOTE_DIR && tar xzf deploy.tar.gz && npm install --production --no-fund --no-audit && pm2 restart techxserve && rm deploy.tar.gz"

Remove-Item deploy.tar.gz
Write-Host "Done. Site is live."
