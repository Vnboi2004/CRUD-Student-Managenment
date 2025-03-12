import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { deleteStudent } from "../redux/studentSlice";
import { useState } from "react";
import StudentForm from "./StudentForm";

const StudentList = () => {
  // useSelector: hook của Redux giúp lấy dữ liệu từ store.
  const students = useSelector((state: RootState) => state.student.students);
  const dispatch = useDispatch();
  const [editStudent, setEditStudent] = useState(null);

  return (
    <div>
      {students.map((student) => (
        <div key={student.id} className="border p-4 mb-2">
          <p><strong>{student.name}</strong> - {student.age} tuổi</p>
          <p>Email: {student.email}</p>
          <button
            onClick={() => setEditStudent(student)}
            className="bg-yellow-500 text-white px-4 py-2 mr-2"
          >
            Sửa
          </button>
          <button
            onClick={() => dispatch(deleteStudent(student.id))}
            className="bg-red-500 text-white px-4 py-2"
          >
            Xóa
          </button>
        </div>
      ))}
      {editStudent && <StudentForm student={editStudent} onSubmit={() => setEditStudent(null)} />}
    </div>
  );
};

export default StudentList;