import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  CssBaseline,
  Paper,
  Grid,
} from "@mui/material";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const API_URL = "http://localhost:5000/tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleAddTask = async (taskData) => {
    try {
      const response = await axios.post(API_URL, taskData);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_URL}/${taskId}`);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleCompleteTask = async (taskId) => {
    try {
      const response = await axios.put(`${API_URL}/${taskId}/complete`);
      setTasks(
        tasks.map((task) => (task.id === taskId ? response.data : task))
      );
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh", background: "#f0f2f5" }}>
        {/* Sidebar */}
        <Paper
          elevation={3}
          sx={{
            width: 380,
            position: "fixed",
            height: "100vh",
            overflowY: "auto",
            borderRadius: 0,
            borderRight: "1px solid rgba(0, 0, 0, 0.12)",
            background: "linear-gradient(180deg, #1a237e 0%, #283593 100%)",
            color: "white",
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              variant='h4'
              component='h1'
              gutterBottom
              align='center'
              sx={{
                mb: 4,
                fontWeight: 700,
                color: "white",
                textTransform: "uppercase",
                letterSpacing: "2px",
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              Task Manager
            </Typography>
            <TaskList
              tasks={tasks}
              onDeleteTask={handleDeleteTask}
              onCompleteTask={handleCompleteTask}
            />
          </Box>
        </Paper>

        {/* Main Content */}
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            ml: "380px",
            p: 4,
            background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container maxWidth='lg'>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                py: 4,
              }}
            >
              <TaskForm onAddTask={handleAddTask} />
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default App;
