import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());


let example = {
    // ID
    // - Titulo
    // - Imagem
    // - Descrição
    // - Data
    // - Arquivos
    //   - Array não ordenado
    // - Marcador
    //   - Fixo
    //   - Nóticias = Data mais recente + número de acessos
    //   - Editais & Licitações = Mais recentes 
    //   - Editais Homologados = Mais recentes 

    id: 0,
    titulo: 'Exemplo',
    imagem: 'https://via.placeholder.com/150',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    data: '01/01/2022',
    arquivos: [ 
     'https://exemplo.com/arquivo1.pdf',
     'https://exemplo.com/arquivo2.pdf',
    ],
    acessos: 0,
    marcadores: [
        'fixo',
    ]

}

app.get('/', (req, res) => {
    res.redirect('/api')
})

app.get('/api', (req, res) => {
    res.send(JSON.stringify(example));
})

app.listen(3000, () => {
    console.log('Running on port 3000');
})