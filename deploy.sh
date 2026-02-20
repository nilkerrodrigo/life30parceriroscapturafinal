#!/bin/bash

# Instalar dependências
npm install

# Construir o projeto
npm run build

# Definir o diretório de destino
DEST_DIR="/home/u816010328/domains/captura.life360parceiros.com.br/public_html/"

# Criar o diretório se não existir
mkdir -p $DEST_DIR

# Copiar os arquivos da pasta dist para o diretório público
cp -r dist/* $DEST_DIR

echo "✅ Deploy concluído com sucesso para $DEST_DIR"
