import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Box,
  Divider,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const TaskList = ({ tasks, onDeleteTask, onCompleteTask }) => {
  return (
    <Box>
      <Typography
        variant='h6'
        gutterBottom
        sx={{ px: 2, color: "black", fontWeight: 600 }}
      >
        Your Tasks
      </Typography>
      <List sx={{ width: "100%" }}>
        {tasks.length === 0 ? (
          <Typography
            variant='body2'
            color='text.secondary'
            align='center'
            sx={{ py: 2 }}
          >
            No tasks yet. Add one!
          </Typography>
        ) : (
          tasks.map((task, index) => (
            <React.Fragment key={task.id}>
              <Paper
                elevation={2}
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateX(5px)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                    "& .delete-icon": {
                      opacity: 1,
                    },
                  },
                }}
              >
                <ListItem
                  sx={{
                    py: 2,
                    px: 3,
                    bgcolor: "white",
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                  }}
                  secondaryAction={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <IconButton
                        edge='end'
                        onClick={() => onCompleteTask(task.id)}
                        sx={{
                          color: task.is_completed
                            ? "#4caf50"
                            : "rgba(0, 0, 0, 0.54)",
                          "&:hover": {
                            color: task.is_completed
                              ? "#81c784"
                              : "rgba(0, 0, 0, 0.87)",
                          },
                        }}
                      >
                        {task.is_completed ? (
                          <CheckCircleIcon />
                        ) : (
                          <CheckCircleOutlineIcon />
                        )}
                      </IconButton>
                      <IconButton
                        edge='end'
                        onClick={() => onDeleteTask(task.id)}
                        className='delete-icon'
                        sx={{
                          color: "rgba(0, 0, 0, 0.54)",
                          opacity: 0.7,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            color: "#ff5252",
                            opacity: 1,
                          },
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  }
                >
                  <ListItemText
                    primary={
                      <Typography
                        variant='h6'
                        sx={{
                          color: "black",
                          textDecoration: task.is_completed
                            ? "line-through"
                            : "none",
                          opacity: task.is_completed ? 0.7 : 1,
                          fontWeight: task.is_completed ? 400 : 600,
                          fontSize: "1.1rem",
                        }}
                      >
                        {task.title}
                      </Typography>
                    }
                    secondary={
                      task.description && (
                        <Typography
                          variant='body2'
                          sx={{
                            color: "rgba(0, 0, 0, 0.7)",
                            mt: 1,
                            fontSize: "0.95rem",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {task.description}
                        </Typography>
                      )
                    }
                  />
                </ListItem>
              </Paper>
            </React.Fragment>
          ))
        )}
      </List>
    </Box>
  );
};

export default TaskList;
