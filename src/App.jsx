// test
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from '@mui/material';
import { Expense } from "./pages/Expense";
import { NoContent } from "./pages/NoContent";
import { Update } from "./pages/Update";
import { Add } from "./pages/Add";
import Login from "./pages/Firebase/Login";
import Context from "./components/Context";
function App() {
  const userInfo = {
    name: "Johnny",
    email: "test@gmail.com",
    loggedIn: false,

  }
  return (
    <Container maxWidth="md">
      <Context.Provider value={userInfo}>
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
      </Context.Provider>
    </Container>
  );
}

export default App;
