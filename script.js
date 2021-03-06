var pokemon = [];
function adicionaPokemon() {
    pokemon = [
        // Kanto
        bulbasaur = {
            nome: "Bulbasaur",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/bulbasaur.gif",
            atributos: {
                attack: 49,
                defense: 49,
                speed: 45
            }
        },
        
        charmander = {
            nome: "Charmander",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/charmander.gif",
            atributos: {
                attack: 52,
                defense: 43,
                speed: 65
            }
        },
        
        squirtle = {
            nome: "Squirtle",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/squirtle.gif",
            atributos: {
                attack: 48,
                defense: 65,
                speed: 43
            }
        },
        
        // Johto
        chikorita = {
            nome: "Chikorita",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/chikorita.gif",
            atributos: {
                attack: 49,
                defense: 65,
                speed: 45
            }
        },
        
        cyndaquil = {
            nome: "Cyndaquil",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/cyndaquil.gif",
            atributos: {
                attack: 52,
                defense: 43,
                speed: 65
            }
        },
        
        totodile = {
            nome: "Totodile",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/totodile.gif",
            atributos: {
                attack: 65,
                defense: 64,
                speed: 43
            }
        },
        
        //Hoenn 
        treecko = {
            nome: "Treecko",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/treecko.gif",
            atributos: {
                attack: 45,
                defense: 35,
                speed: 70
            }
        },
        
        torchic = {
            nome: "Torchic",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/torchic.gif",
            atributos: {
                attack: 60,
                defense: 40,
                speed: 45
            }
        },
        
        mudkip = {
            nome: "Mudkip",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/mudkip.gif",
            atributos: {
                attack: 70,
                defense: 50,
                speed: 40
            }
        },
        
        //Sinnoh
        turtwig = {
            nome: "Turtwig",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/turtwig.gif",
            atributos: {
                attack: 68,
                defense: 64,
                speed: 31
            }
        },
        
        chimchar = {
            nome: "Chimchar",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/chimchar.gif",
            atributos: {
                attack: 58,
                defense: 44,
                speed: 61
            }
        },
        
        piplup = {
            nome: "Piplup",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/piplup.gif",
            atributos: {
                attack: 51,
                defense: 53,
                speed: 40
            }
        },
        
        // Unova
        snivy = {
            nome: "Snivy",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/snivy.gif",
            atributos: {
                attack: 45,
                defense: 55,
                speed: 63
            }
        },
        
        tepig = {
            nome: "Tepig",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/tepig.gif",
            atributos: {
                attack: 63,
                defense: 45,
                speed: 45
            }
        },
        
        oshawott = {
            nome: "Oshawott",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/oshawott.gif",
            atributos: {
                attack: 48,
                defense: 65,
                speed: 43
            }
        },
        
        // Kalos
        chespin = {
            nome: "Chespin",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5/chespin.png",
            atributos: {
                attack: 61,
                defense: 65,
                speed: 38
            }
        },
        
        fennekin = {
            nome: "Fennekin",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/fennekin.gif",
            atributos: {
                attack: 45,
                defense: 40,
                speed: 60
            }
        },
        
        froakie = {
            nome: "Froakie",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/froakie.gif",
            atributos: {
                attack: 56,
                defense: 40,
                speed: 71
            }
        },
        
        // Alola
        rowlet = {
            nome: "Rowlet",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/rowlet.gif",
            atributos: {
                attack: 55,
                defense: 55,
                speed: 42
            }
        },
        
        litten = {
            nome: "Litten",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5/litten.png",
            atributos: {
                attack: 65,
                defense: 40,
                speed: 70
            }
        },
        
        popplio = {
            nome: "Popplio",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5/popplio.png",
            atributos: {
                attack: 54,
                defense: 54,
                speed: 40
            }
        },
        
        // Galar
        grookey = {
            nome: "Grookey",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/grookey.gif",
            atributos: {
                attack: 65,
                defense: 50,
                speed: 65
            }
        },
        
        scorbunny = {
            nome: "Scorbunny",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/scorbunny.gif",
            atributos: {
                attack: 71,
                defense: 40,
                speed: 69
            }
        },
        
        sobble = {
            nome: "Sobble",
            imagem: "https://play.pokemonshowdown.com/sprites/gen5ani/sobble.gif",
            atributos: {
                attack: 40,
                defense: 40,
                speed: 70
            }
        },];
    }
    
    var divPokemonConteudo = "<div class='img'><img src='' id='pokemon-sprite' alt=''></div><div class='stats'><h2 id='pokemon-name'>a</h2><label for='atk-btn' id='atk-label'><input type='radio' name='stat' id='atk-btn' checked value='attack'> Attack: </label><label for='def-btn' id='def-label'><input type='radio' name='stat' id='def-btn' value='defense'> Defense: </label><label for='spe-btn' id='spe-label'><input type='radio' name='stat' id='spe-btn' value='speed'> Speed: </label></div>"
    var pokemonCPU;
    var pokemonJogador;
    var numeroPokemonCPU;
    var numeroPokemonJogador;
    var vitorias = 0, empates = 0, derrotas = 0;
    
    function sortearPokemon() {
        if (document.getElementById("pokemon-jogador") != divPokemonConteudo) {
            document.getElementById("pokemon-jogador").innerHTML = divPokemonConteudo;
        }
        
        numeroPokemonCPU = parseInt(Math.random() * pokemon.length);
        pokemonCPU = pokemon[numeroPokemonCPU];
        pokemon.splice(numeroPokemonCPU, 1);
        
        numeroPokemonJogador = parseInt(Math.random() * (pokemon.length - 1));
        pokemonJogador = pokemon[numeroPokemonJogador];
        
        document.getElementById("btn-sortear").disabled = true;
        document.getElementById("btn-jogar").disabled = false;
        
        if (pokemon.length > 0) {
            mostrarPokemon(pokemonJogador);
        } else {
            mostraResultados();
        }
    }
    
    function mostrarPokemon(pokemonJogador) {
        document.getElementById("pokemon-jogador").style.visibility = "visible";
        document.getElementById("pokemon-sprite").src = pokemonJogador.imagem;
        document.getElementById("pokemon-name").innerHTML = pokemonJogador.nome;
        document.getElementById("atk-label").innerHTML += pokemonJogador.atributos.attack;
        document.getElementById("def-label").innerHTML += pokemonJogador.atributos.defense;
        document.getElementById("spe-label").innerHTML += pokemonJogador.atributos.speed;
    }
    
    function obtemAtributoSelecionado() {
        var statMarcado = document.querySelector('input[name = stat]:checked').value;
        return statMarcado;
    }
    
    function jogar() {
        var statSelecionado = obtemAtributoSelecionado();
        var elementoResultado = document.getElementById("pokemon-jogador");
        var valorPokemonJogador = pokemonJogador.atributos[statSelecionado];
        var valorPokemonCPU = pokemonCPU.atributos[statSelecionado];
        
        if (valorPokemonJogador > valorPokemonCPU) {
            elementoResultado.innerHTML = `<p id="resultado">Voc?? venceu a rodada! Seu ${pokemonJogador.nome}, com ${valorPokemonJogador} de ${statSelecionado}, derrotou o ${pokemonCPU.nome} do advers??rio!</p>`;
            vitorias++;
        } else if (valorPokemonCPU > valorPokemonJogador) {
            elementoResultado.innerHTML = `<p id="resultado">Voc?? perdeu o round! Seu ${pokemonJogador.nome}, com ${valorPokemonJogador} de ${statSelecionado}, foi derrotado pelo ${pokemonCPU.nome} do advers??rio!</p>`;
            derrotas++;
        } else {
            elementoResultado.innerHTML = `<p id="resultado">Empate! Seu ${pokemonJogador.nome} e o ${pokemonCPU.nome} do advers??rio empataram em ${statSelecionado}, com ${valorPokemonJogador} pontos!</p>`;
            empates++;
        }
        
        pokemon.splice(numeroPokemonJogador, 1);
        document.getElementById("btn-sortear").disabled = false;
        document.getElementById("btn-jogar").disabled = true;
    }
    
    
    function reiniciar() {
        adicionaPokemon();
        vitorias = 0, derrotas = 0, empates = 0;
        document.getElementById("btn-sortear").disabled = false;
        document.getElementById("btn-jogar").disabled = true;
        document.getElementById("btn-sortear").style.visibility = "visible";
        document.getElementById("btn-jogar").style.visibility = "visible";
        document.getElementById("btn-reiniciar").style.visibility = "hidden";
        document.getElementById("pokemon-jogador").innerHTML = divPokemonConteudo;
        document.getElementById("pokemon-jogador").style.visibility = "hidden";
    }
    
    function mostraResultados() {
        if (vitorias > derrotas) {
            document.getElementById("pokemon-jogador").innerHTML = `<p id="resultado">Voc?? venceu! Ao final, voc?? teve ${vitorias} vit??rias, ${empates} empates e ${derrotas} derrotas. Parab??ns!</p>`
        } else if (derrotas > vitorias) {
            document.getElementById("pokemon-jogador").innerHTML = `<p id="resultado">Voc?? foi derrotado... A m??quina te superou ${derrotas} vezes, enquanto voc?? venceu apenas ${vitorias} rounds. Tamb??m houveram ${empates} empates.</p>`
        } else if (derrotas === vitorias) {
            document.getElementById("pokemon-jogador").innerHTML = `<p id="resultado">Empate! Voc?? e a m??quina obtiveram ${vitorias} vit??rias cada, portanto, n??o houve vencedor! Tamb??m tivemos ${empates} rounds empatados.</p>`
        }
        document.getElementById("btn-sortear").style.visibility = "hidden";
        document.getElementById("btn-jogar").style.visibility = "hidden";
        document.getElementById("btn-reiniciar").style.visibility = "visible";
    }