import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LibraryProvider, useLibrary } from './context/LibraryContext';
import { Login } from './pages/Login';
import { UserDashboard } from './pages/UserDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { QuizPage } from './pages/QuizPage';
import { SettingsPage } from './pages/SettingsPage';
import { UserRole } from './types';

const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode, allowedRoles?: UserRole[] }) => {
  const { currentUser, isLoading } = useLibrary();

  if (isLoading) return <div className="min-h-screen flex items-center justify-center text-primary-600">Cargando BiblioKids...</div>;

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(currentUser.role)) {
    // Redirect based on their actual role if they try to access unauthorized page
    if (currentUser.role === UserRole.ADMIN) return <Navigate to="/admin" replace />;
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      {/* Student, Teacher & Parent Routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute allowedRoles={[UserRole.STUDENT, UserRole.TEACHER, UserRole.PARENT]}>
          <UserDashboard />
        </ProtectedRoute>
      } />
      
      <Route path="/quiz" element={
        <ProtectedRoute allowedRoles={[UserRole.STUDENT]}>
          <QuizPage />
        </ProtectedRoute>
      } />

      {/* Admin Routes */}
      <Route path="/admin/*" element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN]}>
          <AdminDashboard />
        </ProtectedRoute>
      } />

      {/* Shared Routes */}
      <Route path="/settings" element={
        <ProtectedRoute>
          <SettingsPage />
        </ProtectedRoute>
      } />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

const App = () => {
  return (
    <LibraryProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </LibraryProvider>
  );
};

export default App;