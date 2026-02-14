# 📚 Documentação de Features Profissionais

## Sistema de Notificações Toast

### Como usar

```tsx
import { useToast } from '../../contexts/ToastContext';

function MeuComponente() {
  const { addToast } = useToast();

  const handleAction = () => {
    // Tipos disponíveis: 'success', 'error', 'info', 'warning'
    addToast('Ação realizada com sucesso!', 'success');
  };

  return <button onClick={handleAction}>Clique aqui</button>;
}
```

### Tipos de Toast
- **success** - Para ações bem-sucedidas (verde)
- **error** - Para erros (vermelho)
- **info** - Para informações gerais (azul)
- **warning** - Para avisos (amarelo)

### Configuração
- **Duração**: 3.5 segundos (auto-dismiss)
- **Posição**: Canto superior direito (mobile: centralizado)
- **Empilhamento**: Múltiplas notificações empilham verticalmente

---

## Componente Loading

### Uso básico

```tsx
import Loading from '../../components/Loading';

function MeuComponente() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loading />;
  }

  return <div>Conteúdo carregado</div>;
}
```

### Quando usar
- Durante carregamento de dados da API
- Enquanto processa operações assíncronas
- Em transições de página

---

## Página 404

### Funcionalidades
- Design moderno e amigável
- Animação de fade-in
- Botão para voltar à home
- Rota catch-all configurada

### Como funciona
A rota é automaticamente ativada quando o usuário tenta acessar uma URL que não existe:
- `/pagina-inexistente` → Redireciona para 404
- `/produtos/123` → Redireciona para 404 (se não configurado)

---

## SEO Otimizado

### Meta Tags Incluídas

1. **Básicas**
   - Title
   - Description
   - Keywords
   - Author

2. **Open Graph (Facebook)**
   - og:type
   - og:title
   - og:description
   - og:image

3. **Twitter Cards**
   - twitter:card
   - twitter:title
   - twitter:description

4. **Extras**
   - theme-color
   - viewport

### Como editar

Edite o arquivo `index.html` para personalizar:

```html
<meta name="description" content="Sua descrição aqui" />
<meta name="keywords" content="suas, palavras, chave" />
```

---

## Context API

### Contextos Disponíveis

1. **CartContext** - Gerenciamento do carrinho
   ```tsx
   const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();
   ```

2. **AuthContext** - Autenticação
   ```tsx
   const { user, signIn, signOut } = useAuth();
   ```

3. **ToastContext** - Notificações
   ```tsx
   const { toasts, addToast, removeToast } = useToast();
   ```

---

## Estrutura de Componentes

### Padrão de Organização

```
ComponentName/
├── index.tsx           # Componente React
└── ComponentName.module.scss  # Estilos
```

### Boas Práticas

1. **Componentes funcionais** com hooks
2. **TypeScript** para tipagem
3. **SCSS Modules** para estilos encapsulados
4. **Props interface** sempre tipada
5. **Exports nomeados** ou default

---

## Responsividade

### Breakpoints Principais

```scss
// Mobile
@media (max-width: 640px) { }

// Tablet
@media (min-width: 641px) and (max-width: 1024px) { }

// Desktop
@media (min-width: 1025px) { }
```

### Fontes Responsivas

Usando `clamp()` para fontes fluidas:

```scss
font-size: clamp(16px, 3vw, 24px);
// min: 16px, preferred: 3vw, max: 24px
```

---

## Animações

### Animações Disponíveis

1. **fadeIn** - Fade in simples
2. **slideIn** - Desliza da direita
3. **fadeInLeft** - Fade in + desliza da esquerda
4. **fadeInUp** - Fade in + desliza de baixo
5. **spin** - Rotação (loading)
6. **pulse** - Pulsar suave

### Exemplo de uso

```scss
.elemento {
  animation: fadeInUp 0.6s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## Performance

### Otimizações Implementadas

1. **Code Splitting** - Via React Router
2. **Lazy Loading** - Componentes sob demanda
3. **Imagens Otimizadas** - object-fit e compressão
4. **CSS Modules** - Estilos com escopo local
5. **Minificação** - Vite build automático

### Dicas Adicionais

- Use `React.memo()` para componentes pesados
- Implemente `useMemo()` e `useCallback()` quando necessário
- Considere virtualização para listas longas

---

## Deployment

### Build para Produção

```bash
npm run build
```

Isso gera uma pasta `dist/` com os arquivos otimizados.

### Plataformas Recomendadas

1. **Vercel** - Deploy automático com Git
2. **Netlify** - CI/CD integrado
3. **GitHub Pages** - Gratuito para projetos públicos

### Configuração Netlify

Crie um arquivo `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Próximos Passos Sugeridos

### Features Avançadas

1. **Backend Integration**
   - API REST com Node.js/Express
   - Database (MongoDB/PostgreSQL)
   - Autenticação JWT

2. **Funcionalidades**
   - Busca e filtros avançados
   - Sistema de reviews
   - Wishlist/Favoritos
   - Checkout completo

3. **Qualidade**
   - Testes unitários (Jest/Vitest)
   - Testes E2E (Cypress)
   - Storybook para componentes
   - Documentação automática

4. **DevOps**
   - CI/CD pipeline
   - Docker containerization
   - Monitoring e Analytics
   - Error tracking (Sentry)

---

## Recursos Úteis

### Documentação
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Sass](https://sass-lang.com/)

### Ferramentas
- [VS Code](https://code.visualstudio.com/)
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [Figma](https://www.figma.com/) - Para designs futuros

---

**Última atualização**: Fevereiro 2026
