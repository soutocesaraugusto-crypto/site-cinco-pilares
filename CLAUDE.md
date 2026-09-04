# Projeto: Site institucional Método ISAN (Os Cinco Pilares)

**Este repositório é o site https://www.metodoisan.com.br** (redireciona para `metodoisan.com.br`) — landing page de funil para os 3 livros e o método de César Souto.

## Identificação — NÃO CONFUNDIR

- **Cliente/dono**: César Souto (Método ISAN)
- **Domínio**: www.metodoisan.com.br / metodoisan.com.br
- **Repo GitHub**: `soutocesaraugusto-crypto/site-cinco-pilares` (público)
- **Hospedagem**: GitHub Pages

⚠️ Existe um projeto totalmente diferente e não relacionado (diagnóstico da Dra. Lauriane Silva/Inself) — clientes, repos e domínios diferentes. Nunca confundir.

## Projeto irmão — ferramenta de diagnóstico

O diagnóstico (`diagnostico.metodoisan.com.br`) é um **repositório separado**:
- Local: `C:\Users\cesar\OneDrive\Desktop\projeto-maes\`
- GitHub: `soutocesaraugusto-crypto/projeto_maes` (privado)
- Hospedagem: Render.com

## ⚠️ IMPORTANTE: `index.html` é gerado, não editar direto

O `index.html` da raiz é montado automaticamente (HTML+CSS+JS+fontes+imagens embutidos em base64) e **não deve ser editado diretamente** — a edição se perde na próxima geração. Fluxo correto:

1. Editar `build-assets/template.html` (versão legível, com placeholders tipo `{{FONT_FACES}}`, `{{COVER1}}`, etc.)
2. Rodar `node build-assets/assemble.js` na raiz do repo — isso lê os assets de `build-assets/` e regrava `index.html`.
3. Commitar e dar push do `index.html` regenerado (é ele que o GitHub Pages serve).

## Regra de verificação antes de declarar "resolvido"

Depois de qualquer alteração visual: abrir o site publicado de verdade (desktop e mobile) e conferir visualmente antes de dizer que está pronto. Não basta rodar o build sem checar o resultado renderizado.
