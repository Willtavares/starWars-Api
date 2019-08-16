# StarWars-Api Challenge

## Olá.
## Conforme a descrição do teste, foi feito uma api Rest Interno que obedecem o preceitos de um CRUD.

Para iniciar o projeto é necessário acessar a pasta src e execturar o arquivo index.js

Pode se: 
1. Cadastrar um Planeta com Nome, Clima e Terreno

http://localhost:8000/planet/register

### Ex de inserção em Json
{
	"name": "Alderaan",
	"weather": "temperate",
	"terrain": "grasslands, mountains"
}

2. Listar um ou mais planetas Cadastrados

http://localhost:8000/planet/list

3. Encontra-lo pelo Id

http://localhost:8000/planet/findid/id

4. Encontra-lo pelo nome do planeta

http://localhost:8000/planet/findname/NomedoPlaneta

5. Apaga-lo pelo numro do Id

http://localhost:8000/planet/delete/id

## Agregada para o Sistema uma API externa do endereço: https://swapi.co/api/planets/ com as seguintes finalidades:

1.  Listar todos os planetas cadastrados

http://localhost:8000/externalapi/planets/

2. Encontra-lo pelo Id

http://localhost:8000/externalapi/planet/3

# Os pacotes npm usados foram:

* "body-parser"
* "express"
* "mongoose"
* "request"

A Linguagem usada foi o NodeJs e o banco de dados usado foi o MongoDB

## Obrigado