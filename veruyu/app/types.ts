// Для модулей обучения
export interface Module {
  id: number;
  title: string;
  description: string;
  progress: number;
}

// Для тестов
export interface Quiz {
  id: number;
  title: string;
  type: "text" | "audio";
  questionsCount: number;
  completed: boolean;
}
