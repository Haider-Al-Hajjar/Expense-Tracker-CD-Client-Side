// test
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from '@mui/material';
import { Expense } from "./pages/Expense";
import { NoContent } from "./pages/NoContent";
import { Update } from "./pages/Update";
import { Add } from "./pages/Add";
import Login from "./pages/Firebase/Login";
import { UserProvider } from "./components/UserContext";
import { useState } from "react";
function App() {

  return (
    <Container maxWidth="md">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Expense />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/add" element={<Add />} />
            <Route path="*" element={<NoContent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/:id" element={<Expense />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </Container>
  );
}

export default App;
