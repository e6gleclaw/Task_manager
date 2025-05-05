import React, { useState } from "react";
import { TextField, Button, Box, Paper, Typography } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask({ title, description });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 5,
        borderRadius: 4,
        border: "1px solid rgba(0, 0, 0, 0.12)",
        background: "linear-gradient(to bottom right, #ffffff, #f8f9fa)",
        maxWidth: 800,
        width: "100%",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant='h4'
          component='h2'
          sx={{
            fontWeight: 700,
            background: "linear-gradient(45deg, #1a237e 30%, #3949ab 90%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            mb: 1,
            letterSpacing: "1px",
          }}
        >
          Create Your Next Task
        </Typography>
        <Typography
          variant='subtitle1'
          sx={{
            color: "text.secondary",
            fontSize: "1.1rem",
            fontStyle: "italic",
          }}
        >
          Stay organized, stay productive
        </Typography>
      </Box>

      <Box component='form' onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label='Task Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin='normal'
          required
          variant='outlined'
          size='large'
          sx={{
            "& .MuiOutlinedInput-root": {
              fontSize: "1.1rem",
              "&:hover fieldset": {
                borderColor: "#1a237e",
              },
              "&.Mui-focused fieldset": {
                borderWidth: 2,
                borderColor: "#1a237e",
              },
            },
            "& .MuiInputLabel-root": {
              fontSize: "1.1rem",
              "&.Mui-focused": {
                color: "#1a237e",
              },
            },
            mb: 3,
          }}
        />
        <TextField
          fullWidth
          label='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin='normal'
          multiline
          rows={5}
          variant='outlined'
          sx={{
            "& .MuiOutlinedInput-root": {
              fontSize: "1.1rem",
              "&:hover fieldset": {
                borderColor: "#1a237e",
              },
              "&.Mui-focused fieldset": {
                borderWidth: 2,
                borderColor: "#1a237e",
              },
            },
            "& .MuiInputLabel-root": {
              fontSize: "1.1rem",
              "&.Mui-focused": {
                color: "#1a237e",
              },
            },
            mb: 4,
          }}
        />
        <Button
          type='submit'
          variant='contained'
          fullWidth
          size='large'
          startIcon={<AddTaskIcon />}
          sx={{
            py: 2,
            textTransform: "none",
            fontSize: "1.2rem",
            background: "linear-gradient(45deg, #1a237e 30%, #3949ab 90%)",
            boxShadow: "0 3px 5px 2px rgba(26, 35, 126, .3)",
            "&:hover": {
              background: "linear-gradient(45deg, #283593 30%, #3949ab 90%)",
              boxShadow: "0 5px 8px 2px rgba(26, 35, 126, .4)",
              transform: "translateY(-2px)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Add New Task
        </Button>
      </Box>
    </Paper>
  );
};

export default TaskForm;
