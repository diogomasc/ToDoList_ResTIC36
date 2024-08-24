# Lista de Tarefa - ResTIC 36

## Descrição do Projeto

Este projeto faz parte da ResTIC 36 na trilha de desenvolvimento mobile, na 3ª unidade. O objetivo é criar uma aplicação básica de lista de tarefas utilizando React Native. O aplicativo permite adicionar tarefas, visualizar a lista de tarefas e exibir uma contagem total de tarefas. Ele também conta com a funcionalidade de exibir cartões (CardNumber), que podem ser usados para representar informações adicionais ou estatísticas.


<div style="display: flex; overflow-x: auto;">
   <img src="https://github.com/user-attachments/assets/e986a9d7-4956-44ac-817c-d20a0fe45e6f" alt="Tela 1" style="height: 500px; margin-right: 10px;">
</div>

### Funcionalidades Implementadas

- **Adição de Tarefas**: Permite ao usuário adicionar novas tarefas com uma descrição (que ainda não estão exibindo o texto digitado no campo de entrada). O sistema verifica se o campo está vazio e se a tarefa já existe para evitar duplicações.
- **Contagem de Tarefas**: Exibe a quantidade total de tarefas na interface.
- **Interface de Usuário**:
  - Campo de entrada para novas tarefas.
  - Botão com ícone para adicionar tarefas.
  - Lista de tarefas com uma mensagem exibida quando a lista está vazia.
  - Cartões (`CardNumber`) na parte superior para exibir informações ou estatísticas adicionais.
- **Foco no Campo de Entrada**: Após adicionar uma tarefa, o campo de entrada perde o foco automaticamente.

### Funcionalidades Pendentes

- **Gerenciamento de Conclusão de Tarefas**: Adicionar a capacidade de marcar tarefas como concluídas.
- **Remoção de Tarefas**: Implementar a funcionalidade para remover tarefas da lista.
- **Persistência de Dados**: Garantir que as tarefas sejam salvas e persistidas entre as sessões do aplicativo.
- **Melhorias na UI/UX**: Refinar a interface para uma melhor experiência do usuário, incluindo ajustes nos cartões e na visualização das tarefas.
- **Testes e Validação**: Adicionar testes para verificar a estabilidade e o funcionamento correto das funcionalidades.

## Instruções para Executar o Projeto

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/diogomasc/ToDoList_ResTIC36.git
   ```

2. **Navegue até o Diretório do Projeto**:
   ```bash
   cd ToDoList_ResTIC36
   ```

3. **Instale as Dependências**:
   ```bash
   npm install
   ```

4. **Inicie o Projeto**:
   ```bash
   npm start
   ```

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento móvel.
- **Expo**: Plataforma para criar e executar aplicativos React Native.
- **React**: Biblioteca para interfaces de usuário.
