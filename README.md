# 🧠 WiseHub — Explorador de Curiosidades

WiseHub é uma aplicação web moderna construída com **Next.js**, que permite aos usuários explorar curiosidades do mundo inteiro usando a **API da Wikipédia**. É possível pesquisar artigos, marcar favoritos e navegar por conteúdos de forma rápida e intuitiva.

🔗 Acesse em: [https://wisehub.vercel.app/](https://wisehub.vercel.app/)

---

## 🚀 Funcionalidades

- 🔍 Pesquisa de artigos curiosos via API da Wikipédia.
- ❤️ Favoritar artigos e armazenar localmente.
- 🔐 Sistema de login simples com proteção de rotas.
- 🌗 Alternância entre temas claro e escuro.
- ⚡ Performance otimizada com cache e carregamento sob demanda.
- 🧩 Middleware para controle de acesso.
- 🧱 Estrutura modular e bem organizada.

---

## 📁 Estrutura do Projeto

```
/app
  /discovery         → Página com resultados da Wikipédia
    [slug]/          → Página dinâmica para artigos individuais
  /favorites         → Lista de favoritos (rota protegida)
  /login             → Tela de login
/components          → Componentes reutilizáveis
/contexts            → Contextos de autenticação e busca
/hooks               → Hooks personalizados (ex: useLike)
```

---

## 🛠️ Tecnologias

- **Next.js 14**
- **TypeScript**
- **Tailwind CSS**
- **Alova (cliente HTTP)**
- **Sonner (notificações)**
- **Lucide React (ícones)**
- **API da Wikipédia**

---

## 🔐 Autenticação

- Formulário de login com validação local
- Sessão armazenada em cookie (`wisehub.token`)
- Rota protegida com contexto e middleware
- Sem banco de dados (usuários definidos no código)

---

## 🧩 Middleware

Middleware configurado em `/middleware.ts` para:
- Bloquear acesso a rotas protegidas (ex: `/favorites`) caso não autenticado
- Redirecionar usuários autenticados longe de `/login`

---

## 📄 Páginas implementadas

| Rota                | Descrição                                                  |
|---------------------|------------------------------------------------------------|
| `/`                 | Página inicial estática com CTA e busca                    |
| `/discovery`        | Página que consome a API externa (Wikipedia)               |
| `/discovery/[slug]` | Rota dinâmica que exibe conteúdo específico                |
| `/favorites`        | Listagem de artigos favoritos (com proteção de acesso)     |
| `/login`            | Formulário de autenticação simples                         |

---

## 📦 Como rodar o projeto

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/wisehub.git
cd wis.ehub
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acesse em**
```
http://localhost:3000
```

---

## 👤 Credenciais de Demonstração

Para testar o sistema de login, utilize as credenciais abaixo:

- **Email:** `admin@email.com`
- **Senha:** `admin.123!`

---

## ✅ Checklist de Requisitos (Teste Prático)

- [x] Mínimo de 3 rotas com página
- [x] Página que consome API externa (Wikipedia)
- [x] Página estática (home)
- [x] Página dinâmica com parâmetro (`/discovery/[slug]`)
- [x] Middleware implementado
- [x] Sistema de autenticação funcional
- [x] Otimizações de performance
- [x] Projeto público no GitHub com README

---

## 📄 Licença

Projeto desenvolvido para fins de avaliação técnica — 2025 © Todos os direitos reservados.
