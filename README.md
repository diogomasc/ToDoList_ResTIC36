# Lista de Tarefa - ResTIC 36

## Descrição do Projeto!


Este projeto faz parte da ResTIC 36 na trilha de desenvolvimento mobile, atualizado até a 4ª unidade. O objetivo é criar uma aplicação básica de lista de tarefas utilizando React Native, explorando o uso de hooks, `useState`, `useEffect` e `props`. A aplicação permite adicionar tarefas, visualizar a lista de tarefas e exibir uma contagem total de tarefas, divididas em tarefas criadas, em aberto e finalizadas.

A aplicação agora inclui uma solução completa para gerenciar e atualizar a contagem das tarefas, bem como ordenar as tarefas conforme seu status (em aberto ou finalizadas). O uso da função `sort` garante que as tarefas sejam exibidas em ordem correta, e a contagem é atualizada automaticamente com base nas mudanças no estado.

<p aling="center">
   <img width="260" heitgh="100" src="https://github.com/user-attachments/assets/698b3a0b-3e53-496b-a02b-4fcbfe0da81f">
</p>

### Funcionalidades Implementadas

- **Adição de Tarefas**: Permite ao usuário adicionar novas tarefas com uma descrição. O sistema verifica se o campo está vazio e se a tarefa já existe para evitar duplicações.
- **Contagem de Tarefas**: Exibe a quantidade total de tarefas, bem como a contagem de tarefas em aberto e finalizadas. Agora a aplicação atualiza corretamente essas contagens quando uma tarefa é criada, concluída ou removida.
- **Ordenação de Tarefas**: As tarefas são ordenadas automaticamente com base em seu status, utilizando a função `sort` para garantir que as tarefas em aberto apareçam antes das tarefas finalizadas.
- **Interface de Usuário**:
  - Campo de entrada para novas tarefas.
  - Botão com ícone para adicionar tarefas.
  - Lista de tarefas "dividida" entre em aberto e finalizadas, com mensagens exibidas quando a lista está vazia.
  - Remoção de Tarefas: Permite remover tarefas da lista. O usuário é solicitado a confirmar a exclusão antes que a tarefa seja removida.
  - Cartões (`CardNumber`) na parte superior para exibir informações ou estatísticas adicionais.
- **Foco no Campo de Entrada**: Após adicionar uma tarefa, o campo de entrada perde o foco automaticamente e o teclado é fechado.

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
