# Gerando Chaves Privada e Pública para JWT

Este guia mostra como gerar um par de chaves RSA para uso nas variáveis de ambiente `JWT_PRIVATE_KEY` e `JWT_PUBLIC_KEY` do projeto.

## 1. Gerar a chave privada

Execute o comando abaixo para criar uma chave privada RSA de 2048 bits:

```sh
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
```

## 2. Gerar a chave pública

A partir da chave privada gerada, execute:

```sh
openssl rsa -pubout -in private_key.pem -out public_key.pem
```

## 3. Usando as chaves no projeto

- Abra os arquivos `private_key.pem` e `public_key.pem` gerados.
- Copie **todo** o conteúdo, incluindo as linhas `-----BEGIN ... KEY-----` e `-----END ... KEY-----`.
- Cole o conteúdo da chave privada na variável `JWT_PRIVATE_KEY` do seu `.env`.
- Cole o conteúdo da chave pública na variável `JWT_PUBLIC_KEY` do seu `.env`.

Exemplo:

```env
JWT_PRIVATE_KEY="-----BEGIN PRIVATE KEY----- ... -----END PRIVATE KEY-----"
JWT_PUBLIC_KEY="-----BEGIN PUBLIC KEY----- ... -----END PUBLIC KEY-----"
```

> **Importante:** Nunca compartilhe suas chaves privadas publicamente
