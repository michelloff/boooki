import { Book, Group, User, UserRole } from "./types";

export const MOCK_GROUPS: Group[] = [
  { id: 'g1', name: '1° A', studentIds: ['100002'] },
  { id: 'g2', name: '1° B', studentIds: ['100003'] },
  { id: 'g3', name: '2° A', studentIds: [] },
  { id: 'g4', name: '3° A', studentIds: [] },
  { id: 'g5', name: 'Docentes', teacherId: '100001', studentIds: [] },
];

export const INITIAL_USERS: User[] = [
  { id: '100000', name: 'Ricardo Díaz', role: UserRole.ADMIN, password: '123' },
  { id: '100001', name: 'Prof. Ana López', role: UserRole.TEACHER, password: '123', groupId: 'g5' },
  { id: '100002', name: 'Sofía Pérez', role: UserRole.STUDENT, password: '123', groupId: 'g1' },
  { id: '100003', name: 'Mateo González', role: UserRole.STUDENT, password: '123', groupId: 'g2' },
  { id: '100004', name: 'Laura Martinez', role: UserRole.PARENT, password: '123' },
];

export const INITIAL_BOOKS: Book[] = [
  {
    id: 'b1',
    title: 'El Principito',
    author: 'Antoine de Saint-Exupéry',
    category: 'Ficción',
    coverUrl: 'https://picsum.photos/seed/principito/200/300',
    totalCopies: 5,
    availableCopies: 5,
  },
  {
    id: 'b2',
    title: 'Don Quijote de la Mancha',
    author: 'Miguel de Cervantes',
    category: 'Clásicos',
    coverUrl: 'https://picsum.photos/seed/quijote/200/300',
    totalCopies: 3,
    availableCopies: 2,
  },
  {
    id: 'b3',
    title: 'Harry Potter y la Piedra Filosofal',
    author: 'J.K. Rowling',
    category: 'Fantasía',
    coverUrl: 'https://picsum.photos/seed/harry/200/300',
    totalCopies: 8,
    availableCopies: 8,
  },
  {
    id: 'b4',
    title: 'Matilda',
    author: 'Roald Dahl',
    category: 'Infantil',
    coverUrl: 'https://picsum.photos/seed/matilda/200/300',
    totalCopies: 4,
    availableCopies: 1,
  },
  {
    id: 'b5',
    title: 'El Grúfalo',
    author: 'Julia Donaldson',
    category: 'Infantil',
    coverUrl: 'https://picsum.photos/seed/grufalo/200/300',
    totalCopies: 6,
    availableCopies: 4,
  },
  {
    id: 'b6',
    title: 'Las Crónicas de Narnia',
    author: 'C.S. Lewis',
    category: 'Fantasía',
    coverUrl: 'https://picsum.photos/seed/narnia/200/300',
    totalCopies: 4,
    availableCopies: 0,
  }
];