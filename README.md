# Lista de Tarefa - ResTIC 36

## Descrição do Projeto!

Este projeto faz parte da residência em tecnologia ResTIC 36, pela CEPEDI, na trilha de desenvolvimento mobile, atualizado até o final da 6ª unidade. Nessa fase, o projeto já conta com `useContext`, `AsyncStorage` e validação de formulário com `Formik` e `Yup`. O objetivo é criar uma aplicação básica de lista de tarefas utilizando React Native, que permite adicionar tarefas, visualizar a lista de tarefas, visualizar detalhes da tarefa e exibir uma contagem total de tarefas. O aplicativo também conta com a funcionalidade de exibir cartões (`CardNumber`), que podem ser usados para representar informações adicionais ou estatísticas.

A aplicação inclui uma solução completa para gerenciar e atualizar a contagem das tarefas, bem como ordenar as tarefas conforme seu status (em aberto ou finalizadas). O uso da função `sort` e `useMemo` garantem que as tarefas sejam exibidas em ordem correta, e a contagem é atualizada automaticamente com base nas mudanças no estado.

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

### Tecnologias Utilizadas

- **React Native**: Para desenvolvimento do aplicativo móvel.
- **React Navigation**: Para navegação entre as telas do aplicativo.
- **Styled Components**: Para estilização e temas.
- **React Context API**: Para gerenciamento de estado entre componentes.

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
