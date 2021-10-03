var listaFilmes = ["https://static.wikia.nocookie.net/harrypotter/images/e/ea/Capa_Harry_Potter_e_a_Ordem_da_F%C3%AAnix_%28filme%29.jpg/revision/latest?cb=20130101154041&path-prefix=pt-br",
                   "https://www.themoviedb.org/t/p/original/pwwt9rQK9ymCNO6xFPjfDYSXWgH.jpg",
                   "https://novafriburgoemfoco.com.br/wp-content/uploads/2021/09/11764_grande.jpg"
                  ];

for (var i = 0; i < listaFilmes.length; i++){
    document.write("<img src=" + listaFilmes[i] + ">");
}