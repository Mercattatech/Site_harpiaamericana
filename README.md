# Harpia Americana — Site

Novo site institucional da Harpia Americana (harpiaamericana.com). Site estático, sem build: HTML, CSS e JavaScript puros.

## Estrutura

```
index.html            Página única (home)
assets/styles.css     Estilos globais e estados interativos
assets/main.js        Interações (idioma, herbário, fragrâncias, serviços)
assets/img/           Imagens otimizadas em WebP
```

## Rodar localmente

Abra `index.html` no navegador, ou sirva a pasta:

```bash
npx serve .
# ou
python3 -m http.server 8080
```

## Publicar

Funciona direto em GitHub Pages, Netlify, Vercel ou qualquer hospedagem estática: basta apontar para a raiz da pasta.

## Conceito

A página é uma descida de altitude, do topo da copa (onde a harpia vive) até a raiz:

| Altitude | Seção |
|---|---|
| ↑ 50 m · Copa | Hero |
| — | Manifesto e valores |
| ↓ 30 m · Sub-bosque | Herbário interativo (breu branco, copaíba, erva-baleeira) |
| ↓ 15 m | Produtos: Óleo Corporal Projeto Dona Delia (Ylang-Ylang e Gerânio), Óleos Essenciais, Brindes |
| ↓ 5 m | Serviços em acordeão |
| 0 m · Raízes | Sobre a empresa |
| — | Contato e rodapé |

**Tipografia:** Gloock (títulos), Hanken Grotesk (texto), JetBrains Mono (legendas), via Google Fonts.
**Cores:** `#0E1611` floresta, `#16241B` sub-bosque, `#EEE8DC` linho, `#D19A4B` resina (variável `--accent` em `styles.css`).

## Pendências

- O seletor de idioma (PT/EN/ES/FR) só muda o estado visual; as traduções ainda não existem.
- Confirmar os nomes científicos dos óleos com a marca.
- Fotos dos óleos corporais sem texto sobreposto deixariam o card de produto mais limpo.
- Links "Ver próximos eventos" e "Solicitar proposta" levam ao contato; criar páginas de Eventos/Serviços se necessário.
