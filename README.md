# TpCruzi DB
Plataforma web com apresentação de dados genéticos sobre o genoma Trypanosoma Cruzi (protozoário causador da doença de Chagas em humanos) e funcionalidades como BLAST.

Disponível para acesso em: [TpCruzi Web](http://3.142.255.93/)

Pasta do Projeto: **WebProject**

## Dependências

- Sistema Operacional Linux
- Python 3 (pip3)
- Blast 2+
- Clustal W 2


## Configuração

Alterar o PATH da sua instalação do blast local no arquivo "config.json", no diretório "blast"

```
## PROJECT_DIR/blast/config.json

{
  "path": "/usr/bin/"
}

```

Alterar o PATH da sua instalação do ClustalW local no arquivo "config.json", no diretório "filogenia"

```
## PROJECT_DIR/filogenia/config.json

{
  "path": "/usr/bin/clustalw2"
}

```

## Instalação

Para realizar a instalação das dependências, devemos acessar o diretório do projeto e executar o comando

```bash
pip3 install -r requirements
```


## Iniciando Serviço

Acessar a pasta do projeto (WebProject) e executar o comando:

```python
sudo python3 manage.py runserver 0.0.0.0:80
```

O Serviço poderá ser acessado através do endereço


http://127.0.0.1


![Meu-Vídeo3](https://user-images.githubusercontent.com/42875522/121757508-2a926400-caf4-11eb-9ef0-4019fd7c3df9.gif)



## Equipe
Ábner Pereira

Diego Melo

Mayana Pontes

Victor Santos

Yuri Santos
