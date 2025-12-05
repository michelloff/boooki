
export enum UserRole {
  ADMIN = 'ADMIN', // Encargado / Bibliotecario
  TEACHER = 'TEACHER', // Docente
  STUDENT = 'STUDENT', // Alumno
  PARENT = 'PARENT', // Padre de Familia
}

export interface User {
  id: string; // Used for login
  name: string;
  role: UserRole;
  password?: string;
  groupId?: string; // Links student/teacher to a group
  
  // Security
  twoFactorEnabled?: boolean;
  twoFactorPin?: string; // 4-6 digit PIN
}

export interface Group {
  id: string;
  name: string;
  teacherId?: string; // One teacher per group
  studentIds: string[]; // Max 40 students
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  coverUrl: string;
  totalCopies: number;
  availableCopies: number;
  recommendedGroupIds?: string[]; // Groups recommended by teacher
}

export interface BookReport {
  question1: string; // ¿Quién es el autor?
  question2: string; // ¿Nombre del libro?
  question3: string; // Resumen
  question4: string; // Personajes principales
}

export type LoanStatus = 'ACTIVE' | 'PENDING_CONFIRMATION' | 'RETURNED';

export interface Loan {
  id: string;
  bookId: string;
  userId: string;
  borrowDate: string;
  dueDate: string; // Calculated: Selected Days + 6 Grace Days
  requestedDays: number; // 1-30
  status: LoanStatus;
  
  // Return Process
  returnDate?: string;
  report?: BookReport;
  
  // Grading
  teacherGrade?: number; // 1-10
  adminGrade?: number; // 1-10
  finalGrade?: number; // Average
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizResult {
  score: number;
  total: number;
  date: string;
  bookTitle?: string;
}
