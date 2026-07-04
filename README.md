# Site de divulgação — Trilogia "Os Cinco Pilares"

Landing page de funil para os 3 livros e o método de César Augusto Souto. Gerada a partir da Declaração Fundadora, do PDF da Metodologia, do Playbook Estratégico e dos manuscritos dos 3 livros.

## Publicar

`index.html` é um arquivo único e autocontido (HTML + CSS + JS + fontes + capas dos livros, tudo embutido em base64). Não depende de nenhum servidor, build step ou API externa — basta subir esse arquivo como está.

- **Netlify/Vercel/GitHub Pages:** arraste a pasta ou aponte para este `index.html`.
- **No mesmo host do site atual (Render, etc.):** substitua o `index.html` estático atual por este.

## Editar / regenerar

O arquivo final não deve ser editado diretamente (é gerado). Para alterar conteúdo ou estilo:

1. Edite `build-assets/template.html` (HTML/CSS/JS legível, com placeholders `{{FONT_FACES}}`, `{{COVER1}}`, `{{COVER2}}`, `{{COVER3}}`, `{{HERO_BOY}}`).
2. Rode `node build-assets/assemble.js` — isso lê `build-assets/fonts/fonts_inline_var.css` e as imagens em `build-assets/capas/` (3 capas dos livros + `menino_hero.png`), injeta tudo como base64 e regrava `index.html` na raiz.

## Sobre a foto do herói (menino de camiseta amarela)

`build-assets/capas/menino_hero.png` é um recorte (fundo removido) da foto original em `D:\PESSOAL\PROJETO FILHO HOMEM\LIVRO\fundo site.jpg`. O recorte foi feito por script (flood-fill a partir das bordas + decontaminação de cor + suavização de borda), não em um editor de imagem — se um dia quiser trocar a foto ou refazer o recorte com mais qualidade (Photoshop/remove.bg), é só gerar um novo PNG com fundo transparente do mesmo jeito e substituir esse arquivo antes de rodar o `assemble.js`. A imagem aparece em dois lugares: em destaque no hero (com brilho dourado, sombra e leve efeito de flutuação/parallax) e como marca d'água bem sutil (6% de opacidade) na seção de captura de e-mail no fim da página.

## Pendências antes de publicar de verdade

- Os CTAs de compra dos livros levam a um formulário de "avise-me no lançamento" — ainda não há link real da Amazon.
- Não há depoimentos de leitores (nenhum foi inventado; a prova social usa apenas as referências científicas do método).
- O formulário de e-mail final é só visual — não envia para nenhum backend/CRM ainda. Precisa ligar a um serviço real (ex: Mailchimp, ActiveCampaign, ou o mesmo backend do diagnóstico).
- O CTA de diagnóstico completo já aponta para a ferramenta real e ao vivo: https://legado-paterno-diagnostico.onrender.com
