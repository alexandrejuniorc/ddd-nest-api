# Estrutura de Pastas e Arquivos

Este documento explica a organização das principais pastas e arquivos do projeto, seguindo os princípios de Domain-Driven Design (DDD) e boas práticas com NestJS.

## Visão Geral

```
src/
  core/
  domain/
  infra/
test/
prisma/
docs/
```

## src/

### core/

Contém abstrações e utilitários reutilizáveis em todo o domínio, como entidades base, eventos de domínio, notificações, helpers, etc.

### domain/

Onde fica a lógica de negócio da aplicação. Aqui estão as entidades do domínio, casos de uso, repositórios (interfaces), agregados, serviços de domínio, etc. Não deve ter dependências de frameworks.

### infra/

Tudo que é específico de frameworks, banco de dados, e integrações externas. Aqui ficam as implementações concretas dos repositórios, módulos do NestJS, controllers, pipes, interceptors, providers, e integrações (ex: Prisma, Redis).

- **http/**: Tudo relacionado à camada REST da aplicação (controllers, DTOs, pipes, interceptors, etc).
- **database/**: Implementações de repositórios, migrations, seeds, e integrações com o banco de dados (ex: Prisma).
- **auth/**: Estratégias de autenticação, guards, e providers relacionados.
- **cache/**: Integração com Redis ou outros sistemas de cache.
- **providers/**: Serviços externos (ex: envio de e-mail, upload de arquivos, etc).

## test/

Testes unitários e de integração. Estruture os testes de acordo com os módulos da aplicação.

## prisma/

Arquivos do Prisma ORM, como o `schema.prisma`, migrations e seeds.

## docs/

Documentação adicional do projeto, como este arquivo.

---

> **Dica:** Mantenha cada camada bem separada para facilitar a manutenção, testes e evolução do projeto. O domínio nunca deve depender de detalhes de frameworks ou
