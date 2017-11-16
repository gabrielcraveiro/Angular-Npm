angular.module('myApp')
    .controller("ConsultaCandidatosController", function ($scope, $http) {
        $scope.nome = "";
        $scope.cargo = "";
        $scope.setores = "";
        $scope.empresa = "";
        $scope.localizacao = "";
        $scope.competencias = [],
            $scope.artigos = ""
        $scope.candidatos = "";

        $scope.keys = [
            "nome",
            "cargo",
            "setores",
            "empresa",
            "localizacao",
            "competencias",
            "artigos"
        ]

        $scope.candidatos = (function () {
            var json = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': 'data/candidatos.mock.json',
                'dataType': "json",
                'success': function (data) {
                    json = data;
                }
            });
            console.log(json.hits.hits);
            return json.hits.hits;
        })();

    })