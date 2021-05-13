# TpCruzi DB
Plataforma web com apresentação de dados genéticos sobre o genoma Trypanosoma Cruzi (protozoário causador da doença de Chagas em humanos) e funcionalidades como BLAST.

Disponível para acesso em: [TpCruzi Web](http://3.142.255.93/)

## Dependências

- Python 3 (pip3)
- Blast 2+


## Configuração

Alterar o PATH da sua instalação do blast local no arquivo "config.json", no diretório

```
## PROJECT_DIR/blast/config.json

{
  "path": "/usr/bin/"
}

```



## Instalação

Para realizar a instalação das dependências, devemos acessar o diretório do projeto e executar o comando

```bash
pip3 install requirements
```


## Iniciando Serviço

```python
sudo python3 manage.py runserver 0.0.0.0:80
```

O Serviço poderá ser acessado através do endereço


http://127.0.0.1 ou http://localhost


![Home-Google-Chrome-2021-04-26-20-24-57](https://user-images.githubusercontent.com/42875522/116165324-027cac00-a6d2-11eb-8d7d-6c8f79981c51.gif)


## Equipe
Ábner Pereira

Diego Melo

Mayana Pontes

Victor Santos

Yuri Santos