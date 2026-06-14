# Guia de Setup - Curso R Online

## Pré-requisitos

- Git instalado
- Conta no GitHub
- Quarto CLI (opcional, para desenvolvimento local)

## Passos para Publicar no GitHub Pages

### 1. Criar um repositório no GitHub

1. Acesse https://github.com/new
2. Nome do repositório: `curso_r`
3. Descrição: "Site de videoaulas de R - Prof. Oswaldo Gonçalves Cruz"
4. Escolha "Private" ou "Public" conforme preferência
5. Clique em "Create repository"

### 2. Conectar o repositório local ao GitHub

```bash
cd /home/ubuntu/curso_r_quarto

# Renomear branch para 'main' (se necessário)
git branch -M main

# Adicionar o repositório remoto
git remote add origin https://github.com/SEU-USUARIO/curso_r.git

# Fazer push dos arquivos
git push -u origin main
```

### 3. Configurar GitHub Pages

1. Acesse o repositório no GitHub
2. Vá para **Settings** → **Pages**
3. Em "Build and deployment":
   - Source: "Deploy from a branch"
   - Branch: `main`
   - Folder: `/docs`
4. Clique em "Save"

O site estará disponível em: `https://seu-usuario.github.io/curso_r`

## Adicionar Links dos Vídeos

1. Abra o arquivo `index.qmd` em um editor de texto
2. Procure pelas linhas com `<!-- SUBSTITUA O '#' PELO LINK DO GOOGLE DRIVE -->`
3. Substitua o `#` pelo link de compartilhamento do Google Drive

### Exemplo de Link do Google Drive

Para um arquivo no Google Drive com ID `1a2b3c4d5e6f7g8h9i0j`, use:

```
https://drive.google.com/uc?export=download&id=1a2b3c4d5e6f7g8h9i0j
```

Ou para compartilhamento direto:

```
https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view?usp=sharing
```

## Atualizar o Site

Após fazer alterações:

```bash
# Renderizar o site (gera os arquivos em /docs)
quarto render

# Adicionar as mudanças
git add .

# Fazer commit
git commit -m "Descrição das mudanças"

# Fazer push
git push origin main
```

## Alterar a Senha

Para alterar a senha de acesso ao site:

1. Abra o arquivo `auth.js`
2. Procure pela linha: `const correctPassword = 'cursor2026#';`
3. Substitua `'cursor2026#'` pela nova senha desejada
4. Salve o arquivo
5. Faça commit e push das mudanças

## Suporte

Para mais informações sobre Quarto, visite: https://quarto.org/

---

**Criado em**: 2026
