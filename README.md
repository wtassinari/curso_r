# Curso R Online

Site de videoaulas de R do Prof. Oswaldo Gonçalves Cruz, Programa de Pós-Graduação em Epidemiologia em Saúde Pública (PROCC/ENSP/Fiocruz).

## Sobre o Curso

Este site hospeda videoaulas de introdução à linguagem R, cobrindo desde conceitos básicos até análise de dados. O curso é dividido em aulas de no máximo 15 minutos para facilitar o aprendizado.

## Estrutura do Projeto

```
curso_r/
├── _quarto.yml          # Configuração do site Quarto
├── index.qmd            # Página principal com todas as aulas
├── styles.css           # Estilos personalizados
├── auth.js              # ⚠️ Script de autenticação (NÃO rastreado - local apenas)
├── auth.js.example      # Template do auth.js para referência
├── logos/               # Logos e imagens do PROCC/ENSP
├── docs/                # Saída HTML gerada (publicada no GitHub Pages)
├── .gitignore           # Arquivos ignorados pelo Git
└── README.md            # Este arquivo
```

## Como Usar

### Localmente

Para renderizar o site localmente, você precisa ter o Quarto instalado:

```bash
# Instalar Quarto (se não tiver)
# https://quarto.org/docs/get-started/

# Renderizar o site
quarto render

# Visualizar em um servidor local
quarto preview
```

### Adicionar Links dos Vídeos

Os links dos vídeos devem ser adicionados no arquivo `index.qmd`. Procure pelas linhas com comentário `<!-- SUBSTITUA O '#' PELO LINK DO GOOGLE DRIVE -->` e substitua o `#` pelo link de compartilhamento do Google Drive.

Exemplo:
```html
<a href="https://drive.google.com/uc?export=download&id=SEU_ID_DO_ARQUIVO" class="download-btn" target="_blank"><i class="fas fa-download"></i> Baixar Vídeo</a>
```

## Proteção por Senha

O site possui proteção por senha para acessar os links de download dos vídeos.

### ⚠️ Segurança - Importante!

**O arquivo `auth.js` contém a senha e NÃO deve ser enviado para o GitHub!**

1. O arquivo `auth.js` está no `.gitignore` e não será rastreado pelo Git
2. Use o arquivo `auth.js.example` como template
3. Para configurar localmente:
   - Copie `auth.js.example` para `auth.js`
   - Edite `auth.js` e substitua `'sua_senha_aqui'` pela senha desejada
   - Nunca faça commit do `auth.js` com a senha real!

### Alterar a Senha

Edite o arquivo `auth.js` (local apenas) e modifique a variável `correctPassword`:

```javascript
const correctPassword = 'sua_nova_senha';
```

### Para Colaboradores

Se outras pessoas forem trabalhar neste projeto:
1. Elas devem copiar `auth.js.example` para `auth.js`
2. Solicitar a senha ao administrador do projeto
3. Atualizar o `auth.js` local com a senha correta

## Publicar no GitHub Pages

1. Crie um repositório no GitHub chamado `curso_r`
2. Clone o repositório localmente
3. Copie os arquivos deste projeto para o repositório
4. Configure o GitHub Pages para usar a branch `main` e o diretório `/docs`
5. Faça push dos arquivos

```bash
git add .
git commit -m "Inicializar site Quarto"
git push origin main
```

O site estará disponível em: `https://seu-usuario.github.io/curso_r`

## Aulas Disponíveis

- Apresentação do Curso
- Instalação R & Rstudio
- Aula 1 - Introdução ao R
- Aula 2 - R como calculadora
- Aula 3 - Obtendo Ajuda
- Aula 4 - Objetos
- Aula 5 - Gerenciando Objetos
- Aula 6a - Vetores parte I
- Aula 6b - Vetores parte II
- Aula 7 - Fatores e Datas
- Aula 8a - Matrizes parte I
- Aula 8b - Matrizes parte II
- Aula 9a - Dataframes parte I
- Aula 9b - Dataframes parte II
- Aula 10 - Listas
- Aula 11a - Importando Dados Parte I
- Aula 11b - Importando Dados Parte II

## Autor

Prof. Oswaldo Gonçalves Cruz  
Programa de Computação Científica (PROCC)  
Escola Nacional de Saúde Pública (ENSP)  
Fundação Oswaldo Cruz (Fiocruz)

## Licença

Este material é fornecido para fins educacionais. Todos os direitos reservados.

---

**Última atualização**: 2026
