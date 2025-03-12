import StudentForm from "./components/StudentForm"
import StudentList from "./components/StudentList"

const App = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Quản lý Sinh Viên</h1>
      <StudentForm />
      <StudentList />
    </div>
  )
}

export default App
