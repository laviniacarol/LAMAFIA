# 🛍️ LB Store - E-commerce de Moda Fitness

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript)
![Sass](https://img.shields.io/badge/Sass-1.95.1-CC6699?style=for-the-badge&logo=sass)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite)

E-commerce moderno e responsivo de moda fitness desenvolvido com React, TypeScript e Sass. Projeto criado do zero sem design prévio, demonstrando habilidades de UI/UX design e desenvolvimento front-end. 

## ✨ Features

### Funcionalidades Principais
- 🛒 **Carrinho de Compras Completo** - Adicionar, remover e atualizar quantidades
- 🔔 **Sistema de Notificações Toast** - Feedback visual para ações do usuário
- 👤 **Autenticação de Usuário** - Sistema de login e registro com localStorage
- 📱 **Design Responsivo** - Otimizado para desktop, tablet e mobile
- 🎨 **Animações Suaves** - Transições e efeitos visuais modernos
- 🔍 **SEO Otimizado** - Meta tags e Open Graph configurados
- 📄 **Página 404 Personalizada** - Tratamento elegante de rotas não encontradas

### Características Técnicas
- ⚡ **Performance** - Lazy loading e code splitting
- 🎯 **TypeScript** - Tipagem estática para melhor manutenibilidade
- 🎭 **Context API** - Gerenciamento de estado global
- 🧩 **Componentes Modulares** - Arquitetura escalável
- 🎨 **SCSS Modules** - Estilização com escopo local
- 🔄 **React Router** - Navegação SPA

## 🚀 Tecnologias

- **React** 19.2.0 - Biblioteca JavaScript para interfaces
- **TypeScript** 5.9.3 - Superset JavaScript com tipagem estática
- **Vite** 7.1.7 - Build tool e dev server ultra-rápido
- **React Router DOM** 6.30.2 - Roteamento para SPA
- **Sass** 1.95.1 - Pré-processador CSS
- **Axios** 1.13.2 - Cliente HTTP
- **React Icons** 5.5.0 - Biblioteca de ícones
- **Styled Components** 5.3.11 - CSS-in-JS
- **ESLint** 9.36.0 - Linter para qualidade de código

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/lamafia.git

# Entre no diretório
cd lamafia/mafia

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🏗️ Estrutura do Projeto

```
mafia/
├── src/
│   ├── assets/          # Imagens, fontes e vídeos
│   │   ├── fonts/
│   │   ├── imagens/
│   │   └── video/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Loading/
│   │   └── Toast/
│   ├── containers/      # Componentes de página/seção
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Sale/
│   │   ├── Man/
│   │   ├── Shoes/
│   │   ├── Colab/
│   │   ├── Acessory/
│   │   ├── Cart/
│   │   ├── Email/
│   │   ├── Footer/
│   │   └── User/
│   ├── contexts/        # Context API
│   │   ├── AuthContext.tsx
│   │   ├── CartContext.tsx
│   │   └── ToastContext.tsx
│   ├── pages/          # Páginas
│   │   └── NotFound/
│   ├── routes/         # Configuração de rotas
│   ├── services/       # Serviços e API
│   ├── GlobalStyle.ts  # Estilos globais
│   └── main.tsx        # Ponto de entrada
├── index.html
├── package.json
└── vite.config.ts
```

## 🎯 Funcionalidades Detalhadas

### Sistema de Carrinho
- Adicionar produtos ao carrinho
- Atualizar quantidades (incrementar/decrementar)
- Remover produtos
- Cálculo automático do total
- Persistência de dados durante a sessão
- Interface lateral deslizante

### Autenticação
- Registro de novos usuários
- Login com validação
- Persistência com localStorage
- Logout com limpeza de dados
- Proteção de rotas (preparado para expansão)

### Sistema de Notificações
- Toast notifications com 4 tipos (success, error, info, warning)
- Auto-dismiss após 3.5 segundos
- Animações suaves de entrada/saída
- Empilhamento de múltiplas notificações
- Design responsivo

### Design Responsivo
- Breakpoints otimizados para diferentes dispositivos
- Menu mobile com hamburger
- Grid adaptativo para produtos
- Imagens responsivas
- Fontes fluidas com clamp()

## 🎨 Destaques de Design

- **Paleta de Cores**: Preto, vermelho e branco para contraste forte
- **Tipografia**: Julius Sans One, Inter e Tajawal para hierarquia
- **Animações**: Fade-in, slide, hover effects e transições suaves
- **Layout**: Grid responsivo e flexbox para alinhamento
- **Botões**: Gradientes modernos com efeitos de hover

## 📱 Páginas e Seções

1. **Home**
   - Hero com vídeo de fundo
   - Seção Sale (coleção feminina)
   - Seção Man (linha masculina)
   - Seção Shoes (tênis)
   - Seção Colab (colaboração Gigi Hadid)
   - Seção Acessory (acessórios de treino)
   - Newsletter signup

2. **User**
   - Login/Registro
   - Perfil do usuário

3. **404**
   - Página de erro personalizada
   - Navegação de volta para home

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Lint
npm run lint
```

## 🌟 Diferenciais do Projeto

1. **Design Original** - Criado sem Figma ou ferramentas de design prévias
2. **Código Limpo** - Arquitetura bem estruturada e componentizada
3. **TypeScript** - Tipagem forte para melhor manutenibilidade
4. **Performance** - Otimizações e lazy loading
5. **UX Moderna** - Animações e feedback visual
6. **SEO Ready** - Meta tags e estrutura semântica
7. **Acessibilidade** - ARIA labels e navegação por teclado
8. **Responsividade** - Funciona perfeitamente em todos dispositivos

## 📈 Possíveis Melhorias Futuras

- [ ] Implementar backend com Node.js
- [ ] Adicionar filtros e busca de produtos
- [ ] Sistema de wishlist/favoritos
- [ ] Página de detalhes do produto
- [ ] Processo completo de checkout
- [ ] Integração com API de pagamento
- [ ] Reviews e avaliações de produtos
- [ ] Testes unitários e e2e
- [ ] PWA (Progressive Web App)
- [ ] Multi-idiomas (i18n)

## 👩‍💻 Desenvolvido por

**Carol Lavinia**
- GitHub: [@laviniacarol](https://github.com/laviniacarol)
- LinkedIn: [Carol Lavinia](https://www.linkedin.com/in/carol-lavinia-166410287/)

## 📄 Licença

Este projeto é de código aberto e está disponível para fins educacionais e de portfólio.

---

⭐ Se você gostou deste projeto, deixe uma estrela!
