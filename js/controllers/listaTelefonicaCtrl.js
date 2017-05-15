// iniciando o controller

angular.module("ListaTelefonica").controller("ListaTelefonicaCtrl", function($scope){

	$scope.adicionarContato = {};

	$scope.app = "Lista telefônica";
	$scope.selecionado = "selecionado";

	$scope.contatos = [
		{nome: "Pedro", telefone: "99999999", data : '18/03/2017',operadora: 'Oi',cor: 'red'},
		{nome: "Ana", telefone: "88888888",data : '15/03/2017',operadora: 'Vivo', cor: 'blue'},
		{nome: "Maria", telefone: "77777777",data : '16/02/2017',operadora: 'Tim', cor: 'green'},
	];

	$scope.operadoras = [
		{nome: "Oi" , codigo: '14', categoria: 'Celular', preco: '233333'},
		{nome: "Vivo" , codigo: '15',categoria: 'Celular', preco: '3'},
		{nome: "Tim" , codigo: '41', categoria: 'Celular', preco: '1'},
		{nome: "GVT" , codigo: '25', categoria: 'Fixo', preco: '5'},
		{nome: "Embratel" , codigo: '21', categoria: 'Fixo', preco: '4'},
	]

	$scope.adicionarContato = function(contato){
		$scope.contatos.push(contato);
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
	}


	$scope.apagarContatos = function(contatos) {
		$scope.contatos = contatos.filter(function(contato) {
			if (!contato.selecionado) return contato;
		})

	}

	$scope.isContatoSelecionado = function(contatos) {
		return contatos.some(function (contato) {
			return contato.selecionado;
		})

		console.log(isContatoSelecionado);
	}
	$scope.ordenarPor = function(campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	}

})
