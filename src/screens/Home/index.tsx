import { StatusBar } from "expo-status-bar";
import { useEffect, useContext } from "react";
import {
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import { CardNumber } from "../../components/CardNumber";
import { InputAddTask } from "../../components/InputAddTask";
import { Task } from "../../components/Task";
import { TaskContext } from "../../context/TaskContext";
import { Formik } from "formik";
import * as Yup from "yup";
import { TaskProps } from "../../utils/types";

// Definir o esquema de validação usando Yup
const TaskSchema = Yup.object().shape({
  taskText: Yup.string()
    .min(4, "No mínimo 4 caracteres")
    .max(16, "No máximo 16 caracteres")
    .required("Tarefa não pode ser vazia"),
});

export default function Home() {
  // Usar o TaskContext
  const { tasks, createTask, handleTaskChangeStatus, handleTaskDelete } =
    useContext(TaskContext);

  const handleAddTask = (taskText: string, resetForm: () => void) => {
    Keyboard.dismiss();

    if (tasks.some((task) => task.title === taskText)) {
      Alert.alert("Erro", "Essa tarefa já existe");
      return;
    }

    createTask(taskText);
    resetForm();
  };

  const confirmTaskDelete = (taskToDelete: TaskProps) => {
    Alert.alert(
      "Atenção!",
      `Você tem certeza que deseja excluir esta tarefa?\n\nTarefa:\t\t${taskToDelete.title}`,
      [
        {
          text: "Não, não quero excluir.",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Sim, quero excluir.",
          onPress: () => handleTaskDelete(taskToDelete),
          style: "destructive",
        },
      ]
    );
  };

  // Calcular contagem de tarefas
  const countTask = tasks.length;
  const countOpen = tasks.filter((task) => !task.status).length;
  const countDone = tasks.filter((task) => task.status).length;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Formik
        initialValues={{ taskText: "" }}
        validationSchema={TaskSchema}
        onSubmit={(values, { resetForm }) => {
          handleAddTask(values.taskText, resetForm);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            <InputAddTask
              onPress={handleSubmit}
              onChangeText={handleChange("taskText")}
              onBlur={handleBlur("taskText")}
              value={values.taskText}
            />
            {touched.taskText && errors.taskText && (
              <Text style={styles.errorText}>{errors.taskText}</Text>
            )}
          </View>
        )}
      </Formik>

      <View style={styles.cardContainer}>
        <CardNumber title="Cadastradas" num={countTask} color="#1E1E1E" />
        <CardNumber title="Em aberto" num={countOpen} color="#E88A1A" />
        <CardNumber title="Finalizadas" num={countDone} color="#0E9577" />
      </View>

      <View style={styles.tasks}>
        <Text style={styles.tasksText}>Tarefas:</Text>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Task
              id={item.id}
              title={item.title}
              status={item.status}
              onCheck={() => handleTaskChangeStatus(item)}
              onRemove={() => confirmTaskDelete(item)}
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
  formContainer: {
    width: "100%",
  },
  errorText: {
    color: "#FF8477",
    fontSize: 12,
    marginTop: 4,
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
