angular.module('myApp')
    .controller("IndexController", function ($scope, $http) {
        $scope.nome = "";
        $scope.cargo = "";
        $scope.setor = "";
        $scope.localizacao = "";
        $scope.competencias = [],
            $scope.candidatos = "";

        $scope.keys = [
            "nome",
            "cargo",
            "setor",
            "localizacao",
            "competencias"
        ]

        $scope.vagas = (function () {
            var json = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': 'data/projeto.mock.json',
                'dataType': "json",
                'success': function (data) {
                    json = data;
                }
            });
            console.log(json.hits.hits);
            return json.hits.hits;
        })();
    })