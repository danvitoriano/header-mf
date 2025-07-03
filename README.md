# Header Micro-Frontend

Este é o micro-frontend do **Header** da aplicação, desenvolvido com **Next.js**, **Material UI** e **Single-SPA**.

## 🚀 Execução Local

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento (porta 3001)
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start
```

## 🌐 Deploy na Vercel

### Deploy Automático
1. Push para GitHub
2. Conecte na Vercel
3. Configure Root Directory: `header-mf`
4. Deploy automático

### Deploy Manual
```bash
npm run deploy
```

## 📦 Componente

O header inclui:
- Logo da aplicação
- Menu de navegação
- Botões de ação
- Ícone de perfil
- Design responsivo

## 🔧 Configuração

### Portas
- **Desenvolvimento**: 3001
- **Produção**: Definida pela Vercel

### Variáveis de Ambiente
```bash
NODE_ENV=production # Para build de produção
```

## 📁 Estrutura

```
header-mf/
├── src/app/
│   ├── page.tsx          # Componente principal
│   ├── microfrontend.tsx # Entry point Single-SPA
│   └── layout.tsx        # Layout
├── next.config.ts        # Configuração Next.js
└── package.json
```

## 🎯 Single-SPA Integration

Este micro-frontend expõe as seguintes funções:
- `bootstrap()`: Inicialização
- `mount()`: Montagem no DOM
- `unmount()`: Desmontagem

## 🔗 Dependências

- Next.js 15
- Material UI 7
- Single-SPA 6
- TypeScript 5
