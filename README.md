# DDD Nest API

Este projeto é uma API construída com [NestJS](https://nestjs.com/) seguindo os princípios de Domain-Driven Design (DDD). O objetivo é servir como referência de arquitetura limpa, separação de responsabilidades e boas práticas para projetos Node.js modernos.

## Sumário

- [Visão Geral](#visão-geral)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Instalação](#instalação)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Rodando a Aplicação](#rodando-a-aplicação)
- [Rodando os Testes](#rodando-os-testes)
- [Gerenciamento do Banco de Dados](#gerenciamento-do-banco-de-dados)
- [Documentação Adicional](#documentação-adicional)

## Visão Geral

A API foi projetada para separar claramente as responsabilidades entre domínio, infraestrutura e aplicação, facilitando manutenção, testes e evolução do projeto. O repositório é voltado para estudo e consulta, com exemplos práticos de organização de código e integração de ferramentas modernas.

## Estrutura de Pastas

```
src/
  core/      # Lógica de domínio, eventos, entidades base
  domain/    # Entidades e casos de uso do domínio
  infra/     # Integrações externas (NestJS, banco de dados, etc)
test/        # Testes unitários e de integração
prisma/      # Migrations e schema do banco de dados
docs/        # Documentação adicional
```

Veja mais detalhes em [docs/folders-and-files.md](docs/folders-and-files.md).

## Instalação

1. Clone o repositório:

   ```sh
   git clone <url-do-repo>
   cd ddd-nest-api
   ```

2. Instale as dependências:

   ```sh
   npm install
   # ou
   pnpm install
   ```

3. Configure as variáveis de ambiente:
   - Copie `.env.example` para `.env` e ajuste conforme necessário.

## Variáveis de Ambiente

O projeto utiliza variáveis de ambiente para configuração de banco de dados, JWT, Redis e integrações externas.
As credenciais sensíveis de serviços como AWS e Cloudflare devem ser obtidas diretamente nos respectivos painéis dos serviços.

Exemplo de `.env`:

```env
# Banco de dados
DATABASE_URL="postgresql://usuario:senha@localhost:5432/ddd_nest_api"

# JWT
JWT_PRIVATE_KEY="(sua chave privada aqui)"
JWT_PUBLIC_KEY="(sua chave pública aqui)"
JWT_EXPIRES_IN="1d"

# Redis
REDIS_HOST="127.0.0.1"
REDIS_PORT=6380
REDIS_DB=0
REDIS_PASSWORD="redis"

# AWS / Cloudflare (preencher conforme necessário)
AWS_ACCESS_KEY_ID=""
AWS_SECRET_ACCESS_KEY=""
AWS_BUCKET_NAME=""
CLOUDFLARE_ACCOUNT_ID=""

NODE_ENV=development
```

- Para saber como gerar as chaves JWT, consulte [docs/generate-private-key.md](docs/generate-private-key.md).
- As credenciais de AWS e Cloudflare são geradas nos próprios serviços.

## Rodando a Aplicação

Para rodar localmente:

```sh
npm run start:dev
```

Para rodar com Docker Compose (incluindo banco de dados):

```sh
docker-compose up
```

## Rodando os Testes

Execute todos os testes com:

```sh
npm run test
```

Para testes E2E:

```sh
npm run test:e2e
```

## Gerenciamento do Banco de Dados

- O schema do banco está em [prisma/schema.prisma](prisma/schema.prisma).
- Para rodar migrations:
  ```sh
  npx prisma migrate dev
  ```

## Documentação Adicional

- [docs/folders-and-files.md](docs/folders-and-files.md): Detalhes sobre a estrutura de pastas e arquivos.
- [docs/generate-private-key.md](docs/generate-private-key.md): Como gerar chaves privadas para autenticação JWT.

---

## Serviços Utilizados

O projeto utiliza alguns serviços externos para funcionalidades específicas:

- **Cloudflare R2 (compatível com S3)**: Utilizado para armazenamento de arquivos (uploads). Apesar de ser compatível com as APIs do AWS S3, neste projeto a conexão é feita diretamente com o serviço da Cloudflare.
- **Redis**: Utilizado como sistema de cache e para gerenciamento de sessões ou filas, melhorando a performance e escalabilidade da aplicação.

Sinta-se à vontade para expandir esta documentação conforme o projeto evolui!
