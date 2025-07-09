def main():
    while True:
        personagem = Personagem(input("Digite o nome do Personagem."),
                              input("Digite a idade do Personagem: "),
                              input("Digite a classe do Personagem: "))
        personagem.ataque()

        check_stay = (input("Q para sair, para continuar Enter."))
        if check_stay == "q" or check_stay == "Q":
            break

def frase_de_ataque(classe, ataque):
    print(f"O {classe} atacou usando {ataque}")

class Personagem:
    def __init__(self, nome, idade, classe):
        self.nome = nome
        self.idade = idade
        self.classe = classe

    def ataque(self):
        match self.classe.lower():
            case "guerreiro":
                hit = "Corte de espada!"
                frase_de_ataque(self.classe, hit)

            case "mago":
                hit = "Feixe de magia!"
                frase_de_ataque(self.classe, hit)

            case "ninja":
                hit = "Shuriken dupla!"
                frase_de_ataque(self.classe, hit)

            case "monge":
                hit = "Artes Marciais!"
                frase_de_ataque(self.classe, hit)

            case _:
                hit = "Ataque desconhecido!"
                frase_de_ataque(self.classe, hit)

if __name__ == "__main__":
    main()
