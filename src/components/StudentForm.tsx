import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent, updateStudent } from "../redux/studentSlice";

interface Student {
    id?: number;
    name: string;
    age: number;
    email: string;
};

interface Props {
    student?: Student;
    onSubmit?: () => void;  // Đúng tên prop
};


const StudentForm: React.FC<Props> = ({ student, onSubmit }) => {

    const [formData, setFormData] = useState<Student>(
        student || { name: "", age: 0, email: "" }
    );

    // Gửi action đến Redux store để cập nhật state
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = () => {
        if (student) {
            dispatch(updateStudent({ ...formData, id: student.id! }));
        } else {
            dispatch(addStudent({ ...formData, id: Date.now() }));
        }
    
        onSubmit?.();  // Dùng optional chaining để tránh lỗi nếu không có onSubmit
    };
    

    return (
        <div className="p-4 border rounded">
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tên"
                className="border p-2 mb-2 w-full"
            />
            <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Tuổi"
                className="border p-2 mb-2 w-full"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border p-2 mb-2 w-full"
            />
            <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2">
                {student ? "Cập nhật" : "Thêm"}
            </button>
        </div>
    )
}

export default StudentForm
