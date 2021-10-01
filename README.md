# clever-backend

## Como rodar

Primeiro clone o projeto:

```bash
> git clone https://github.com/raphaelvaz/clever-backend.git
```
Depois entre na pasta via terminal:

```bash
> cd /clever-backend
```
Instale todas as dependências:

```bash
> yarn
```

Depois crie um arquivo .env e adicione a url de seu banco de dados.

Rode as migrations no terminal: 

```bash
> yarn typeorm migration:run
```

Starte o projeto:

```bash
> yarn run dev
```

Acesse as rotas da api através do endereço:
```bash
> http://localhost:3000
```

## Rotas

| Função | Método | Caminho | Corpo da Request | 200 |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| Criar conta | POST | http://localhost:3000/signup | {"name":"eduardo costa","birthDate":"2000-11-11"} | {"id": "53df8119-bea8-419a-9b6f-d92b6365eda5","name": "eduardo costa","birth": "2000-11-10T02:00:00.000Z","created_at": "2021-09-30T02:29:05.768Z","updated_at": "2021-09-30T02:29:05.768Z" }
| Criar Metricas | POST | http://localhost:3000/metrics | {"account_id":"d0480a2f-57d4-488d-bfee-a282bcb37534","metrics":[{"date": "2021-09-17 02:00:00","bpm":72,"pamin": 80,"pamax": 120},...]} | [{"date": "2021-09-17 02:00:00","bpm": 72,"pamin": 80,"pamax": 120,"account_id": "53df8119-bea8-419a-9b6f-d92b6365eda5","id": "98f82b51-eab7-4f9e-94c0-aaefed08147b","created_at": "2021-10-01T05:13:42.646Z","updated_at": "2021-10-01T05:13:42.646Z"},...]
