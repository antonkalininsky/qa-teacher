"use client";

import React, { useMemo } from "react";
import { Box, TextField, Grid, Button } from "@mui/material";
import tasksList from "@/tasks/tasks";
import styles from "./styles.module.css";
import TrainingForm from "@/components/TrainingForm";
import Instruction from "@/components/Intruction";

export default function Test({ params }: { params: { id: number } }) {
  const currentTask = useMemo(
    () => tasksList.find((task) => task.id === Number(params.id)),
    [params.id]
  );

  return (
    <div>
      <Box className={styles.title}>{currentTask?.title}</Box>
      <Box className={styles.description}>{currentTask?.description}</Box>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TrainingForm />
        </Grid>
        <Grid item xs={6}>
          <Instruction data={currentTask} />
        </Grid>
      </Grid>
    </div>
  );
}
