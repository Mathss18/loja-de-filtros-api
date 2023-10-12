# Documentação da API
```
sudo apt update
```

### Install nvm
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
nvm install v18.14.0
```


### Install pm2
```
npm install pm2 -g
```


### Clone Repo
```
git clone https://github.com/Mathss18/loja-de-filtros-api.git
cd loja-de-filtros-api
vim .env
npm install
```


### Install Caddy (free ssl)
```
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

### Create Caddyfile
```
vim Caddyfile
```
write this to the Caddyfile:
```
<EC2 Public IP>.nip.io {
    reverse_proxy localhost:3000
}
admin off
```

### Run everything
```
npm run start:dev:pm2
sudo caddy stop
sudo caddy start
```
