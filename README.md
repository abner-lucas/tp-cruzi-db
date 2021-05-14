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


![](https://github.com/victorsantosok/abelem/blob/master/Google-Google-Chrome-2021-05-14.gif)


## Equipe
Ábner Pereira

Diego Melo

Mayana Pontes

Victor Santos

Yuri Santos
