import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Task } from "./src/components/Task";
import { CardNumber } from "./src/components/CardNumber";
import { Feather } from "@expo/vector-icons";

export default function App() {
  const [tasks, setTasks] = useState<
    { description: string; checked: boolean }[]
  >([]);
  const [taskText, setTaskText] = useState("");
  const [countTask, setCountTask] = useState(0);

  const inputRef = useRef(null);

  const handleAddTask = () => {
    if (!taskText.trim()) {
      return alert("Por favor, digite uma tarefa");
    }

    if (tasks.some((task) => task.description === taskText)) {
      return alert("Tarefa já existe");
    }

    const newTask = { description: taskText, checked: false };
    setTasks([...tasks, newTask]);
    setTaskText("");

    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  useEffect(() => {
    setCountTask(tasks.length);
  }, [tasks]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.inputContainer}>
        <TextInput
          ref={inputRef}
          style={styles.inputNewTask}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="white"
          value={taskText}
          onChangeText={setTaskText}
        />
        <TouchableOpacity
          style={styles.inputButtonNewTask}
          onPress={handleAddTask}
        >
          <Feather name="plus-square" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <CardNumber />
        <CardNumber />
        <CardNumber />
      </View>

      <Text style={styles.taskCount}>Lista de Tarefas: {countTask}</Text>

      <View style={styles.tasks}>
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Task task={item} />}
          ListEmptyComponent={() => (
            <View style={styles.listEmptyComponent}>
              <Text style={styles.listEmptyComponentText}>
                Você ainda não tem tarefas!
              </Text>
              <Text style={styles.listEmptyComponentText}>
                Crie uma tarefa para começar.
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

  inputContainer: {
    flexDirection: "row",
    width: "100%",
  },

  inputNewTask: {
    backgroundColor: "#252527",
    flex: 1,
    padding: 16,
    borderRadius: 4,
    color: "#fff",
  },

  inputButtonNewTask: {
    backgroundColor: "#1e1e1e",
    padding: 16,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  cardContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 16,
  },

  taskCount: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
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
});
