import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import { CardNumber } from "./src/components/CardNumber";
import { InputAddTask } from "./src/components/InputAddTask";
import { Task } from "./src/components/Task";

export default function App() {
  const [tasks, setTasks] = useState<
    { description: string; checked: boolean }[]
  >([]);
  const [taskText, setTaskText] = useState("");
  const [countTask, setCountTask] = useState(0);
  const [countOpen, setCountOpen] = useState(0);
  const [countDone, setCountDone] = useState(0);

  const inputRef = useRef<TextInput>(null);

  const handleAddTask = () => {
    if (inputRef.current) {
      inputRef.current.blur();
      setTaskText("");
    }
    Keyboard.dismiss();

    if (!taskText.trim()) {
      return alert("Por favor, digite uma tarefa");
    }

    if (tasks.some((task) => task.description === taskText)) {
      return alert("Tarefa já existe");
    }

    const newTask = { description: taskText, checked: false };
    const updatedTasks = [...tasks, newTask];
    const sortedTasks = updatedTasks.sort(
      (a, b) => Number(a.checked) - Number(b.checked)
    );
    setTasks(sortedTasks);
  };

  useEffect(() => {
    setCountTask(tasks.length);
    setCountOpen(tasks.filter((task) => !task.checked).length);
    setCountDone(tasks.filter((task) => task.checked).length);
  }, [tasks]);

  function handleTaskChangeStatus(taskToChange: {
    description: string;
    checked: boolean;
  }) {
    const updatedTasks = tasks.map((task) =>
      task.description === taskToChange.description
        ? { ...task, checked: !task.checked }
        : task
    );

    const sortedTasks = updatedTasks.sort(
      (a, b) => Number(a.checked) - Number(b.checked)
    );

    setTasks(sortedTasks);
  }

  function handleTaskDelete(taskToDelete: {
    description: string;
    checked: boolean;
  }) {
    Alert.alert(
      "Atenção!",
      `Tem certeza que deseja excluir esta tarefa?\n\nTarefa:\t\t${taskToDelete.description}`,
      [
        {
          text: "Não, não quero excluir.",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Sim, sim quero excluir.",
          onPress: () => {
            const updatedTasks = tasks.filter(
              (task) => task.description !== taskToDelete.description
            );
            setTasks(updatedTasks);
          },
          style: "default",
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <InputAddTask
        inputRef={inputRef}
        onPress={handleAddTask}
        onChangeText={setTaskText}
        value={taskText}
      />

      <View style={styles.cardContainer}>
        <CardNumber title="Cadastradas" num={countTask} color="#1E1E1E" />
        <CardNumber title="Em aberto" num={countOpen} color="#E88A1A" />
        <CardNumber title="Finalizadas" num={countDone} color="#0E9577" />
      </View>

      <View style={styles.tasks}>
        <Text style={styles.tasksText}>Tarefas:</Text>
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Task
              title={item.description}
              status={item.checked}
              onCheck={() => handleTaskChangeStatus(item)}
              onRemove={() => handleTaskDelete(item)}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.listEmptyComponent}>
              <Text style={styles.listEmptyComponentText}>
                Você ainda não tem tarefas!{"\n"}Crie uma tarefa para começar.
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28385e",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
    paddingTop: 64,
    gap: 16,
  },

  cardContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 16,
  },

  tasks: {
    width: "100%",
    flex: 1,
  },

  listEmptyComponent: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },

  listEmptyComponentText: {
    color: "#fff",
    fontSize: 16,
  },

  tasksText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 16,
  },
});
