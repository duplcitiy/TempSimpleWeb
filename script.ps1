# Define the URL for the Node.js installer (adjust version as needed)
$nodejsInstallerUrl = "https://nodejs.org/dist/latest/node-v14-x64.msi"

# Define the path where the installer will be saved
$installerPath = "$env:USERPROFILE\Downloads\nodejs_installer.msi"

# Download the Node.js installer
Invoke-WebRequest -Uri $nodejsInstallerUrl -OutFile $installerPath

# Install Node.js
Start-Process -Wait -FilePath "msiexec.exe" -ArgumentList "/i $installerPath /quiet /norestart"

# Verify Node.js installation
$nodeVersion = node -v
npm -v

Write-Host "Node.js $nodeVersion and npm installed successfully."
